import React from "react";
import styled, { keyframes } from "styled-components";

const Card = ({ recipe }) => {
  return (
    <>
      <RecipeCard>
        <div className='imgbox'>
          {/* 유저프로필 */}
          <div className='imgbox-left'>
            <div>
              <img src='../food_img/people.jpeg' alt='people' />
            </div>
            <div>
              <div>
                <span>segyong</span>
              </div>
              <div className='update-time'>
                <span>1hour ago</span>
              </div>
            </div>
          </div>

          {/* 요리난이도 */}
          <div className='imgbox-right'>
            <span id='level'>난이도 : </span>
            <div className='iconBox'>
              <i className='bx bxs-star' id='icon'></i>
            </div>
            <div className='iconBox'>
              <i className='bx bxs-star' id='icon'></i>
            </div>
            <div className='iconBox'>
              <i className='bx bxs-star' id='icon'></i>
            </div>
          </div>
        </div>

        {/* 요리사진 */}
        <div className='recipeImgbox'>
          <img src={recipe.main_image} alt='recipeImg' />
        </div>

        {/* 요리시간, 요리제목 */}
        <div className='cookingtitme'>
          <i className='far fa-clock'></i> 요리시간 20MIN
        </div>
        <div className='title'>
          <span>{recipe.title}</span>
        </div>

        {/* 음식 주재료 */}
        <div className='materials'>
          <span>#콩나물</span>
          <span>#간장</span>
          <span>#참기름</span>
        </div>
      </RecipeCard>
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
  margin: 20px auto;
  background-color: #ffffff;
  display: inline-block;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding-bottom: 10px;
  position: relative;
  cursor: pointer;

  /* 레시피 카드 상단(유저프로필, 난이도) css영역*/
  .imgbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 4px;
  }

  .imgbox-left > div > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .imgbox-left {
    display: flex;
  }

  .imgbox-left > div {
    margin-left: 10px;
    font-size: 12px;
  }

  .update-time {
    font-size: 9px;
    color: grey;
  }

  .imgbox-right {
    display: flex;
    margin-right: 10px;
  }

  #level {
    font-size: 13px;
    margin: 0px 5px 0px 0px;
    color: grey;
  }

  .iconBox {
    margin-left: 5px;
  }

  #icon {
    color: #febd2f;
    font-size: 20px;
    text-indent: -8px;
    margin: 0;
  }

  /* 레시피카드 이미지 css영역 */

  .recipeImgbox > img {
    width: 95%;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 7px 0px 7px;
  }

  /* 레시피카드 정보(제목, 시간, 주재료) css영역 */
  .title {
    font-size: 17px;
    text-indent: 13px;
  }

  .cookingtitme {
    font-size: 10px;
    text-indent: 5px;
    color: grey;
  }

  .materials {
    font-size: 10px;
    margin: 7px 0px 5px 10px;
  }

  .materials > span {
    padding: 3px 8px;
    background-color: #eaeaea;
    margin-right: 5px;
    border-radius: 30px;
  }

  /* 호버시 버튼 올라오기 */

  &:hover::after {
    content: "View Recipe";
    position: absolute;
    top: 200px;
    left: 140px;
    width: 130px;
    height: 35px;
    background-color: #febd2f;
    color: white;
    font-weight: 500;
    text-align: center;
    line-height: 35px;
    border-radius: 20px;
    animation: ${showBtn} 0.5s;
  }
`;
export default Card;
