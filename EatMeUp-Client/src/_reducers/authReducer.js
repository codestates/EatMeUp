import { 
  SIGNUP_REQUEST, 
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS ,
  LOGIN_FAIL ,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS ,
  LOGOUT_FAIL,
  CLEAR_ERRORS,

} from '../_types/authTypes';



export const authReducer = (state = { user: {} }, action) => {
  switch(action.type) {

    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      }
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        success: action.payload.success
      }
    case LOGOUT_SUCCESS: 
      return {
        loading: false,
        isAuthenticated: false
      }
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      }
    case LOGOUT_FAIL: 
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return{
        ...state,
        error: null
      }
    default:
      return state;
  }
}
