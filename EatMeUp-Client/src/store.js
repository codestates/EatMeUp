import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recipeReducer, getRecipeReducer } from './_reducers/recipeReducer'
import { allFoodsReducer, newFoodReducer, saveFoodReducer } from './_reducers/fridgeReducer'
import { authReducer } from './_reducers/authReducer';
import { getMyrecipesReducer, myrecipeReducer } from './_reducers/userReducer';
import { imageReducer } from './_reducers/imageReducer';

const persistConfig = {
  key: 'root',
  storage:storage,
  whitelist: ["auth"] 
}

const reducer = combineReducers({
 allRecipes: recipeReducer,
 recipe: getRecipeReducer,
 allFoods: allFoodsReducer,
 food: newFoodReducer,
 savedfoods: saveFoodReducer,
 auth: authReducer,
 myrecipes: getMyrecipesReducer,
 myrecipe: myrecipeReducer,
 image: imageReducer
});


const middlware = [thunk];
const applyPersist = persistReducer(persistConfig, reducer)
export const store = createStore(applyPersist, composeWithDevTools(applyMiddleware(...middlware)))
export default store;


export const persistor = persistStore(store);
