import {
  GET_MEALPLANS_REQUEST,
  GET_MEALPLANS_SUCCESS,
  GET_MEALPLANS_FAIL,
  NEW_MEALPLAN_REQUEST,
  NEW_MEALPLAN_SUCCESS,
  NEW_MEALPLAN_RESET,
  NEW_MEALPLAN_FAIL,
  DELETE_MEALPLAN_REQUEST,
  DELETE_MEALPLAN_SUCCESS,
  DELETE_MEALPLAN_RESET,
  DELETE_MEALPLAN_FAIL,
  GET_RECOMMAND_REQUEST,
  GET_RECOMMAND_SUCCESS,
  GET_RECOMMAND_RESET,
  GET_RECOMMAND_FAIL,
  CLEAR_ERRORS,
} from "../_types/calendarTypes";

export const getMealPlansReducer = (state = { plans: [] }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getRecommandReducer = (state = { recommandedRecipe: [] }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const newMealPlanReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const deleteMealPlanReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
