import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../../_actions/authActions'

/*  */
import styled from "styled-components";
// import "./Login.scss";


const Login = ({ isModalOpen, closeModal }) => {


  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(state => state.auth);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(isAuthenticated) {
      history.push('/')
    }

    if(error) {
      alert('cannot login')
    }
  }, [dispatch, isAuthenticated, error, history])

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    dispatch(loginRequest(data))

      
  };

 
  // const loginClickHandler = async () => {
  //   const { email, password } = await axios
  //     .post("https://eatmeup.me/login", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     })
  //     .then((res) => console.log(res));
  // };

  return (
    <>
      {/* {isModalOpen ? (
        <div className='modal'>
          <div OnClick={closeModal()}>
            <div className='loginModal'>
              <span className='close' onClick={closeModal()}>
                &times;
              </span>
              <div className='modalContents' onClick={isModalOpen()}>
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
                  <div className='autoLogin'>아디/비밀번호 찾기</div>
                </div>
                <button className='loginBtn' onClick={loginHandler}>
                  {" "}
                  Login{" "}
                </button>
                <div className='socialBox'>
                  <div className='google'>
                    <img className='googleLogo' src='../food_img/EatMeUp.png' />
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
          </div> */}
          <div>
          <form onSubmit={loginHandler}>
            <div>
              <label>email</label>
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div>
              <label>password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                type='password'
              />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
          <Link to='/signup'>회원가입하러 가기</Link>
        </div>
        {/* </div> */}
      {/* ) : null} */}
    </>
  );
};

// const ModalWrapper = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1000;
//   overflow: auto;
//   outline: 0;
// `

// const ModalOverlay = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 999;
// `

// const ModalInner = styled.div`
//   box-sizing: border-box;
//   position: relative;
//   box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
//   background-color: #fff;
//   border-radius: 10px;
//   width: 360px;
//   max-width: 480px;
//   top: 50%;
//   transform: translateY(-50%);
//   margin: 0 auto;
//   padding: 40px 20px;
// `

export default Login;
