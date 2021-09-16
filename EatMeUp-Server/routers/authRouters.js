const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");
const { auth } = require("../utils/checkAuth");

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", auth, logout);

module.exports = authRouter;
