import {
  ALL_FOODS_REQUEST,
  ALL_FOODS_SUCCESS,
  ALL_FOODS_FAIL,
  NEW_FOOD_REQUEST,
  NEW_FOOD_SUCCESS,
  NEW_FOOD_RESET,
  NEW_FOOD_FAIL,
  EDIT_FOOD_REQUEST,
  EDIT_FOOD_SUCCESS,
  EDIT_FOOD_RESET,
  EDIT_FOOD_FAIL,
  SAVE_FOOD_REQUEST,
  SAVE_FOOD_SUCCESS,
  SAVE_FOOD_RESET,
  SAVE_FOOD_FAIL,
  DELETE_FOOD_REQUEST,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_RESET,
  DELETE_FOOD_FAIL,
  CLEAR_ERRORS,
} from "../_types/fridgeTypes";

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
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
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
      return {
        loading: false,
        isCreated: true,
        success: action.payload.success,
      };
    case NEW_FOOD_RESET:
      return {
        loading: false,
        isCreated: false,
      };
    case EDIT_FOOD_SUCCESS:
      return {
        loading: false,
        isEdited: true,
      };
    case EDIT_FOOD_RESET:
      return {
        loading: false,
        isEdited: false,
      };
    case DELETE_FOOD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        isDeleted: true,
      };
    case DELETE_FOOD_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case NEW_FOOD_FAIL:
    case EDIT_FOOD_FAIL:
    case DELETE_FOOD_FAIL:
      return {
        ...state,
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
        isArranged: true,
        success: action.payload.message,
      };
    case SAVE_FOOD_RESET:
      return {
        loading: false,
        isArranged: false,
      };
    case SAVE_FOOD_FAIL:
      return {
        ...state,
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
