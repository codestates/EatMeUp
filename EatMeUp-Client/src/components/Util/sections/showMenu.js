import React from "react";
import styled, { keyframes } from "styled-components";

const showMenu = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <ResponseMenu>
      <div className='menu right'>
        홈
      </div>
      <div className='menu right' >
        모든레시피
      </div>
      <div className='menu right' >
        마이냉장고
      </div>
      <div className='menu right' >
        마이페이지
      </div>
      <div className='menu right' >
        로그아웃 <i className='fas fa-sign-out-alt'></i>
      </div>
    </ResponseMenu>
  ) : (
    <ResponseMenu>
      <div className='menu right' >
        홈
      </div>
      <div className='menu right'>
        로그인
      </div>
      <div className='menu right' >
        회원가입
      </div>
    </ResponseMenu>
  );
};

const showM = keyframes`

  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px)
    opacity: 1;
  }
`;
const ResponseMenu = styled.div`
  background-color: white;
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s;
  animation: ${showM} 1s forwards;
  opacity: 1;
  .menu {
    margin: 15px 0px 7.5px 0px;
    font-weight: 500;
  }
`;
export default showMenu;
