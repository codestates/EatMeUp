import React, { useState } from "react";
import "./fridge.css";
import { foodData } from "../dummydata";
import FridgeInner from "./sections/FridgeInner";
import FridgeBtn from "./sections/FridgeBtn";
import styled from "styled-components";

const FOODS = foodData.map((food) => {
  const splited = food.life.split("-");
  const getDate = new Date();
  const today = new Date(
    getDate.getFullYear(),
    getDate.getMonth(),
    getDate.getDay(),
  );
  const foodLife = new Date(
    Number(splited[0]),
    Number(splited[1]),
    Number(splited[2]),
  );

  const elapsedMSec = foodLife.getTime() - today.getTime(); // 172800000
  const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24; // 2

  return {
    id: food.id,
    food_name: food.food_name,
    food_image: food.food_image,
    frez_type: food.frez_type,
    life: elapsedDay,
    created_at: food.created_at,
    update_at: food.update_at,
  };
});

const defaultRedFoods = FOODS.filter((food) => {
  if (food.life <= 30) {
    return food;
  }
});

const foodlist = [
  { type: 0, items: [] },
  { type: 1, items: [] },
  { type: 2, items: [] },
];

FOODS.forEach((food) => {
  if (food.frez_type === 0) {
    foodlist[0].items.push(food);
  } else if (food.frez_type === 1) {
    foodlist[1].items.push(food);
  } else {
    foodlist[2].items.push(food);
  }
});

const FreezerMain = () => {
  const [checkedFoods, setCheckedFoods] = useState(defaultRedFoods);
  const [foods, setFoods] = useState(foodlist);
  const [showEditBtn, setShowEditBtn] = useState(false);

  /* 냉장고 타입 한글변환기 */
  const convertStr = (idx) => {
    if (idx === 0) {
      return "실온";
    } else if (idx === 1) {
      return "냉장";
    } else {
      return "냉동";
    }
  };

  /* 신선버튼 핸들러 */

  const GreenFoodHandler = (idx) => {
    const freshFood = foods.map((food) => {
      if (idx === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (item.life > 30) {
            return item;
          }
        });
        return {
          type: idx,
          items: filtereditem,
        };
      } else {
        return {
          type: food.type,
          items: food.items,
        };
      }
    });
    console.log(freshFood);
    setFoods(freshFood);
  };

  /* 보통버튼 핸들러 */
  const yellowFoodHandler = (idx) => {
    const yellowFood = foods.map((food) => {
      if (idx === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (item.life < 30 && item.life > 7) {
            return item;
          }
        });
        return {
          type: idx,
          items: filtereditem,
        };
      } else {
        return {
          type: food.type,
          items: food.items,
        };
      }
    });
    setFoods(yellowFood);
  };

  /* 위험버튼 핸들러 */
  const redFoodHandler = (idx) => {
    const redFood = foods.map((food) => {
      if (idx === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (item.life <= 7) {
            return item;
          }
        });
        return {
          type: idx,
          items: filtereditem,
        };
      } else {
        return {
          type: food.type,
          items: food.items,
        };
      }
    });

    setFoods(redFood);
  };

  const showEditBtnHandler = () => {
    setShowEditBtn(!showEditBtn);
  };

  return (
    <>
      <header></header>
      <section>
        <div className='pagetitle_box'>
          <h1>My Fridge</h1>
        </div>
        <div className='content_box'>
          {/* 유통기한이 임박한 음식 추천기능 */}
          <div className='checkedfood_box'>
            <div className='checkedfood_area'>
              {checkedFoods.map((food, idx) => {
                return (
                  <span key={idx} className='name'>
                    {food.food_name}
                  </span>
                );
              })}
            </div>
            <div className='gotoBtn_area'>
              <button>추천 레시피 보러가기</button>
            </div>
          </div>

          {/* fridge header */}
          <div className='fridgeHeader_box'>
            {foods.map((food, idx) => {
              return (
                <div className='frez_type' key={idx}>
                  <div className='type_box'>
                    <span className='type'>{convertStr(idx)}</span>
                  </div>
                  <div className='filterBtn_box'>
                    <Button
                      color="green"
                      onClick={() => GreenFoodHandler(idx)}
                    >
                      신선
                    </Button>
                    <button
                      className='filterBtn yellow'
                      onClick={() => yellowFoodHandler(idx)}
                    >
                      보통
                    </button>
                    <button
                      className='filterBtn red'
                      onClick={() => redFoodHandler(idx)}
                    >
                      위험
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* fridge inner */}
          <FridgeInner
            foods={foods}
            showEditBtn={showEditBtn}
            checkedFoods={checkedFoods}
            setCheckedFoods={setCheckedFoods}
          />

          {/* fridge button  */}
          <FridgeBtn showEditBtnHandler={showEditBtnHandler} />
        </div>
      </section>
      <footer></footer>
    </>
  );
};

const Button = styled.button`
  width: calc(100% / 3);
  height: 75%;
  margin: 0 auto;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export default FreezerMain;
