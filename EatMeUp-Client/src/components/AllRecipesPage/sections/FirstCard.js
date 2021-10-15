import React from "react";
import styled, { keyframes } from "styled-components";

import CardLower from './CardLower'

const FirstCard = ({ recipe }) => {

  const { user, id, main_image, title, foods, cooking_time, level } = recipe

  return (
    <div>
      <StyledLink to={`/recipe/info/${id}`}>
        <RecipeCard>
          <div className='show-user'>
            <ShowUser>
              <div className='userimg'>
                {user && user.avatar ? (
                  <img
                    src={user.avatar}
                    alt='people'
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    src='../food_img/favicon.png'
                    alt='eatmeup'
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div className='username'>
                <div>
                  {user && (
                    <span>
                      {user.username === "test1"
                        ? "eatmeup"
                        : user.username}
                    </span>
                  )}
                  {user === null && <span>guest</span>}
                </div>
              </div>
            </ShowUser>
          </div>

          {/* 요리사진 */}
          <CardLower main_image={main_image} title={title} cooking_time={cooking_time} foods={foods} level={level} />
        </RecipeCard>
      </StyledLink>
    </div>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
  color: #404040;
`

const showBtn = keyframes`
  from{
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const RecipeCard = styled.div`
  width: 340px;
  margin-right: 10px;
  height: 330px;
  background-color: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  position: relative;
  cursor: pointer;



  .recipeImgbox > img {
    width: 93%;
    height: 240px;
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

  @media screen and (max-width: 1500px) {
    display: none;
    }
`;

const ShowUser = styled.div`
  position: absolute;
  width: 93%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 11.5px 11.5px 0px 11.5px;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;

  .userimg {
    margin-left: 20px;
  }

  .username > div {
    font-size: 14px;
    margin-left: 5px;
  }
`;

export default FirstCard;