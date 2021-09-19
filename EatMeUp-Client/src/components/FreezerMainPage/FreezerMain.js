import React, { useState } from "react";
import { foodData } from "../dummydata";
import FridgeInner from "./sections/FridgeInner";
import FridgeBtn from "./sections/FridgeBtn";
import Header from '../Util/Header'
import styled from "styled-components";
import { SmallBtn } from "../StyledComponent/buttons";
import Footer from '../Util/Footer'

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
      <Header id={1} />
      <section>
        
        {/* 유통기한이 임박한 음식 추천기능 */}
        <SearchBox>
          <FridgeTitle>
              마이 냉장고
          </FridgeTitle>
          <CheckedFoodsBox>
            {checkedFoods.map((food, idx) => {
              return (
                <span key={idx} className='name'>
                  {food.food_name}
                </span>
              );
            })}
          </CheckedFoodsBox>
          <GotoBtnBox>
            <button>레시피 보기 <i class="fas fa-chevron-right"></i></button>
          </GotoBtnBox>
        </SearchBox>

        {/* fridge */}
        <ContentBox>
          {/* fridge header */}
          <FridgeHeader>
            {foods.map((food, idx) => {
              return (
                <FrezType key={idx}>
                  <div className='type_box'>
                    <span className='type'>{convertStr(idx)}</span>
                  </div>
                  <div className='filterBtn_box'>
                    <FridgeButton
                      fillColor='white'
                      onClick={() => GreenFoodHandler(idx)}
                    >
                      <i class='far fa-laugh-squint'></i> 신선
                    </FridgeButton>
                    <FridgeButton
                      fillColor='white'
                      onClick={() => yellowFoodHandler(idx)}
                    >
                      <i class='far fa-smile'></i> 보통
                    </FridgeButton>
                    <FridgeButton
                      fillColor='white'
                      onClick={() => redFoodHandler(idx)}
                    >
                      <i class='far fa-tired'></i> 위험
                    </FridgeButton>
                  </div>
                </FrezType>
              );
            })}
          </FridgeHeader>

          {/* fridge inner */}
          <FridgeInner
            foods={foods}
            showEditBtn={showEditBtn}
            checkedFoods={checkedFoods}
            setCheckedFoods={setCheckedFoods}
          />

          {/* fridge button  */}
          <FridgeBtn showEditBtnHandler={showEditBtnHandler} />
        </ContentBox>
      </section>
      <Footer />
    </>
  );
};




const SearchBox = styled.div`
  width: 85%;
  margin: 0.5rem auto;
  display: flex;
  margin-top: 25px;
`

const FridgeTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`

const CheckedFoodsBox = styled.div`
  width: 70%;
  height: 40px;
  border: 1px solid #E1E0DC;
  border-radius: 30px 0px 0px 30px;
  margin-top: 15px;
  margin-left: 18px;
  line-height: 40px;

  .name {
    margin-left: 15px;
    padding: 5px 20px;
    background-color: #E1E0DC;
    border-radius: 30px;
  }
`

const GotoBtnBox = styled.div`
  margin-top: 15px;
 
  button {
    border: 1px solid #E1E0DC;
    width: 150px;
    height: 42px;
    border-radius: 0px 30px 30px 0px;
  
    background: white;
    font-weight: bold;
    padding: 8px;
  }
`

const ContentBox = styled.div`
   width: 85%;
  margin: 0.5rem auto;
`
const FridgeHeader = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px auto;
  display: flex;
`;

const FrezType = styled.div`
  width: 400px;
  height: auto;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-weight: bold;

  .type_box {
    width: 20%;
    text-align: center;
    line-height: 50px;
  }

  .type {
    text-align: center;
  }

  .filterBtn_box {
    width: 75%;
    display: flex;
    align-items: center;
  }
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
    background-color: #FEBD2F;
  }

  &:active, :focus {
    background-color: #FEBD2F;
  }
`;

export default FreezerMain;
