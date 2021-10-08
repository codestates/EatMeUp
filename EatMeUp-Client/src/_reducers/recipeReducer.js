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
  CLEAR_ERRORS,
} from "../_types/recipeTypes";

export const recipeReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case ALL_RECIPES_REQUEST:
      return {
        loading: true,
        recipes: [],
      };
    case ALL_RECIPES_SUCCESS:
      return {
        loading: false,
        recipes: action.payload.rows,
        recipeCount: action.payload.count,
      };

    case ALL_RECIPES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const recommandRecipeReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case GET_RECOMMAND_REQUEST:
      return {
        loading: true,
        recipes: [],
      };
    case GET_RECOMMAND_SUCCESS:
      return {
        loading: false,
        recommandRecipes: action.payload.data,
        food: action.payload.food.food,
      };
    case GET_RECOMMAND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getRecipeReducer = (state = { recipe: {} }, action) => {
  switch (action.type) {
    case GET_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case GET_RECIPE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
