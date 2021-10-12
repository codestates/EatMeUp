import {
  GET_MYECIPES_REQUEST,
  GET_MYECIPES_SUCCESS,
  GET_MYECIPES_FAIL,
  NEW_MYRECIPE_REQUEST,
  NEW_MYRECIPE_SUCCESS,
  NEW_MYRECIPE_FAIL,
  EDIT_MYRECIPE_REQUEST,
  EDIT_MYRECIPE_SUCCESS,
  EDIT_MYRECIPE_FAIL,
  DELETE_MYRECIPE_REQUEST,
  DELETE_MYRECIPE_SUCCESS,
  DELETE_MYRECIPE_FAIL,
  GET_LIKELIST_REQUEST,
  GET_LIKELIST_SUCCESS,
  GET_LIKELIST_FAIL,
  ADD_TO_LIKELIST_REQUEST,
  ADD_TO_LIKELIST_SUCCESS,
  ADD_TO_LIKELIST_FAIL,
  REMOVE_FROM_LIKELIST_REQUEST,
  REMOVE_FROM_LIKELIST_SUCCESS,
  REMOVE_FROM_LIKELIST_FAIL,
  GET_USERINFO_REQUEST,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_FAIL,
  EDIT_USERINFO_REQUEST,
  EDIT_USERINFO_SUCCESS,
  EDIT_USERINFO_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERRORS,
} from "../_types/userTypes";
import axios from "axios";

/* 마이레시피 정보가져오기 */
export const getMyrecipes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MYECIPES_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/myRecipe/info`,
      { withCredentials: true },
    );

    dispatch({
      type: GET_MYECIPES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MYECIPES_FAIL,
      payload: error,
    });
  }
};

/* 새로운 레시피 저장하기 */
export const createMyRecipe = (newRecipe) => async (dispatch) => {
  try {
    dispatch({ type: NEW_MYRECIPE_REQUEST });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/myRecipe/info`,
      newRecipe,
      { withCredentials: true },
    );

    dispatch({
      type: NEW_MYRECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_MYRECIPE_FAIL,
      payload: error,
    });
  }
};

/* 마이레시피 수정하기 */
export const editMyrecipe = (id, recipe) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_MYRECIPE_REQUEST });

    const { data } = await axios.put(
      `${process.env.REACT_APP_API}/myRecipe/info/${id}`,
      recipe,
      { withCredentials: true },
    );

    dispatch({
      type: EDIT_MYRECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_MYRECIPE_FAIL,
      payload: error,
    });
  }
};

/* 마이레시피 삭제하기 */
export const deleteMyrecipe = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_MYRECIPE_REQUEST });

    const { data } = await axios.delete(
      `${process.env.REACT_APP_API}/myRecipe/info/${id}`,
      { withCredentials: true },
    );

    dispatch({
      type: DELETE_MYRECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MYRECIPE_FAIL,
      payload: error,
    });
  }
};

/* 좋아요한 레시피 정보가져오기 */
export const getMyLikelist = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LIKELIST_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/user/likelist`,
      { withCredentials: true },
    );

    dispatch({
      type: GET_LIKELIST_SUCCESS,
      payload: data.recipes,
    });
  } catch (error) {
    dispatch({
      type: GET_LIKELIST_FAIL,
      payload: error,
    });
  }
};

/* 유저 정보가져오기 */
export const getUserinfo = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERINFO_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_API}/user/info`, {withCredentials: true});

    dispatch({
      type: GET_USERINFO_SUCCESS,
      payload: data.findInfo,
    });
  } catch (error) {
    dispatch({
      type: GET_USERINFO_FAIL,
      payload: error,
    });
  }
};

/* 유저 정보 수정하기 */
export const editUserinfo = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_USERINFO_REQUEST });

    const { data } = await axios.put(`${process.env.REACT_APP_API}/user/info`, userInfo, { withCredentials: true });

    console.log(data)
    dispatch({
      type: EDIT_USERINFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_USERINFO_FAIL,
      payload: error,
    });
  }
};

/* 유저 계정 삭제하기 */
export const deleteMyaccount = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`${process.env.REACT_APP_API}/user/info/${id}`, {withCredentials: true});
    console.log(data)
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error,
    });
  }
};

export const addToLikelist = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_LIKELIST_REQUEST });

    const { data } = await axios.post(`${process.env.REACT_APP_API}/user/likelist`, id, { withCredentials: true });
  
    dispatch({
      type: ADD_TO_LIKELIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_LIKELIST_FAIL,
      payload: error,
    });
  }
};

export const removeFromLikelist = (id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_LIKELIST_REQUEST });

    const { data } = await axios.delete(`${process.env.REACT_APP_API}/user/likelist/${id}`, { withCredentials: true });

    dispatch({
      type: REMOVE_FROM_LIKELIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_LIKELIST_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
