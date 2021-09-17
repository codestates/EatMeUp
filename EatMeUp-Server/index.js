const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 80;
const { sequelize } = require("./models");
const authRouter = require("./routers/authRouters");
const imageRouter = require("./routers/imageRouters");
const userRouter = require("./routers/userRouters");
const apiRouter = require("./routers/apiRouters");
const myRecipeRouter = require("./routers/myRecipeRouters");

app.use(logger("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use("/user", userRouter);
app.use("/myRecipe", myRecipeRouter);
app.use("/food", foodRouter);
app.use("/recipeAPI", apiRouter);
app.use("/auth", authRouter);
app.use("/image", imageRouter);

sequelize
  .sync({ force: false })
  .then(() => console.log("db접속 성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server open`);
});
