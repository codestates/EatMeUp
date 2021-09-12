import React, { useState } from "react";
import styled from 'styled-components'
import AddIngre from './AddIngre/AddIngre'

const PlusBtn = () => {


  const BtnArea = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  `;
  
  const PlusBtn = styled.div`
    width: 50px;
    font-size: 40px;
    color: grey;
    cursor: pointer;
  `;

  /* function area */

  const [openAddIngre, setOpenAddIngre] = useState(false)

  const openHandler = (e) => {
    e.preventDefault();

    setOpenAddIngre(true)
  }

  return (
    <>
     {openAddIngre ? <AddIngre setOpenAddIngre={setOpenAddIngre}/> : ""}
      <BtnArea>
        <PlusBtn onClick={openHandler}>
          <i className='fas fa-plus-square'></i>
        </PlusBtn>
      </BtnArea>
    </>
  );
};

export default PlusBtn;
