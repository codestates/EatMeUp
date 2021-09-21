import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EditFridge from "./EditFridge";
import theme from "../../StyledComponent/theme";
import { SmallBtn } from "../../StyledComponent/buttons";

const FridgeInner = ({ foods, checkedFoods, setCheckedFoods }) => {
  
  const [list, setList] = useState(foods);

  /* 선택된 음식을 search 박스에 넣기위한 함수 */
  const checkedFoodBox = (e, food) => {
    console.log(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCheckedFoods([...checkedFoods, food]);
    } else if (!e.currentTarget.checked) {
      const deleteCheckedfood = checkedFoods.filter((item) => {
        if (item.food_name !== food.food_name) {
          return item;
        }
      });
      setCheckedFoods(deleteCheckedfood);
    }
  };

  const convertStr = (idx) => {
    if (idx === 0) {
      return "실온";
    } else if (idx === 1) {
      return "냉장";
    } else {
      return "냉동";
    }
  };

  return (
    <FridgeInnerBox>
      {list.map((type, typeIdx) => {
        return (
          <FoodContainer key={typeIdx}>
            <FridgeHeader>
              <div className='type_box'>
                <span className='type'>{convertStr(typeIdx)}</span>
              </div>
              <div className='filterBtn_box'>
                <FridgeButton fillColor='white'>
                  <i class='far fa-laugh-squint'></i> 신선
                </FridgeButton>
                <FridgeButton fillColor='white'>
                  <i class='far fa-smile'></i> 보통
                </FridgeButton>
                <FridgeButton fillColor='white'>
                  <i class='far fa-tired'></i> 위험
                </FridgeButton>
              </div>
            </FridgeHeader>

            {type.items.map((food, foodIdx) => {
              return (
                <FoodBox key={foodIdx}>
                  <div className='food'>
                    <div>
                      <img
                        src={`../food_img/${food.food_image}`}
                        alt='food'
                        className='food_img'
                        draggable={false}
                      />
                    </div>
                    <div className='name_box'>
                      <div>
                        <span className='name'>{food.food_name}</span>
                      </div>
                      <div>
                        <span className='date'>2021.09.20</span>
                      </div>
                    </div>
                  </div>
                  <div className='foodlife_box'>
                    <span className='foodlife'>D-{food.life}</span>
                  </div>
                </FoodBox>
              );
            })}
          </FoodContainer>
        );
      })}
    </FridgeInnerBox>
  );
};

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
`;

const FridgeButton = styled(SmallBtn)`
  border: 1px solid #e1e0dc;
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

const FridgeInnerBox = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 0;
  display: flex;
`;

const FoodContainer = styled.div`
  width: calc(100% / 3);
  min-height: 500px;
  border-radius: 20px;
  margin: 0px 10px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }

  .check_box {
    width: 15%;
    text-align: center;
    line-height: 80px;
    padding: 5px auto;
    border-radius: 30px;
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
`;

export default FridgeInner;
