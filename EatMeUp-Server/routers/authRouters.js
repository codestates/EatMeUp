const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");
const { guest } = require("../controllers/guestController");

const { auth } = require("../utils/checkAuth");

const authRouter = Router();

//회원 로그인
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", auth, logout);
authRouter.get("kakao");

//비회원 게스트 로그인
authRouter.post("/guest", guest);

module.exports = authRouter;
