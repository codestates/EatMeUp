import {
  ALL_RECIPES_REQUEST,
  ALL_RECIPES_SUCCESS,
  ALL_RECIPES_FAIL,
} from "../_types/recipeTypes";


export const recipeReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case ALL_RECIPES_REQUEST:
      return {
        loading: true,
        recipes: []
      };
    case ALL_RECIPES_SUCCESS:
      return {
        loading: false,
        recipes: action.payload
      };
    case ALL_RECIPES_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
