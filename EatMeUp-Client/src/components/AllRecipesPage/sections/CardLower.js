import React from "react";
import styled from "styled-components";
import { recipeLevel } from "../util/recipeLevel";

const CardLower = ({ main_image, title, foods, cooking_time, level }) => {
  return (
    <>
      {/* 요리사진 */}
      <div className='recipeImgbox'>
        <img src={main_image ? main_image : "https://i.pinimg.com/564x/fb/d1/82/fbd18212982cb745d4cc4a931e06e19d.jpg"} alt='recipeImg' />
      </div>

      {/* 요리시간, 요리제목 */}
      <CardInfo>
        <CardLeft>
          <div className='title'>
            <span>{title}</span>
          </div>
          <div className='materials'>
            {foods.slice(0, 3).map((food, idx) => {
              return <span key={idx}>{food.name}</span>;
            })}
          </div>
        </CardLeft>
        {/* 요리시간, 요리난이도 */}
        <CardRight>
          <div className='cookingtime'>
            <i className='far fa-clock'></i>
            {cooking_time.slice(0, 2)}min
          </div>
          <div className='imgbox-right'>{recipeLevel(level)}</div>
        </CardRight>
      </CardInfo>
    </>
  );
};

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
    font-weight: 500;
  }

  .materials {
    font-size: 11px;
    margin: 10px 0px 5px 17px;
  }

  .materials > span {
    padding: 3px 8px;
    background-color: #eaeaea;
    margin-right: 5px;
    border-radius: 30px;
  }
`;

export default CardLower;
