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

  GET_USERINFO_REQUEST,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_FAIL,

  EDIT_USERINFO_REQUEST,
  EDIT_USERINFO_SUCCESS,
  EDIT_USERINFO_FAIL,
  
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
 
} from "../_types/userTypes";


export const getMyrecipesReducer = (state = { myrecipe : [] }, action) => {
  switch(action.type) {
    case GET_MYECIPES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_MYECIPES_SUCCESS:
      return {
        loading: false,
        myrecipe: action.payload.Recipes
      }
    case GET_MYECIPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }

}

export const myrecipeReducer = (state = {}, action) => {
  switch(action.type) {

    case NEW_MYRECIPE_REQUEST:
    case EDIT_MYRECIPE_REQUEST:
    case DELETE_MYRECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NEW_MYRECIPE_SUCCESS:
      return {
        loading:false,
        success: action.payload.success
      }
    case EDIT_MYRECIPE_SUCCESS:
      return {
        loading: false,
        isEdited: action.payload.success
      }
    case DELETE_MYRECIPE_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload.success
      }
    case DELETE_MYRECIPE_RESET:
      return {
        loading:false,
        isDeleted: false
      }
    case NEW_MYRECIPE_FAIL:
    case EDIT_MYRECIPE_FAIL:
    case DELETE_MYRECIPE_FAIL:
      return {
        ...state,
        loading:false,
        error: action.payload
      }
    default:
      return state;
  }

}