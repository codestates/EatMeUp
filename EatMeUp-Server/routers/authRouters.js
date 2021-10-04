const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");
const { socialLogin } = require("../controllers/oAuthController");
const { guest } = require("../controllers/guestController");

const { auth } = require("../utils/checkAuth");

const authRouter = Router();

//회원 로그인
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", auth, logout);

//소셜 로그인
authRouter.post("/kakao", socialLogin);
authRouter.post("/google", socialLogin);

//비회원 게스트 로그인
authRouter.post("/guest", guest);

module.exports = authRouter;
