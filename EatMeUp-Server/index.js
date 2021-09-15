const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;
const { sequelize, Recipe } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.get("/test", async (req, res) => {
  const test = await Recipe.findOne({ where: { post_user_id: 2 } });
  console.log(test);
  return res.json(test);
});

app.post("/qtest", async (req, res) => {
  try {
    const test = await Recipe.create({
      title: "test",
      description: "test",
      main_image: "test",
      foods: [
        [null, "test"],
        ["test", "test"],
      ],
      steps: [
        ["test", "test"],
        [null, "test"],
      ],
      post_user_id: 2,
    });
    console.log(test);
    return res.json(test);
  } catch (error) {
    return res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Server open`);
});
