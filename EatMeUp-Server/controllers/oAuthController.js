const { User } = require("../models");
require("dotenv").config();
const { genAccessToken, genRefreshToken } = require("../utils/tokenGenerator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const socialLogin = async (req, res) => {
  try {
    const kakaoInfo = req.body;

    //카카오로그인 요청시 이메일 중복 검사
    let userCheck = await User.findOne({ where: { email: kakaoInfo.email } });

    const userData = {
      id: userCheck ? userCheck.id : undefined,
      email: userCheck ? userCheck.email : undefined,
      username: userCheck ? kakaoInfo.username : undefined,
    };

    //가입된 이메일이 있으면
    //1. 카카오톡 닉네임, 프로필사진 최신화
    if (userCheck) {
      //1-1. 닉네임, 프로필사진 최신화
      userCheck.username = kakaoInfo.username;
      userCheck.avatar = kakaoInfo.avatar;

      await userCheck.save();
    } else {
      //1-2. 없으면 회원가입 후 -> 로그인 시켜주기
      const salt = await bcrypt.genSalt(saltRounds);

      const hash = await bcrypt.hash(String(kakaoInfo.id), salt);

      const newUser = {
        username: kakaoInfo.username,
        email: kakaoInfo.email,
        avatar: kakaoInfo.avatar,
        password: hash,
      };
      userCheck = await User.create(newUser);

      userData.id = userCheck.id;
      userData.email = userCheck.email;
      userData.username = userCheck.username;
    }
    //2. 로그인 시켜주기
    //2-1. 토큰생성
    const accessToken = genAccessToken(userData);
    const refreshToken = genRefreshToken(userData);
    //2-2. Db에 refresh 저장

    userCheck.refresh_token = refreshToken;

    await userCheck.save();
    //2-3. 쿠키,응답보내주기
    res.status(200).cookie("accessToken", accessToken, {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    res.status(200).cookie("refreshToken", refreshToken, {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    return res.status(200).json({
      success: true,
      isAuth: true,
      message: "[social] login success",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { socialLogin };
