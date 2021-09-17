const express = require("express");
const { setFood, setStep } = require("../controllers/apiController");

const apiRouter = express.Router();

apiRouter.post("/food", setFood);
apiRouter.post("/step", setStep);

module.exports = apiRouter;
