const { Router } = require("express");
const { s3url } = require("../controllers/imageController");
const { auth } = require("../utils/checkAuth");

const imageRouter = Router();

imageRouter.get("/s3url", auth, s3url);

module.exports = imageRouter;
