import React from "react";
import styled from "styled-components";

import theme from "../../StyledComponent/theme";

const RecipeCard = styled.figure`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #ffffff;
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 30px;
  

  img {
    width: 95%;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 7px 0px 7px;
  }

  .recipe-info_box {
    display: flex;
    font-size: 12px;
    color: ${theme.colors.gray};
    padding: 5px;
    margin-left: 10px;
  }

  .fa-stopwatch {
    color: gray;
    font-size: 14px;
  }

  .title_box {
    text-indent: 5px;
    margin-left: 15px;
    font-weight: 500;
  }

  .recipe-ingre_box {
    font-size: 14px;
    display: flex;
    margin: 10px 0px 15px 10px;
  }

  .ingre-label {
    text-indent: 10px;
    font-size: 13px;
  }

  .ingres {
    font-size: 11px;
    margin-left: 5px;
  }

  .ingres > span {
    padding: 3px 8px;
    background-color: ${theme.colors.lightgrey};
    border-radius: 30px;
    margin-right:5px;ƒ
  }

  .userprofile_box {
    display: flex;
    width: 95%;
    align-items:center;
   
  }

  #userimg {
    width: 40px;
    height: 40px;
  }

  .username {
    font-size: 12px;
  }
`;

const Card = ({ recipe }) => {
  return (
    <RecipeCard>
      <div className='userprofile_box'>
        <div className='userimg_box'>
          <img src='../food_img/people.jpeg' alt='userimg' id='userimg' />
        </div>
        <div className='username_box'>
          <span className='username'>Segyondgdgg</span>
        </div>
      </div>
      <img src={recipe.main_image} alt='recipe' className='recipe-img' />
      <figcaption>
        <div className='recipe-info_box'>
          <div className='time'>
            <i class='fas fa-stopwatch'></i> 요리시간 20min
          </div>
        </div>
        <div className='title_box'>{recipe.title}</div>
        <div className='recipe-ingre_box'>
          {/* <div className='ingre-label'>
            <span>주재료</span>
          </div> */}
          <div className='ingres'>
            <span>#돼지전지</span>
            <span>#양파</span>
            <span>#대파</span>
          </div>
        </div>
      </figcaption>
    </RecipeCard>
  );
};

export default Card;
