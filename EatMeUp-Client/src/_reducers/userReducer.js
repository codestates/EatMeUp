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
  DELETE_MYRECIPE_RESET,
  DELETE_MYRECIPE_FAIL,
  GET_LIKELIST_REQUEST,
  GET_LIKELIST_SUCCESS,
  GET_LIKELIST_FAIL,
  ADD_TO_LIKELIST_REQUEST,
  ADD_TO_LIKELIST_SUCCESS,
  ADD_TO_LIKELIST_RESET,
  ADD_TO_LIKELIST_FAIL,
  REMOVE_FROM_LIKELIST_REQUEST,
  REMOVE_FROM_LIKELIST_SUCCESS,
  REMOVE_FROM_LIKELIST_RESET,
  REMOVE_FROM_LIKELIST_FAIL,
  GET_USERINFO_REQUEST,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_FAIL,
  EDIT_USERINFO_REQUEST,
  EDIT_USERINFO_SUCCESS,
  EDIT_USERINFO_RESET,
  EDIT_USERINFO_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERRORS,
} from "../_types/userTypes";

export const getMyrecipesReducer = (state = { myrecipe: [] }, action) => {
  switch (action.type) {
    case GET_MYECIPES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MYECIPES_SUCCESS:
      return {
        loading: false,
        myrecipe: action.payload.recipeInfo,
      };
    case GET_MYECIPES_FAIL:
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

export const myrecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_MYRECIPE_REQUEST:
    case EDIT_MYRECIPE_REQUEST:
    case DELETE_MYRECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_MYRECIPE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      };
    case EDIT_MYRECIPE_SUCCESS:
      return {
        loading: false,
        isEdited: action.payload.success,
      };
    case DELETE_MYRECIPE_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload.success,
      };
    case DELETE_MYRECIPE_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case NEW_MYRECIPE_FAIL:
    case EDIT_MYRECIPE_FAIL:
    case DELETE_MYRECIPE_FAIL:
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

export const getMylikelistReducer = (state = { mylikelist: [] }, action) => {
  switch (action.type) {
    case GET_LIKELIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIKELIST_SUCCESS:
      return {
        loading: false,
        mylikelist: action.payload,
      };
    case GET_LIKELIST_FAIL:
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
export const mylikelistReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_LIKELIST_REQUEST:
    case REMOVE_FROM_LIKELIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_LIKELIST_SUCCESS:
      return {
        loading: false,
        isAdded: true,
        success: action.payload.success,
      };
    case REMOVE_FROM_LIKELIST_SUCCESS:
      return {
        loading: false,
        isDeleted: true,
        success: action.payload.success,
      };
    case ADD_TO_LIKELIST_RESET:
      return {
        loading: false,
        isAdded: false,
      };
    case REMOVE_FROM_LIKELIST_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case ADD_TO_LIKELIST_FAIL:
    case REMOVE_FROM_LIKELIST_FAIL:
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

export const getUserInfoReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USERINFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERINFO_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USERINFO_FAIL:
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

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USERINFO_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USERINFO_SUCCESS:
      return {
        loading: false,
        isEdited: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        isDeleted: true,
      };
    case EDIT_USERINFO_RESET:
      return {
        loading: false,
        isEdited: false,
      };
    case EDIT_USERINFO_FAIL:
    case DELETE_USER_FAIL:
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
