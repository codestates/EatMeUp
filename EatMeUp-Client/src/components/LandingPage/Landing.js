import React from "react";
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { logoutRequest } from '../../_actions/authActions'
/* 스타일 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";

const Landing = () => {
 
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth)
 

  const logoutHandler = () => {

    if(error) {

      alert('cannot logout')
    }

    dispatch(logoutRequest())
    
  }
  return (
    <>
      <Header />
        <button
        onClick={logoutHandler}
        >{isAuthenticated ? "logout" : "login"}</button>
      <Footer />
    </>
  );
};

export default Landing;
