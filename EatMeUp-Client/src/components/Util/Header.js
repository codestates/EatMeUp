import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest, clearErrors } from "../../_actions/authActions";

import theme from "../StyledComponent/theme";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (error) {
      // swal("Please!", "로그아웃 실패, 다시 확인해주세요.", "error");
      dispatch(clearErrors());
      return;
    }
  }, [dispatch, error]);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
    history.push("/");
  };

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  const showSignupHandler = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {isAuthenticated ? (
        <EatMeUpHeader>
          {/* 왼쪽메뉴(로그인, 회원가입, 마이페이지) */}
          <div className='left-menu'>
            <div className='logo'>
              <Link to='/'>
                <img
                  src='https://eatmeup-image.s3.ap-northeast-2.amazonaws.com/9a0a59bd263f1840cabda2278d11570b'
                  alt='logo'
                />
              </Link>
            </div>
            <div className='menuBtns'>
              <Link to='/recipes'>
                <div className='menu left'>모든레시피</div>
              </Link>
              <Link to='/fridge'>
                <div className='menu left'>마이냉장고</div>
              </Link>
            </div>
          </div>

          {/* 오른쪽메뉴(로그인, 회원가입, 마이페이지) */}
          <div className='right-menu'>
            <Hamburger>
              <i className='fas fa-hamburger' onClick={menuHandler}></i>
            </Hamburger>
            <div className='menuBtns'>
              <Link to='/user/mypage'>
                <div className='menu left'>마이페이지</div>
              </Link>
              <Logout>
                <i className='fas fa-sign-out-alt' onClick={logoutHandler}></i>
              </Logout>
            </div>
          </div>
        </EatMeUpHeader>
      ) : (
        <EatMeUpHeader>
          <div className='left-menu'>
            <div className='logo'>
              <Link to='/'>
                <img
                  src='https://eatmeup-image.s3.ap-northeast-2.amazonaws.com/9a0a59bd263f1840cabda2278d11570b'
                  alt='logo'
                />
              </Link>
            </div>
          </div>
          {/* 오른쪽메뉴(로그인, 회원가입, 마이페이지) */}
          <div className='right-menu'>
            <Hamburger>
              <i className='fas fa-hamburger' onClick={menuHandler}></i>
            </Hamburger>
            <div className='menuBtns'>
              <div className='menu right' onClick={showLoginHandler}>
                로그인
              </div>
              <div className='menu right' onClick={showSignupHandler}>
                회원가입
              </div>
            </div>
          </div>
          {showLogin ? (
            <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
          ) : (
            ""
          )}
          {showSignup ? (
            <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
          ) : (
            ""
          )}
        </EatMeUpHeader>
      )}
      {showMenu ? (
        isAuthenticated ? (
          <ResponseMenu onClick={menuHandler}>
            <Link to='/'>
              <div className='menu right top'>홈</div>
            </Link>
            <Link to='/recipes'>
              <div className='menu right'>모든레시피</div>
            </Link>
            <Link to='/fridge'>
              <div className='menu right'>마이냉장고</div>
            </Link>
            <Link to='/user/mypage'>
              <div className='menu right'>마이페이지</div>
            </Link>
            <div className='menu right' onClick={logoutHandler}>
              로그아웃 <i className='fas fa-sign-out-alt'></i>
            </div>
          </ResponseMenu>
        ) : (
          <ResponseMenu onClick={menuHandler}>
            <div className='menu right top'>홈</div>
            <div className='menu right' onClick={showLoginHandler}>
              로그인
            </div>
            <div className='menu right' onClick={showSignupHandler}>
              회원가입
            </div>
          </ResponseMenu>
        )
      ) : (
        ""
      )}
    </>
  );
};

const EatMeUpHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  .logo {
    width: 160px;
    font-size: 35px;
    text-indent: 30px;
  }
  .logo > a > img {
    width: 100%;
  }
  .left-menu {
    display: flex;
    margin-left: 50px;
    @media screen and (max-width: 1200px) {
      margin-left: 50px;
    }
    @media screen and (max-width: 1023px) {
      margin-left: 30px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 568px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 450px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 375px) {
      margin-left: 0px;
    }
  }
  .menuBtns {
    display: flex;
    margin: 8px 60px;
  }
  .menu {
    font-weight: 500;

    text-align: center;
    font-size: 17px;
    border-radius: 30px;
    transition: 0.3s;
    cursor: pointer;
  }
  .fa-sign-out-alt {
    cursor: pointer;
  }

  .fa-sign-out-alt:hover {
    color: black;
  }

  .left {
    margin-right: 5px;
    width: 110px;
    height: 37px;
    line-height: 37px;
    border-radius: 30px;
  }

  .left:hover {
    background-color: ${theme.colors.yellow};
    color: white;
  }
  a {
    text-decoration: none;
    color: #303030;
  }
  .right-menu {
    margin-right: 10px;
    max-width: 50%;
    box-sizing: border-box;
    @media screen and (max-width: 1200px) {
      margin-right: 0px;
    }
    @media screen and (max-width: 1023px) {
      margin-right: 0px;
    }
    @media screen and (max-width: 767px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 568px) {
      margin-right: 0px;
    }
    @media screen and (max-width: 450px) {
      margin-right: 0px;
    }
    @media screen and (max-width: 375px) {
      margin-right: 0px;
    }
  }
  .right {
    width: 100px;
    height: 35px;
    line-height: 35px;
    border-radius: 30px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
  .user {
    width: 48px;
    height: 48px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .right:hover {
    background-color: ${theme.colors.yellow};
    color: white;
  }
  @media screen and (max-width: 767px) {
    .menuBtns {
      display: none;
    }
  }

  @media screen and (max-width: 575px) {
    .menuBtns {
      display: none;
    }
  }

  @media screen and (max-width: 375px) {
    .logo {
      width: 140px;
      font-size: 35px;
      text-indent: 20px;
    }

    .menuBtns {
      display: none;
    }
  }
`;

const Hamburger = styled.button`
  border: none;
  font-size: 30px;
  background-color: white;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: flex;
    margin: 15px;
    font-size: 28px;
    color: white;
    width: 45px;
    height: 45px;
    background-color: ${theme.colors.yellow};
    border-radius: 50%;

    i {
      margin: 6px 3px;
    }
  }

  @media screen and (max-width: 575px) {
    display: flex;
    margin: 15px;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    margin-top: 8px;
    font-size: 28px;
    color: white;
    width: 45px;
    height: 45px;
    background-color: ${theme.colors.yellow};
    border-radius: 50%;

    i {
      margin: 6px 3px;
    }
  }
`;

const Logout = styled.button`
  border: none;
  font-size: 25px;
  background-color: white;
  color: grey;
`;

const showM = keyframes`

  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0px)
    opacity: 1;
  }
`;
const ResponseMenu = styled.div`
  display: none;
  position: fixed;
  z-index: 99998;
  text-align: center;
  @media screen and (max-width: 767px) {
    background-color: white;
    width: 100%;
    transition: all 0.5s;
    animation: ${showM} 0.5s forwards;
    opacity: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
      color: #404040;
      text-decoration: none;
      width: 100%;
      height: 100%;
      align-items: center;
    }
    .menu {
      height: 40px;
      width: 100%;
      padding: 14px 0px 0 0;
      font-weight: bold;
      cursor: pointer;
      align-items: center;
      :active {
        background-color: ${theme.colors.yellow};
      }
    }

    .top {
      margin-top: 80px;
    }
  }
`;
export default Header;
