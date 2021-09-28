import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { recipeReducer } from './_reducers/recipeReducer'
import { allFoodsReducer } from './_reducers/fridgeReducer'

const reducer = combineReducers({
 allRecipes: recipeReducer,
 allFoods: allFoodsReducer
});
const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))

export default store;