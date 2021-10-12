import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ResultCard = ({ recipe }) => {
  const recipeLevel = (level) => {
    if (level === "초보환영") {
      return <i className='bx bxs-star' id='icon'></i>;
    } else if (level === "보통") {
      return (
        <>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
        </>
      );
    } else if (level === "어려움") {
      return (
        <>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
        </>
      );
    } else {
      return <i className='bx bxs-star' id='icon'></i>;
    }
  };

  return (
    <>
      <Link to={`/recipe/info/${recipe.id}`}>
        <RecipeCard>
        <div className='show-user'>
            <ShowUser>
            {/* 유저프로필 */}
          
              <div className="userimg">
                <img
                  src={
                    recipe.avatar ? recipe.avatar : "../food_img/favicon.png"
                  }
                  alt='people'
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="username">
                <span>EatMeUp</span>
              </div>
      

            {/* 요리난이도 */}
            </ShowUser>
          </div>

          {/* 요리사진 */}
          <div className='recipeImgbox'>
            <img src={recipe.main_image} alt='recipeImg' />
          </div>

          {/* 요리시간, 요리제목 */}
          
          <CardInfo>
            <CardLeft>
              <div className='title'>
                <span>{recipe.title}</span>
              </div>

              {/* 음식 주재료 */}
              <div className='materials'>
                {recipe.foods.slice(0, 3).map((food, idx) => {
                  return <span key={idx}>{food.name}</span>;
                })}
              </div>
            </CardLeft>
            <CardRight>
              <div className='cookingtime'>
                <i className='far fa-clock'></i>
                {recipe.cooking_time.slice(0, 2)}min
              </div>
              <div className='imgbox-right'>{recipeLevel(recipe.level)}</div>
            </CardRight>
          </CardInfo>
        </RecipeCard>
      </Link>
    </>
  );
};

const showBtn = keyframes`
  from{
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const RecipeCard = styled.div`
  width: 100%;
  margin: 20px auto;
  background-color: #ffffff;
  display: inline-block;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;


  /* 레시피카드 이미지 css영역 */

  .recipeImgbox > img {
    width: 93%;
    height: 220px;
    border-radius: 30px;
    object-fit: cover;
    margin: 11.5px 11.5px 0px 11.5px;
  }

  .show-user {
    opacity: 0;
  }
  &:hover .show-user {
    animation: ${showBtn} 0.5s forwards;
  }

`;


const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardRight = styled.div`
  margin-right: 13px;
  .cookingtime {
    font-size: 13px;
    text-indent: 5px;
    color: #a8a7a3;
    margin: 10px 10px 6px 0px;
  }

  .iconBox {
    margin-left: 5px;
  }

  .fa-clock {
    margin-right: 5px;
  }

  .bxs-star {
    color: #febd2f;
    font-size: 20px;
    text-indent: -8px;
    margin-right: 7px;
  }

  .imgbox-right {
    display: flex;
    justify-content: flex-end;
  }
`;

const CardLeft = styled.div`
  .title {
    font-size: 17px;
    text-indent: 20px;
    margin-top: 5px;
  }

  .materials {
    font-size: 9px;
    margin: 10px 0px 5px 17px;
  }

  .materials > span {
    padding: 3px 8px;
    background-color: #eaeaea;
    margin-right: 5px;
    border-radius: 30px;
  }
`;

const ShowUser = styled.div`
  position: absolute;
  width: 93%;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 11.5px 11.5px 0px 11.5px;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;

  .userimg {
    margin-left: 20px;
  }

  .username {
    font-size: 14px;
    margin-left: 5px;
  }
`;
export default ResultCard;
