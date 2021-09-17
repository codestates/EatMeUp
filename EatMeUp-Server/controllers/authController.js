const { User } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");
const { genAccessToken, genRefreshToken } = require("../utils/tokenGenerator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//회원가입
const signup = async (req, res) => {
  try {
    //1. 중복검사
    const validCheck = await User.findOne({ where: { email: req.body.email } });
    //  중복되는 이메일 없으면 생성
    if (!validCheck) {
      const user = req.body;

      const salt = await bcrypt.genSalt(saltRounds);

      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;

      await User.create(user);

      return res.status(201).json({
        success: true,
        message: "signup success",
      });
    }
    //중복되는게 있으면
    return res.status(400).json({
      success: false,
      message: "signup fail",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "signup fail",
      error: error,
    });
  }
};

//로그인
const login = async (req, res) => {
  try {
    //유저확인
    const userCheck = await User.findOne({ where: { email: req.body.email } });
    //유저가 없으면
    if (!userCheck) {
      return res.status(400).json({
        success: false,
        message: "login fail",
      });
    }
    //유저가 있으면 -> 비밀번호확인
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      userCheck.password,
    );
    //비밀번호 불일치
    if (!passwordCheck) {
      return res.status(400).json({
        success: false,
        message: "login fail",
      });
    }
    //일치 -> 토큰생성, db에 refresh, cookie에 access, refresh 넣어주기
    const userData = {
      id: userCheck.id,
      username: userCheck.username,
      email: userCheck.email,
    };
    //토큰생성
    const accessToken = genAccessToken(userData);
    const refreshToken = genRefreshToken(userData);

    //Db에 refresh 저장
    userCheck.refresh_token = refreshToken;
    await userCheck.save();

    //쿠키,응답보내주기
    res.status(201).cookie("accessToken", accessToken, {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    res.status(201).cookie("refreshToken", refreshToken, {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    return res.status(201).json({
      success: true,
      isAuth: true,
      message: "login success",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      isAuth: false,
      message: "login fail",
      error: error,
    });
  }
};
//로그아웃
const logout = async (req, res) => {
  try {
    //토큰으로 유저 검증
    const logoutUser = jwt.verify(req.cookies.accessToken, config.accessSecret);
    //DB에서 유저 찾기
    const userCheck = await User.findOne({ where: { id: logoutUser.id } });
    //refresh 삭제
    userCheck.refresh_token = null;
    await userCheck.save();
    //쿠키삭제
    res.status(200).clearCookie("accessToken", {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    res.status(200).clearCookie("refreshToken", {
      domain: process.env.NODE_ENV ? "api.eatmeup.me" : "localhost",
      path: "/",
      sameSite: "none",
      httpOnly: true,
      secure: process.env.NODE_ENV ? true : false,
    });
    return res.status(200).json({
      success: true,
      isAuth: false,
      message: "logout success",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "logout fail",
      error: error,
    });
  }
};

module.exports = { signup, login, logout };
