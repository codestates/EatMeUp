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
} from "../_types/fridgeTypes";

import { foodData } from "../components/dummydata";

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

export const allFoodsReducer = (state = { foods: [] }, action) => {
  switch (action.type) {
    case ALL_FOODS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_FOODS_SUCCESS:
      return {
        loading: false,
        foods: action.payload,
      };
    case ALL_FOODS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const newFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_FOOD_REQUEST:
    case EDIT_FOOD_REQUEST:
    case DELETE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_FOOD_SUCCESS:
    case EDIT_FOOD_SUCCESS:
    case DELETE_FOOD_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
      };
    case NEW_FOOD_FAIL:
    case EDIT_FOOD_FAIL:
    case DELETE_FOOD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const saveFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_FOOD_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
      };
    case SAVE_FOOD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};