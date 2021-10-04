import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  recipeReducer,
  getRecipeReducer,
  recommandRecipeReducer,
} from "./_reducers/recipeReducer";
import {
  allFoodsReducer,
  newFoodReducer,
  saveFoodReducer,
} from "./_reducers/fridgeReducer";
import { authReducer } from "./_reducers/authReducer";
import {
  getMyrecipesReducer,
  myrecipeReducer,
  mylikelistReducer,
  getMylikelistReducer,
  getUserInfoReducer,
  userInfoReducer,
} from "./_reducers/userReducer";
import {
  getMealPlansReducer,
  getRecommandReducer,
  newMealPlanReducer,
  deleteMealPlanReducer,
} from "./_reducers/calendarReducers";

import { imageReducer } from "./_reducers/imageReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const reducer = combineReducers({
  allRecipes: recipeReducer,
  recipe: getRecipeReducer,
  recommandrecipes: recommandRecipeReducer,
  allFoods: allFoodsReducer,
  food: newFoodReducer,
  savedfoods: saveFoodReducer,
  auth: authReducer,
  myrecipes: getMyrecipesReducer,
  myrecipe: myrecipeReducer,
  mylikelist: getMylikelistReducer,
  likelist: mylikelistReducer,
  user: getUserInfoReducer,
  useraction: userInfoReducer,
  image: imageReducer,
  getmealplan: getMealPlansReducer,
  getRecommand: getRecommandReducer,
  mealplan: newMealPlanReducer,
  deleteplan: deleteMealPlanReducer
});

const middlware = [thunk];
const applyPersist = persistReducer(persistConfig, reducer);
export const store = createStore(
  applyPersist,
  composeWithDevTools(applyMiddleware(...middlware)),
);
export default store;

export const persistor = persistStore(store);
