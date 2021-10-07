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

    if(showEditBtn) {
      setOpenAddWindow(false);
    }

  };
  
  return (
    <FridgeBtnBox>
      <FridgeBtns>
        <FridgeButton
          fillColor={showEditBtn ? theme.colors.lightgrey : theme.colors.yellow}
          color="white"
          onClick={openAddWindowHandler}
        >
          음식 추가
        </FridgeButton>
      </FridgeBtns>
      <FridgeBtns>
        <FridgeButton
          fillColor="#ffffff"
          onClick={showEditBtnHandler}
        >
          {showEditBtn ? "수정 완료" : "음식 수정"}
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
}
`;

const FridgeBtns = styled.div`
  display: flex;
  align-items: center;
`;

const FridgeButton = styled(LargeBtn)`
  font-weight: 500;
  font-size: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 80%;
  margin-right: 8px;
`;

export default FridgeBtn;
