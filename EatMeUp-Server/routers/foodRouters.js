const { Router } = require("express");
const {
  addFood,
  getFood,
  modFood,
  delFood,
  modType,
} = require("../controllers/myFoodController");
const { auth } = require("../utils/checkAuth");

const foodRouter = Router();

foodRouter.route("/info").all(auth).post(addFood).get(getFood).put(modType);

foodRouter.route("/info/:id").all(auth).put(modFood).delete(delFood);

module.exports = foodRouter;
