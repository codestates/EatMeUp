const { User } = require("../models");
require("dotenv").config();
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const {
  genGuestAccessToken,
  genGuestRefreshToken,
} = require("../utils/tokenGenerator");

const guest = async (req, res) => {
  // 게스트 로그인 요청이 들어오면
  // 1. 만료된 게스트 계정 삭제
  const guestToDelete = await User.findAll({ where: { guest: true } });

  const deleteGuests = async () => {
    for (let [_, guest] of guestToDelete.entries()) {
      try {
        const deleteGuest = jwt.verify(
          guest.refresh_token,
          config.refreshSecret,
        );
      } catch (error) {
        const guestId = guest.id;
        await User.destroy({ where: { id: guestId } });
      }
    }
  };

  deleteGuests();

  try {
    // 2. 회원가입
    const guestReq = { ...req.body };

    const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(guestReq.password, salt);

    guestReq.password = hash;

    const guest = { ...guestReq, guest: true };

    await User.create(guest);

    // 3. 로그인
    //유저확인
    const guestCheck = await User.findOne({ where: { email: guest.email } });

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      guestCheck.password,
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
      id: guestCheck.id,
      username: guestCheck.username,
      email: guestCheck.email,
    };
    //토큰생성
    const accessToken = genGuestAccessToken(userData);
    const refreshToken = genGuestRefreshToken(userData);

    guestCheck.refresh_token = refreshToken;

    const updateUser = await guestCheck.save();
    //토큰전송
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
      message: "guest login success",
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      isAuth: false,
      message: "guest login fail",
    });
  }
};

module.exports = { guest };
