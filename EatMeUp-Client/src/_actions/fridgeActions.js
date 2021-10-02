import {
  ALL_FOODS_REQUEST,
  ALL_FOODS_SUCCESS,
  ALL_FOODS_FAIL,
  NEW_FOOD_REQUEST,
  NEW_FOOD_SUCCESS,
  NEW_FOOD_FAIL,
  EDIT_FOOD_REQUEST,
  EDIT_FOOD_SUCCESS,
  EDIT_FOOD_FAIL,
  SAVE_FOOD_REQUEST,
  SAVE_FOOD_SUCCESS,
  SAVE_FOOD_FAIL,
  DELETE_FOOD_REQUEST,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_FAIL,
  CLEAR_ERRORS,
} from "../_types/fridgeTypes";
import axios from "axios";

/* 유저냉장고 정보 가져오기 */
export const allFoods = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_FOODS_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_API}/food/info`, {
      withCredentials: true,
    });

    dispatch({
      type: ALL_FOODS_SUCCESS,
      payload: data.foodData,
    });
  } catch (error) {
    dispatch({
      type: ALL_FOODS_FAIL,
      payload: error,
    });
  }
};

/* 냉장고에 음식정보 저장하기 */
export const saveFridgeInfo = (foodlist) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_FOOD_REQUEST });

    const { data } = await axios.put(
      `${process.env.REACT_APP_API}/food/info`,
      foodlist,
      { withCredentials: true },
    );

    dispatch({
      type: SAVE_FOOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAVE_FOOD_FAIL,
      payload: error,
    });
  }
};

/* 냉장고에 음식정보 추가하기 */
export const addToFridge = (food) => async (dispatch) => {
  try {
    dispatch({ type: NEW_FOOD_REQUEST });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/food/info`,
      food,
      { withCredentials: true },
    );

    dispatch({
      type: NEW_FOOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_FOOD_FAIL,
      payload: error,
    });
  }
};

/* 냉장고에 저장된 음식 수정하기 */
export const editFood = (foodId, food) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_FOOD_REQUEST });

    const { data } = await axios.put(
      `${process.env.REACT_APP_API}/food/info/${foodId}`,
      food,
      { withCredentials: true },
    );

    dispatch({
      type: EDIT_FOOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_FOOD_FAIL,
      payload: error,
    });
  }
};

/* 냉장고에 저장된 음식 삭제하기 */
export const deleteFood = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FOOD_REQUEST });

    const { data } = await axios.delete(
      `${process.env.REACT_APP_API}/food/info/${foodId}`,
      { withCredentials: true },
    );

    dispatch({
      type: DELETE_FOOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_FOOD_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
