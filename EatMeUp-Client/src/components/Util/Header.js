import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { XSmallBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";

const Header = ({ id }) => {
  const isAuth = localStorage.getItem("persist:root");
  const { isAuthenticated } = JSON.parse(JSON.parse(isAuth).auth);

  const menu = [
    { menu: "모든레시피", link: "/recipes" },
    { menu: "마이냉장고", link: "/fridge" },
    { menu: "마이페이지", link: "/user/mypage" },
    { menu: "Logout", link: "/logout" },
  ];
  const [currentIdx, setCurrentIdx] = useState(id);

  const logoutHandler = (e) => {
    e.preventDefault();
  };

  const tabHandler = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <EatMeUpHeader>
      <div className='left-menu'>
        <div className='logo'>
          <Link to='/'>
            <img src='https://eatmeup-image.s3.ap-northeast-2.amazonaws.com/9a0a59bd263f1840cabda2278d11570b' alt='logo' />
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
        <div className='menuBtns'>
          <Link to='/user/mypage'>
            <div className='menu right'>MYPAGE</div>
          </Link>
        </div>
      </div>
    </EatMeUpHeader>

    // <EatMeUpHeader>
    //   <div className='left-menu'>
    //     <div className='logo'>
    //       <Link to='/'>
    //         <img src='https://eatmeup-image.s3.ap-northeast-2.amazonaws.com/9a0a59bd263f1840cabda2278d11570b' alt='logo' />
    //       </Link>
    //     </div>
    //     <div className='menuBtns'></div>
    //   </div>
    //   {/* 오른쪽메뉴(로그인, 회원가입, 마이페이지) */}
    //   <div className='right-menu'>
    //     <div className='menuBtns'>
    //       <Link to='/login'>
    //         <div className='menu right'>LOGIN</div>
    //       </Link>
    //       <Link to='/signup'>
    //         <div className='menu right'>SIGNUP</div>
    //       </Link>
    //     </div>
    //   </div>
    // </EatMeUpHeader>
  )
};

const EatMeUpHeader = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  .logo {
    width: 160px;
    /* font-family: Fredoka One; */
    font-size: 35px;
    text-indent: 30px;
  }

  .logo > a > img {
    width: 100%;
  }

  .left-menu {
    display: flex;
    margin-left: 5vw;
  }

  .menuBtns {
    display: flex;
    margin: 8px 60px;
  }

  .menu {
    font-weight: 500;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 17px;
    border-radius: 30px;
    transition: 0.3s;
  }

  .menu:hover {
    background-color: white;
    color: #f4c050;
  }

  .left {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    color: #303030;
  }

  .right-menu {
    margin-right: 5vw;
  }

  .right {
    width: 100px;
    height: 35px;
    border-radius: 30px;
    text-align: center;
    line-height: 35px;
  }

  .right:hover {
    background-color: ${theme.colors.yellow};
    color: white;
  }
`;

export default Header;
