
import { 
 SIGNUP_REQUEST, 
 SIGNUP_SUCCESS,
 SIGNUP_FAIL,
 LOGIN_REQUEST,
 LOGIN_SUCCESS ,
 LOGIN_FAIL ,
 LOGOUT_REQUEST,
 LOGOUT_SUCCESS ,
 LOGOUT_FAIL } from '../_types/authTypes';

 import axios from 'axios'


/* 회원가입 요청 */
export const signupRequest = (userInfo) => async (dispatch) => {

  try {
    dispatch({ type: SIGNUP_REQUEST})

    const { data } = await axios.post(`${process.env.REACT_APP_API}/auth/signup`, userInfo)

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error
    })
  }
  
}

/* 로그인요청 */
export const loginRequest = (userInfo) => async(dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST})

    const { data } = await axios.post(`${process.env.REACT_APP_API}/auth/login`, userInfo, {withCredentials: true})

    console.log(data)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.success
    })

    localStorage.setItem('isAuth', true)
  } catch(error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message
    })
  }
}


/* 로그아웃 요청 */
export const logoutRequest = () => async (dispatch) => {

  try{

    dispatch({ type: LOGOUT_REQUEST})


    const { data } = await axios.get(`${process.env.REACT_APP_API}/auth/logout`,  { withCredentials: true})
    console.log(data)

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data.success
    });

    localStorage.removeItem('isAuth')


  } catch(error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error
    })
  }


}



