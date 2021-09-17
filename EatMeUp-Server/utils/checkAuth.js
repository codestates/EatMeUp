const { User } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");
const { genAccessToken } = require("./tokenGenerator");

//유효여부 확인 및 재발급
const auth = async (req, res, next) => {
  try {
    //토큰 유효 여부 확인
    const accessToken = req.cookies.accessToken;
    const accessDecoded = jwt.verify(accessToken, config.accessSecret);
    // 유효하면 아래 코드 실행, 유효하지 않으면 error로 잡힘
    req.cookies.accessToken = accessToken;
    return next();
  } catch (error) {
    try {
      //토큰이 유효하지 않으면 토큰재발급
      //refresh 검증
      const refreshToken = req.cookies.refreshToken;
      const refreshDecoded = jwt.verify(refreshToken, config.refreshSecret);
      // 유효하면 아래 코드 실행, 유효하지 않으면 error로 잡힘
      const authUser = await User.findOne({ where: { id: refreshDecoded.id } });
      //DB의 refresh와 비교
      if (authUser.refresh_token === refreshToken) {
        //일치하면 토큰재발급
        req.cookies.accessToken = genAccessToken(userData);
        req.body.userData = refreshDecoded;
        return next();
      }
      //일치 안하면 다시 로그인해야함
      res.status(401).json({
        isAuth: false,
        message: "please login",
      });
    } catch (error) {
      //refresh까지 유효하지 않으면 다시 로그인해야함
      res.status(401).json({
        isAuth: false,
        message: "please login",
      });
    }
  }
};

module.exports = { auth };
