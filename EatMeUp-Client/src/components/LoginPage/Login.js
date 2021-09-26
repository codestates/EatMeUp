import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../Util/Header";
import Footer from "../Util/Footer";

const Login = ({ isModalOpen, closeModal }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
  };
  
  return (
    <>
      <Header id={2} />
      <LoginContainer>
        <div className='modal'>
          <div OnClick={closeModal}>
            <div className='loginModal'>
              <span className='close' onClick={closeModal}>
                &times;
              </span>
              <div className='modalContents' onClick={isModalOpen}>
                <img
                  className='loginLogo'
                  src='../food_img/EatMeUp.png'
                  alt='loginLogo'
                />
                <input
                  name='email'
                  className='loginEmail'
                  type='email'
                  placeholder='email'
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input
                  name='password'
                  className='loginPw'
                  type='password'
                  placeholder='password'
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <div className='loginMid'>
                  <label className='autoLogin' for='hint'>
                    {" "}
                    <input type='checkbox' id='hint' />
                    Remember Me
                  </label>
                  <div className='autoLogin'>아이디/비밀번호 찾기</div>
                </div>
                <button className='loginBtn' onClick={loginHandler}>
                  {" "}
                  Login{" "}
                </button>
                <div className='socialBox'>
                  <div className='google'>
                    {/* <img className='googleLogo' src='../food_img/EatMeUp.png' /> */}
                    <div className='googleText'>구글계정으로 로그인</div>
                  </div>
                </div>
                <div className='loginEne'>
                  <div className='loginLine'>
                    회원이 아니신가요? <Link to='/signup'>회원가입</Link>
                  </div>
                  <div className='noUser'>게스트 로그인</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </LoginContainer>
      <Footer />
    </>
  );
};

const LoginContainer = styled.div`
  .loginLogo {
    width: 100px;
  }
`;

export default Login;
