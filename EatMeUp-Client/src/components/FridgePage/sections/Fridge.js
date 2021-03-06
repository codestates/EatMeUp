import React from "react";
import styled from "styled-components";

import theme from "../../StyledComponent/theme";
import { SmallBtn } from "../../StyledComponent/buttons";

import {
  foodLife,
  calculatorLife,
  sliceHandler,
  convertStr,
} from "./utils/convertDate";

const Fridge = ({
  typeIdx,
  resetFilterHandler,
  GreenFoodHandler,
  yellowFoodHandler,
  redFoodHandler,
  type,
  handleClick,
}) => {
  return (
    <>
      <FoodContainer>
        {/* 냉장고 재료 핸들러 버튼영역 */}
        <FridgeHeader>
          <div className='type_box'>
            <span className='type' onClick={resetFilterHandler}>
              {convertStr(typeIdx)}
            </span>
          </div>
          <div className='filterBtn_box'>
            <FridgeButton
              fillColor='white'
              onClick={() => GreenFoodHandler(typeIdx)}
            >
              <i className='far fa-grin-beam'></i> 신선
            </FridgeButton>
            <FridgeButton
              fillColor='white'
              onClick={() => yellowFoodHandler(typeIdx)}
            >
              <i className='far fa-smile'></i> 보통
            </FridgeButton>
            <FridgeButton
              fillColor='white'
              onClick={() => redFoodHandler(typeIdx)}
            >
              <i className='far fa-tired'></i> 위험
            </FridgeButton>
          </div>
        </FridgeHeader>
        <FoodBoxs>
          {type.items.map((food, foodIdx) => {
            return (
              <FoodBox
                key={foodIdx}
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "center",
                  food: food,
                })}
              >
                {Number(foodLife(food.life)) <= 7 ? (
                  <div className='alert'>
                    <i className='fas fa-exclamation-circle'></i>
                  </div>
                ) : (
                  ""
                )}
                <div className='food'>
                  {/* 음식사진 */}
                  <div>
                    <img
                      src={
                        food.food_image
                          ? food.food_image
                          : "../food_img/octopus.png"
                      }
                      alt='food'
                      className='food_img'
                    />
                  </div>

                  {/* 음식이름과 구매일자 */}
                  <div className='name_box'>
                    <div>
                      <span className='name'>{food.food_name}</span>
                    </div>
                    <div>
                      <span className='date'>
                        {sliceHandler(food.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 유통기한 디데이표시 */}
                <div className='foodlife_box'>
                  {Number(foodLife(food.life)) < 0 ? (
                    <span className='foodlife'>
                      D+{calculatorLife(food.life)}
                    </span>
                  ) : (
                    <span className='foodlife'>
                      D-{calculatorLife(food.life)}
                    </span>
                  )}
                </div>
              </FoodBox>
            );
          })}
        </FoodBoxs>
      </FoodContainer>
    </>
  );
};

const FoodContainer = styled.div`
  width: calc(100% / 3);
  min-height: 500px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media screen and (max-width: 1227px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 5px auto;
    min-height: 250px;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 5px auto;
    min-height: 250px;
  }
`;

const FridgeHeader = styled.div`
  width: 95%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  text-indent: 16px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.lightgrey};

  .type {
    cursor: pointer;
  }
  @media screen and (max-width: 1300px) {
    .type {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 1227px) {
    width: 95%;
    margin: 10px;

    .type {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    margin: 10px;

    .type {
      font-size: 17px;
    }
  }
`;

const FridgeButton = styled(SmallBtn)`
  border: 1px solid ${theme.colors.lightgrey};
  margin-right: 8px;
  font-weight: bold;
  cursor: pointer;
  i {
    font-size: 18px;
  }

  &:hover {
    background-color: #febd2f;
  }

  &:active,
  :focus {
    background-color: #febd2f;
  }
`;

const FoodBoxs = styled.div`
  display: block;

  @media screen and (max-width: 1227px) {
    width: 90%;
    display: flex;
    overflow: auto;
  }

  @media screen and (max-width: 375px) {
    width: 345px;
    display: flex;
    overflow: auto;
  }
`;

const FoodBox = styled.div`

width: 88%;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 13px auto;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }

  .alert {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 20px;
    color: red;
  }

  .food {
    display: flex;
    align-items: center;
    font-size: 17px;
    border-radius: 30px;
    margin: 10px;
  }

  .food_img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 12px;
  }

  .name_box {
    margin-left: 15px;
  }

  .date {
    font-size: 12px;
    color: #a8a7a3;
  }

  .foodlife_box {
    width: 25%;
    text-align: center;
    line-height: 80px;
    margin-right: 10px;
  }

  .foodlife {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #eaeaea;
  }

  
}

@media screen and (max-width: 1500px) {
  width: 88%;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 13px auto;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }

  .alert {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 20px;
    color: red;
  }

  .food {
    display: flex;
    align-items: center;
    font-size: 17px;
    border-radius: 30px;
    margin: 10px;
  }

  .food_img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 12px;
  }

  .name_box {
    margin-left: 15px;
  }

  .date {
    font-size: 12px;
  }

  .foodlife_box {
    width: 25%;
    text-align: center;
    line-height: 80px;
    margin-right: 10px;
  }

  .foodlife {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #eaeaea;
  }

  .red {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #fe8f8f;
    color: white;
  }
}

  @media screen and (max-width: 1200px) {

    height: 100px;

    .foodlife_box {
      text-align: center;
      line-height: 80px;
      margin-right: 10px;
    }

    .foodlife {
      padding: 8px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #eaeaea;
    }
  }

  @media screen and (max-width: 1227px) {
    
    display: block;
    min-width: 100px;
    max-width: 100px;
    height: 150px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    .food {
      display: block;
      text-align: center;
      font-size: 14px;
      border-radius: 30px;
      margin: 0 auto;
    }

    .food_img {
      width: 60px;
      height: 60px;
      margin: 0;
      margin-top: 10px;
      object-fit: contain;
      border-radius: 50%;
   
    }

    .name_box {
      margin-left: 0;
    }

    .date {
      font-size: 10px;
    }

    .foodlife_box {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      line-height: 10px;
    }

    .foodlife {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #eaeaea;
    }

    .red {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #fe8f8f;
      color: white;
    }
    .alert {
      left: 18px;
    }

  }

  @media screen and (max-width: 375px) {
    display: block;
    min-width: 100px;
    max-width: 100px;
    height: 150px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    .food {
      display: block;
      text-align: center;
      font-size: 14px;
      border-radius: 30px;
      margin: 0 auto;
    }

    .food_img {
      width: 60px;
      height: 60px;
      margin: 0;
      margin-top: 10px;
      object-fit: contain;
      border-radius: 50%;
      border: 1px solid ${theme.colors.lightgrey};
    }

    .name_box {
      margin-left: 0;
    }

    .date {
      font-size: 12px;
    }

    .foodlife_box {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      line-height: 10px;
    }

    .foodlife {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #eaeaea;
    }

    .red {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #fe8f8f;
      color: white;
    }
    .alert {
      left: 18px;
    }
  }
`;

export default Fridge;
