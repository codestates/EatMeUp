import {
  ALL_RECIPES_REQUEST,
  ALL_RECIPES_SUCCESS,
  ALL_RECIPES_FAIL,
  GET_RECOMMAND_REQUEST,
  GET_RECOMMAND_SUCCESS,
  GET_RECOMMAND_FAIL,
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
} from "../_types/recipeTypes";


export const recipeReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case ALL_RECIPES_REQUEST:
    case GET_RECOMMAND_REQUEST:
      return {
        loading: true,
        recipes: [],
      };
    case ALL_RECIPES_SUCCESS:
      return {
        loading: false,
        recipes: action.payload.rows,
        recipeCount: action.payload.count
      };
      case GET_RECOMMAND_SUCCESS:
        return {
          loading:false,
          recipes: action.payload.data,
          food: action.payload.food
        }
    case ALL_RECIPES_FAIL:
    case GET_RECOMMAND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPE_SUCCESS:
      return {
        loading: false,
        recipe: action.payload,
      };
    case GET_RECIPE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
  
};
