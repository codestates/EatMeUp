import React, { useState } from "react";
import styled from "styled-components";

/* 컴포넌트 */
import AddIngre from "./AddFood/AddIngre";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../../StyledComponent/buttons";
import theme from "../../StyledComponent/theme";

const FridgeBtn = ({ showEditBtnHandler, showEditBtn }) => {
  const [openAddWindow, setOpenAddWindow] = useState(false);

  // 추가하기 모달창 핸들러
  const openAddWindowHandler = () => {
    setOpenAddWindow(true);

    if (showEditBtn) {
      setOpenAddWindow(false);
    }
  };

  return (
    <FridgeBtnBox>
      <FridgeBtns>
        <FridgeButton
          fillColor={showEditBtn ? theme.colors.lightgrey : theme.colors.yellow}
          color='white'
          onClick={openAddWindowHandler}
        >
          <span className='name'>재료 추가</span>
          <i class='fas fa-plus'></i>
        </FridgeButton>
      </FridgeBtns>
      <FridgeBtns>
        <FridgeButton fillColor='#ffffff' onClick={showEditBtnHandler}>
          {showEditBtn ? (
            <span className='name'>수정 완료</span>
          ) : (
            <span className='name'>재료 수정</span>
          )}
          <i class='fas fa-edit'></i>
        </FridgeButton>
      </FridgeBtns>

      {openAddWindow ? <AddIngre setOpenAddWindow={setOpenAddWindow} /> : ""}
    </FridgeBtnBox>
  );
};

const FridgeBtnBox = styled.div`
 width: 100%;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 375px) {
    position: fixed;
     bottom: 30px;
     z-index: 99999;
     left:-10px;
  }
}
`;

const FridgeBtns = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const FridgeButton = styled(LargeBtn)`
  font-weight: 500;
  font-size: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 80%;
  margin-right: 8px;

  i {
    display: none;
  }

  @media screen and (max-width: 375px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    .name {
      display: none;
    }

    i {
      display: block;
      font-size: 25px;
    }

    .fa-edit {
      margin-left: 5px;
    }
  }
`;

export default FridgeBtn;
