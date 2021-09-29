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
import axios from "axios";

/* 모든레시피 가져오기 */

export const allRecipes = (page) => async (dispatch) => {


  try {
console.log(page)
    dispatch({type: ALL_RECIPES_REQUEST})

    const { data } = await axios.post(`${process.env.REACT_APP_API}/recipe/info`, page, {withCredentials: true})

    dispatch({
      type: ALL_RECIPES_SUCCESS,
      payload: data.recipeInfo
    })

  } catch (error) {
    dispatch({
      type: ALL_RECIPES_FAIL,
      payload: error
    })
  }
 
};

/* 추천된 레시피 가져오기 */
export const getRecommandRecipe = (food) => async (dispatch) => {

  try {
    console.log(food)

    dispatch({ type: GET_RECOMMAND_REQUEST })

    const { data } = await axios.post(`${process.env.REACT_APP_API}/recipe/food`, food , {withCredentials: true})

    dispatch({
      type: GET_RECOMMAND_SUCCESS,
      payload: data.recipeInfo[0]
    })

  } catch(error) {

    dispatch({
      type: GET_RECOMMAND_FAIL,
      payload: error
    })
  }

}

/* 레시피 상세정보 가져오기 */
export const getRecipeDetail = (id) => async (dispatch) => {

   try {

    dispatch({ type: GET_RECIPE_REQUEST})

    const { data } = await axios.get(`${process.env.REACT_APP_API}/recipe/info/${id}`, {withCredentials: true})

    dispatch({
      type: GET_RECIPE_SUCCESS,
      payload: data.recipes
    })

   } catch(error) {
     dispatch({
       type: GET_RECIPE_FAIL,
       payload: error
     })
   }

}