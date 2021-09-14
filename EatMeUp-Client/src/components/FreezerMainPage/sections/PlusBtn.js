import React, { useState } from "react";
import styled from "styled-components";
import AddIngre from "./AddIngre/AddIngre";

/* styled component area */
const BtnArea = styled.div`
  width: 70%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AddBtn = styled.div`
  padding: 10px;

  border: 1px solid black;
  color: grey;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 5px;
  
  .fa-plus-square {
    margin-left: 6px;
  }
  .fa-edit {
    margin-left: 6px;
  }
`;


/* 재료 추가 버튼 컴포넌트 */
const PlusBtn = ({ showEditBtnHandler }) => {
  /* function area */

  const [openAddIngre, setOpenAddIngre] = useState(false);

  const openHandler = (e) => {
    e.preventDefault();
    setOpenAddIngre(true);
  };

  return (
    <>
      {openAddIngre ? <AddIngre setOpenAddIngre={setOpenAddIngre} /> : ""}
      <BtnArea>
        <AddBtn onClick={showEditBtnHandler}>
          음식 수정하기<i class="far fa-edit"></i>
        </AddBtn>
        <AddBtn onClick={openHandler}>
          음식 추가하기<i className='fas fa-plus-square'></i>
        </AddBtn>
      </BtnArea>
    </>
  );
};

export default PlusBtn;
