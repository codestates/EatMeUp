const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 80;
const { sequelize, Recipe } = require("./models");
const authRouter = require("./routers/authRouters");
const imageRouter = require("./routers/imageRouter");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

sequelize
  .sync({ force: false })
  .then(() => console.log("db접속 성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/image", imageRouter);

app.listen(port, () => {
  console.log(`Server open`);
});
