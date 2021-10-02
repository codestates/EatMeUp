import React, { useState } from "react";
import styled from "styled-components";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import theme from "../../StyledComponent/theme";

const RecipeCards = ({ mylikelist, recipes, setAddToPlan }) => {
  
  const meal = ["아침추가", "점심추가", "저녁추가"]

  const [addToMealPlan, setAddToMealPlan] = useState({
    image: null,
    title: ""
  })
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event, image, title) => {
    setAnchorEl(event.currentTarget);
    console.log(image, title)
    setAddToMealPlan({
      image: image,
      title: title
    })
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [currentId, setCurrentId] = useState(1);
  const recommandHandler = (id) => {
    setCurrentId(id);
  };

  const likelistHandler = (id) => {
    setCurrentId(id);
  };

  const getCurrentIdx = (idx) => {
   
    setAddToPlan({
      image : addToMealPlan.image,
      title: addToMealPlan.title,
      id: idx
    })
  }
 
  return (
    <>
      {/* 추천레시피, 좋아요리스트 버튼 영역 */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        {meal.map((item, idx) => {
          return (<><AddBtn key={idx} onClick={() => getCurrentIdx(idx)}>{item}</AddBtn><br /></>)
        })}
      </Popover>
      <ButtonArea>
        <ShowRecommands
          onClick={() => recommandHandler(1)}
          style={
            currentId === 1
              ? { backgroundColor: "#eaeaea" }
              : { backgroundColor: "white", border: "1px solid lightgrey" }
          }
        >
          추천
        </ShowRecommands>
        <ShowLikelist
          onClick={() => likelistHandler(2)}
          style={
            currentId === 2
              ? { backgroundColor: "#eaeaea" }
              : { backgroundColor: "white", border: "1px solid lightgrey" }
          }
        >
          좋아요 리스트
        </ShowLikelist>
      </ButtonArea>

      {/* 추천된레시피를 보여주는 영역 */}
      <RecipesArea>
        {currentId === 1
          ? recipes.map((recipe, idx) => {
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
                        <span className='level'>
                          <i className='bx bxs-star' id='icon'></i>
                        </span>
                      </div>

                      {/* 식단에 추가버튼 */}
                      <div className='recipe-addBtn_box'>
                        <i
                          className='bx bx-plus-circle'
                          onClick={(e) => handleClick(e, recipe.main_image, recipe.title)}
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
            })
          : mylikelist.map((recipe, idx) => {
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
                        <span className='level'>
                          <i className='bx bxs-star' id='icon'></i>
                        </span>
                      </div>

                      {/* 식단에 추가버튼 */}
                      <div className='recipe-addBtn_box'>
                        <i className='bx bx-plus-circle'
                        onClick={(e) => handleClick(e, recipe.main_image, recipe.title)}></i>
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
  overflow-y: auto;
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
    font-size: 16px;
    padding: 2px 0px;
    color: ${theme.colors.yellow};
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

const AddBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${theme.colors.lightgrey};
  border: none;
  border-radius: 10px;
  margin: 4px 8px;
  cursor: pointer;
`
export default RecipeCards;
