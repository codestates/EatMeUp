import React, { useState } from "react";
import styled from "styled-components";
import theme from '../../StyledComponent/theme'
const RecipeCards = () => {


  const [openPopOver, setOpenPopOver] = useState(false);

  const openPopOverHandler = () => {
    setOpenPopOver(!openPopOver);
  };

  return (
    <>
      <ButtonArea>
        <ShowRecommands>추천</ShowRecommands>
        <ShowLikelist>좋아요 리스트</ShowLikelist>
      </ButtonArea>
      <RecipeCard>
        <i className='bx bx-add-to-queue' onClick={openPopOverHandler}></i>

        {/* open pop over */}
        {openPopOver ? (
          <Balloon>
            <button>아침 추가</button>
            <button>점심 추가</button>
            <button>저녁 추가</button>
          </Balloon>
        ) : (
          ""
        )}
      </RecipeCard>
    </>
  );
};

const ButtonArea = styled.div`

  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`

const ShowRecommands = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-weight: bold;
  cursor : pointer;
`

const ShowLikelist = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 0px 20px 20px 0px;
  border: none;
  font-weight: bold;
  border: 1px solid ${theme.colors.lightgrey};
  background-color: white;
  cursor : pointer;
`

const RecipeCard = styled.div`
  width: 90%;
  height: 100px;
  margin: 10px auto;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
  position: relative;
  .bx-add-to-queue {
    font-size: 25px;
  }
`;

const Balloon = styled.div`
  position: relative;
  margin: 50px;
  width: 80px;
  background: white;
  border: 1px dashed black;
  border-radius: 10px;
  top: -70px;
  left: -14px;
  transition: 0.5s;

  &::after {
    border-top: 15px solid #333333;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    left: -15px;
  }
`;
export default RecipeCards;
