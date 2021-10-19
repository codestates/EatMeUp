import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import CardLower from './CardLower'

const ResultCard = ({ recipe }) => {
  
  const { id, avatar, main_image, title, foods, cooking_time, level } = recipe

  return (
    <>
      <Link to={`/recipe/info/${id}`}>
        <RecipeCard>
          <div className='show-user'>
            <ShowUser>
              {/* 유저프로필 */}
              <div className='userimg'>
                <img
                  src={
                    avatar ? avatar : "../food_img/favicon.png"
                  }
                  alt='people'
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className='username'>
                <span>EatMeUp</span>
              </div>
            </ShowUser>
          </div>

          <CardLower main_image={main_image} title={title} cooking_time={cooking_time} foods={foods} level={level} />

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
