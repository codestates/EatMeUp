import React, { useState } from "react";
import AddIngre from "./AddFood/AddIngre";
import { LargeBtn } from "../../StyledComponent/buttons";
import styled from "styled-components";
import theme from "../../StyledComponent/theme";

const FridgeBtn = ({ showEditBtnHandler }) => {

  const [openAddWindow, setOpenAddWindow] = useState(false);
  const openAddWindowHandler = () => {
    setOpenAddWindow(true);
  };
  
  return (
    <FridgeBtnBox>
      <FridgeBtns>
        <FridgeButton
          fillColor={theme.colors.yellow}
          onClick={openAddWindowHandler}
        >
          음식 추가하기
        </FridgeButton>
      </FridgeBtns>
      <FridgeBtns>
        <FridgeButton
          fillColor="#ffffff"
          onClick={showEditBtnHandler}
        >
          음식 수정하기
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
