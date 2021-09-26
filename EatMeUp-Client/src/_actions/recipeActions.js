import {
  ALL_RECIPES_REQUEST,
  ALL_RECIPES_SUCCESS,
  ALL_RECIPES_FAIL,
} from "../_types/recipeTypes";
import axios from 'axios';
import { myRecipes } from "../components/dummydata";


/* 모든레시피 가져오기 */

export const allRecipes = () => {
  return {
    type: ALL_RECIPES_SUCCESS,
    payload: myRecipes
  }
}

/* 추천된 레시피 가져오기 */



