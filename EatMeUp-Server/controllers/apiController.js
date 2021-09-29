const { Recipe } = require("../models");
const request = require("request-promise-native");

const setFood = async (req, res) => {
  let api = null;
  const { from, to, start } = req.body;
  let options = {
    method: "GET",
    url: `http://211.237.50.150:7080/openapi/f0da1acb69c648fe1e80fc33b4dcea272ccfc96053aa0060e201ce53ac038132/json/Grid_20150827000000000227_1/${from}/${to}`,
    // 1/1000, 1000/1999, 1994/2993, 2991/3986, 3986/4982, 4982/5556
    headers: {},
  };
  await request(options, function (error, response) {
    if (error) {
      console.log(error);
    }
    api = JSON.parse(response.body);
  });
  const foods = api.Grid_20150827000000000227_1.row;
  let data = [];
  let total = [];
  let recipeId = start; // 아이디값 수정필요 1, 86, 177, 263, 360, 448

  foods.forEach(({ RECIPE_ID, IRDNT_NM, IRDNT_CPCTY, IRDNT_TY_NM }) => {
    try {
      console.log(RECIPE_ID, IRDNT_NM, IRDNT_CPCTY, IRDNT_TY_NM);
      if (recipeId !== RECIPE_ID) {
        total.push(data);
        data = [];
        data.push({ name: IRDNT_NM, capacity: IRDNT_CPCTY });
        recipeId = RECIPE_ID;
      } else {
        data.push({ name: IRDNT_NM, capacity: IRDNT_CPCTY });
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(total);
  });

  const insertFood = async () => {
    for (let [index, value] of total.entries()) {
      console.log(index, value);
      const recipeInfo = await Recipe.findOne({
        where: { id: index + start }, // 아이디값 수정필요 1,86,177
      });
      // console.log(recipeInfo);
      recipeInfo.foods = value;
      await recipeInfo.save();
    }
  };
  insertFood();
};

const setStep = async (req, res) => {
  let api = null;
  const { from, to, start } = req.body;
  let options = {
    method: "GET",
    url: `http://211.237.50.150:7080/openapi/f0da1acb69c648fe1e80fc33b4dcea272ccfc96053aa0060e201ce53ac038132/json/Grid_20150827000000000228_1/${from}/${to}`, // 1/995, 995/1991, 1991/2649 // todo
    headers: {},
  };
  await request(options, function (error, response) {
    if (error) {
      console.log(error);
    }
    api = JSON.parse(response.body);
  });
  const steps = api.Grid_20150827000000000228_1.row; // todo
  let data = [];
  let total = [];
  let recipeId = start; // 아이디값 수정필요 1, 184, 375 // todo

  steps.forEach(
    ({ RECIPE_ID, COOKING_NO, COOKING_DC, STRE_STEP_IMAGE_URL }) => {
      try {
        console.log(RECIPE_ID, COOKING_NO, COOKING_DC, STRE_STEP_IMAGE_URL);
        if (recipeId !== RECIPE_ID) {
          total.push(data);
          data = [];
          data.push({
            cookingNum: COOKING_NO,
            recipe: COOKING_DC,
            image: STRE_STEP_IMAGE_URL,
          });
          recipeId = RECIPE_ID;
        } else {
          data.push({
            cookingNum: COOKING_NO,
            recipe: COOKING_DC,
            image: STRE_STEP_IMAGE_URL,
          });
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(total);
    },
  );

  const insertStep = async () => {
    for (let [index, value] of total.entries()) {
      console.log(index, value);
      const recipeInfo = await Recipe.findOne({
        where: { id: index + start }, // 아이디값 수정필요 1,184 // todo
      });
      // console.log(recipeInfo);
      recipeInfo.steps = value;
      await recipeInfo.save();
    }
  };
  insertStep();
};

module.exports = {
  setFood,
  setStep,
};
