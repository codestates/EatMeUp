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
  DELETE_FOOD_FAIL
} from '../_types/fridgeTypes'
import axios from 'axios'

import { foodData } from '../components/dummydata';

// 등록된 유통기한을 디데이로 변환하는 함수
const FOODS = foodData.map((type, typeIdx) => {
  const itemarray = type.items.map((food) => {
     const splited = food.life.split("-");
     const getDate = new Date();
     const today = new Date(
       getDate.getFullYear(),
       getDate.getMonth(),
       getDate.getDay(),
     );
     const foodLife = new Date(
       Number(splited[0]),
       Number(splited[1]),
       Number(splited[2]),
     );

     const elapsedMSec = foodLife.getTime() - today.getTime(); // 172800000
     const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24; // 2

     return {
       id: food.id,
       food_name: food.food_name,
       food_image: food.food_image,
       frez_type: food.frez_type,
       life: elapsedDay,
       created_at: food.created_at,
       update_at: food.update_at,
     };
   });

   return {
     type: typeIdx,
     items: itemarray,
   };
 });



/* 유저냉장고 정보 가져오기 */
export const allFoods = () => async (dispatch) => {

  try {
    dispatch({type: ALL_FOODS_REQUEST})

    const { data } = await axios.get(`${process.env.REACT_APP_API}/food/info`, {withCredentials: true})

    dispatch({
      type: ALL_FOODS_SUCCESS,
      payload: data.foodData
    })

  } catch(error) {
    dispatch({
      type: ALL_FOODS_FAIL,
      payload: error
    })
  }
  
}

/* 냉장고에 음식정보 저장하기 */
export const saveFridgeInfo = (foodlist) => async (dispatch) => {

  try {

    dispatch({ type: SAVE_FOOD_REQUEST})

    const { data } = await axios.put(`${process.env.REACT_APP_API}/food/info`, foodlist, {withCredentials: true})



    dispatch({
      type: SAVE_FOOD_SUCCESS,
      payload: data
    })

  } catch (error) {

    dispatch({
      type: SAVE_FOOD_FAIL,
      payload: error
    })
  }
  
}


/* 냉장고에 음식정보 추가하기 */
export const addToFridge = (food) => async (dispatch) => {

  try {

    dispatch({ type: NEW_FOOD_REQUEST})

    const { data } = await axios.post(`${process.env.REACT_APP_API}/food/info`, food, {withCredentials: true})

    dispatch({
      type: NEW_FOOD_SUCCESS,
      payload: data
    })

  } catch (error) {

    dispatch({
      type: NEW_FOOD_FAIL,
      payload: error
    })

  }
 
}

/* 냉장고에 저장된 음식 수정하기 */
export const editFood = (foodId, food) => async (dispatch) => {

  try {

    dispatch({ type: EDIT_FOOD_REQUEST})

    const { data } = await axios.put(`${process.env.REACT_APP_API}/food/info/${foodId}`, food, {withCredentials: true})

    dispatch({
      type: EDIT_FOOD_SUCCESS,
      payload: data
    })


    console.log(data)

  } catch(error) {

    dispatch({
      type: EDIT_FOOD_FAIL,
      payload: error
    })
  }
  
}

/* 냉장고에 저장된 음식 삭제하기 */
export const deleteFood = (foodId) => async (dispatch) => {

  try {
    
    dispatch({ type: DELETE_FOOD_REQUEST})

    const { data } = await axios.delete(`${process.env.REACT_APP_API}/food/info/${foodId}`, {withCredentials : true})

    console.log(data)
    dispatch({
      type: DELETE_FOOD_SUCCESS,
      payload: data
    })

  } catch(error) {

    dispatch({
      type: DELETE_FOOD_FAIL,
      payload: error
    })
  }
  
}
