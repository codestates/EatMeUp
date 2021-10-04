import {
  GET_MEALPLANS_REQUEST,
  GET_MEALPLANS_SUCCESS,
  GET_MEALPLANS_FAIL,
  NEW_MEALPLAN_REQUEST,
  NEW_MEALPLAN_SUCCESS,
  NEW_MEALPLAN_FAIL,
  DELETE_MEALPLAN_REQUEST,
  DELETE_MEALPLAN_SUCCESS,
  DELETE_MEALPLAN_FAIL,
  GET_RECOMMAND_REQUEST,
  GET_RECOMMAND_SUCCESS,
  GET_RECOMMAND_FAIL,
  CLEAR_ERRORS,
} from "../_types/calendarTypes";

import axios from "axios";

export const getMealPlans = () => async (dispatch) => {
  try {

    dispatch({
      type: GET_MEALPLANS_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API}/calendar/mealplan`,
      { withCredentials: true },
    );
    console.log(data.mealPlan);
    dispatch({
      type: GET_MEALPLANS_SUCCESS,
      payload: data.mealPlan
    });

  } catch (error) {
    dispatch({
      type: GET_MEALPLANS_FAIL,
      payload: error,
    });
  }
};

export const getRecommandRecipes = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_RECOMMAND_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API}`);
  } catch (error) {
    dispatch({
      type: GET_RECOMMAND_FAIL,
      payload: error,
    });
  }
};

export const createMealPlan = (plan) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_MEALPLAN_REQUEST,
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/calendar/mealplan`,
      plan,
      { withCredentials: true },
    );

    dispatch({
      type: GET_MEALPLANS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_MEALPLAN_FAIL,
      payload: error,
    });
  }
};

export const deleteMealPlan = () => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_MEALPLAN_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API}`);
  } catch (error) {
    dispatch({
      type: DELETE_MEALPLAN_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};