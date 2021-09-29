import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recipeReducer } from './_reducers/recipeReducer'
import { allFoodsReducer, newFoodReducer, saveFoodReducer } from './_reducers/fridgeReducer'
import { authReducer } from './_reducers/authReducer'

const reducer = combineReducers({
 allRecipes: recipeReducer,
 allFoods: allFoodsReducer,
 food: newFoodReducer,
 savedfoods: saveFoodReducer,
 auth: authReducer,
});
const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))

export default store;