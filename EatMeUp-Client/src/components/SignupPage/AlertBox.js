import React from "react";
import styled from "styled-components";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const AlertBox = () => {
  return (
    <div>
      <ModalContainer>
        <div className='modal_msg'>
          <i className='fas fa-exclamation-circle'></i> 회원가입이 완료되었습니다
        </div>
      </ModalContainer>
    </div>
  );
};

const ModalContainer = styled(SectionBox)`
  z-index: 9999;
  width: 280px;
  height: 50px;
  top: 2vh;
  /* left: 43vw; */
  margin: 0 6%;
  position: fixed;
  .modal_msg {
    margin: 10px;
  }
`;

export default AlertBox;
