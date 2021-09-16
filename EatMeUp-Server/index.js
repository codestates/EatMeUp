const express = require("express");
const logger = require("morgan");
const request = require("request-promise-native");
const cors = require("cors");
const app = express();
const port = 80;
const { sequelize, Recipe } = require("./models");
const userRouter = require("./routers/userRouters");

app.use(logger("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use("/user", userRouter);

sequelize
  .sync({ force: false })
  .then(() => console.log("db접속 성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/recipeApi", async (req, res) => {
  let api = null;
  let options = {
    method: "GET",
    url: "http://211.237.50.150:7080/openapi/f0da1acb69c648fe1e80fc33b4dcea272ccfc96053aa0060e201ce53ac038132/json/Grid_20150827000000000227_1/1994/2993",
    headers: {},
  };
  await request(options, function (error, response) {
    if (error) {
      console.log(error);
    }
    api = JSON.parse(response.body);
  });
  // console.log(api.Grid_20150827000000000227_1.row);
  const foods = api.Grid_20150827000000000227_1.row;
  let data = [];
  let total = [];
  let recipeId = 177; // 아이디값 수정필요

  foods.forEach(({ RECIPE_ID, IRDNT_NM, IRDNT_CPCTY, IRDNT_TY_NM }) => {
    try {
      console.log(RECIPE_ID, IRDNT_NM, IRDNT_CPCTY, IRDNT_TY_NM);
      if (recipeId !== RECIPE_ID) {
        total.push(data);

        data = [];
        data.push({ IRDNT_NM: IRDNT_NM, IRDNT_CPCTY: IRDNT_CPCTY });
        recipeId = RECIPE_ID;
      } else {
        data.push({ IRDNT_NM: IRDNT_NM, IRDNT_CPCTY: IRDNT_CPCTY });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(total);
  });

  const test = async () => {
    for (let [index, value] of total.entries()) {
      console.log(index, value);
      const recipeInfo = await Recipe.findOne({
        where: { id: index + 177 }, // 아이디값 수정필요
      });
      console.log(recipeInfo);
      recipeInfo.foods = JSON.stringify(value);
      await recipeInfo.save();
    }
  };
  test();
});

app.listen(port, () => {
  console.log(`Server open`);
});
