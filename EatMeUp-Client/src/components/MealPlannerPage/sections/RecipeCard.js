import React, { useState } from "react";
import styled from "styled-components";
import { myRecipes } from "../../dummydata";
import theme from "../../StyledComponent/theme";

const RecipeCards = () => {
  const [openPopOver, setOpenPopOver] = useState(false);

  const openPopOverHandler = () => {
    setOpenPopOver(!openPopOver);
  };

  return (
    <>
      {/* 추천레시피, 좋아요리스트 버튼 영역 */}
      <ButtonArea>
        <ShowRecommands>추천</ShowRecommands>
        <ShowLikelist>좋아요 리스트</ShowLikelist>
      </ButtonArea>

      {/* 추천된레시피를 보여주는 영역 */}
      <RecipesArea>
        {myRecipes.map((recipe, idx) => {
          return (
            <RecipeCard key={idx}>
              {/* 요리사진 */}
              <ImgBox>
                <div>
                  <img src={recipe.main_image} alt='recipe' />
                </div>
              </ImgBox>

              {/* 레시피주요정보 */}
              <DCbox>
                <div className='DCbox-upper'>
                  <div className='recipe-title_box'>
                    <span>{recipe.title}</span>
                    <span className='level'>EASY</span>
                  </div>

                  {/* 식단에 추가버튼 */}
                  <div className='recipe-addBtn_box'>
                    <i
                      className='bx bx-plus-circle'
                      onClick={openPopOverHandler}
                    ></i>
                  </div>
                </div>
                <div className='DCbox-lower'>
                  <div>주재료</div>
                  <div className='tags'>
                    <span>돼지전지</span>
                    <span>양파</span>
                    <span>대파</span>
                  </div>
                </div>
              </DCbox>
            </RecipeCard>
          );
        })}
      </RecipesArea>
    </>
  );
};

const ButtonArea = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const RecipesArea = styled.div`
  width: 100%;
  height: 495px;
  margin-top: 5px;
  overflow: scroll;
`;
const ShowRecommands = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const ShowLikelist = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 0px 20px 20px 0px;
  border: none;
  font-weight: bold;
  border: 1px solid ${theme.colors.lightgrey};
  background-color: white;
  cursor: pointer;
`;

const RecipeCard = styled.div`
  width: 90%;
  height: 90px;
  margin: 10px auto;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
`;

const ImgBox = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const DCbox = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .DCbox-upper {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
  }

  .level {
    font-size: 10px;
    padding: 2px 8px;
    color: white;
    background: rgba(80, 80, 80, 0.8);
    border-radius: 20px;
    margin-left: 5px;
  }

  .bx-plus-circle {
    font-size: 20px;
    margin-right: 18px;
    cursor: pointer;
  }

  .DCbox-lower {
    font-size: 11px;
    margin-top: 5px;
  }

  .tags > span {
    font-size: 9px;
    color: #303030;
    padding: 1px 4px;
    background: #eaeaea;
    border-radius: 20px;
    margin-right: 5px;
  }
`;

export default RecipeCards;
