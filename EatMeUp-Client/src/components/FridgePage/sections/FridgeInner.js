import React, { useState } from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from 'react-redux';

/* 스타일 컴포넌트 */
import theme from "../../StyledComponent/theme";
import { SmallBtn } from "../../StyledComponent/buttons";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const FridgeInner = ({ foods, checkedFoods, setCheckedFoods }) => {

  // const { foods } = useSelector((state) => state.allFoods);


  const [filtered, setFiltered] = useState(null);
  const [alreadyHas, setAlreadyHas] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    /* 이미 추가된 재료인지 파악하기 위한 조건문  */
    if (checkedFoods.includes(newState.food.food_name)) {
      setCheckedFoods([...checkedFoods]);
      setAlreadyHas(true); //재료추가된 재료가 이미 있을 경우 true
    } else {
      setCheckedFoods([...checkedFoods, newState.food.food_name]);
      setAlreadyHas(false); //재료추가된 재료가 없는 경우 false
    }
    setState({ open: true, ...newState });

    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);
  };


  /* <i class="fas fa-wind"></i> 실온
<i class="fas fa-thermometer-half"></i> 냉장
<i class="fas fa-snowflake"></i> 냉동 */
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
    setFiltered(freshFood);
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
    setFiltered(yellowFood);
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

    setFiltered(redFood);
  };

  const resetFilterHandler = () => {
    setFiltered(null)
  }

  return (
    <div>
      {/* 재료추가시 보여주는 메세지 */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message='I love snacks'
        key={vertical + horizontal}
      >
        {/* 이미추가된 재료를 판별하여 다르게 메세지를 보여줌 */}
        {alreadyHas ? (
          <Alert severity='warning'>이미 추가된 재료 입니다.</Alert>
        ) : (
          <Alert severity='success'> 재료가 추가되었습니다.</Alert>
        )}
      </Snackbar>

      {/* 냉장고  */}
      <FridgeInnerBox>
        {!filtered ? foods.map((type, typeIdx) => {
          return (
            <FoodContainer key={typeIdx}>
              {/* 냉장고 재료 핸들러 버튼영역 */}
              <FridgeHeader>
                <div className='type_box'>
                  <span className='type'>{convertStr(typeIdx)}</span>
                </div>
                <div className='filterBtn_box'>
                  <FridgeButton fillColor='white' onClick={() => GreenFoodHandler(typeIdx)}>
                    <i className='far fa-grin-beam'></i> 신선
                  </FridgeButton>
                  <FridgeButton fillColor='white' onClick={() => yellowFoodHandler(typeIdx)}>
                    <i className='far fa-smile'></i> 보통
                  </FridgeButton>
                  <FridgeButton fillColor='white' onClick={() => redFoodHandler(typeIdx)}>
                    <i className='far fa-tired'></i> 위험
                  </FridgeButton>
                </div>
              </FridgeHeader>

              {type.items.map((food, foodIdx) => {
                return (
                  <FoodBox
                    key={foodIdx}
                    onClick={handleClick({
                      vertical: "top",
                      horizontal: "center",
                      food: food,
                    })}
                  >
                    <div className='food'>
                      {/* 음식사진 */}
                      <div>
                        <img
                          src={`../food_img/${food.food_image}`}
                          alt='food'
                          className='food_img'
                          draggable={false}
                        />
                      </div>

                      {/* 음식이름과 구매일자 */}
                      <div className='name_box'>
                        <div>
                          <span className='name'>{food.food_name}</span>
                        </div>
                        <div>
                          <span className='date'>2021.09.20</span>
                        </div>
                      </div>
                    </div>

                    {/* 유통기한 디데이표시 */}
                    <div className='foodlife_box'>
                      <span className='foodlife'>D-{food.life}</span>
                    </div>
                  </FoodBox>
                );
              })}
            </FoodContainer>
          );
        }) : filtered.map((type, typeIdx) => {
          return (
            <FoodContainer key={typeIdx}>
              {/* 냉장고 재료 핸들러 버튼영역 */}
              <FridgeHeader>
                <div className='type_box'>
                  <span className='type' onClick={resetFilterHandler}>{convertStr(typeIdx)}</span>
                </div>
                <div className='filterBtn_box' >
                  <FridgeButton fillColor='white' onClick={() => GreenFoodHandler(typeIdx)}>
                    <i className='far fa-grin-beam'></i> 신선
                  </FridgeButton>
                  <FridgeButton fillColor='white' onClick={() => yellowFoodHandler(typeIdx)}>
                    <i className='far fa-smile' ></i> 보통
                  </FridgeButton>
                  <FridgeButton fillColor='white' onClick={() => redFoodHandler(typeIdx)}>
                    <i className='far fa-tired'></i> 위험
                  </FridgeButton>
                </div>
              </FridgeHeader>

              {type.items.map((food, foodIdx) => {
                return (
                  <FoodBox
                    key={foodIdx}
                    onClick={handleClick({
                      vertical: "top",
                      horizontal: "center",
                      food: food,
                    })}
                  >
                    <div className='food'>

                      {/* 음식사진 */}
                      <div>
                        <img
                          src={`../food_img/${food.food_image}`}
                          alt='food'
                          className='food_img'
                          draggable={false}
                        />
                      </div>

                      {/* 음식이름과 구매일자 */}
                      <div className='name_box'>
                        <div>
                          <span className='name'>{food.food_name}</span>
                        </div>
                        <div>
                          <span className='date'>2021.09.20</span>
                        </div>
                      </div>
                    </div>

                    {/* 유통기한 디데이표시 */}
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
    </div>
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
  border-bottom: 1px solid #ced0ce;

  .type {
    cursor: pointer;
  }
  @media screen and (max-width: 1300px) {
    .type {
      display: none;
    }
  }
`;

const FridgeButton = styled(SmallBtn)`
  border: 1px solid #ced0ce;
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
  width: 1280px;
  min-height: 450px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const FoodContainer = styled.div`
  width: 400px;
  min-height: 500px;
  border-radius: 20px;
  margin: 0px 10px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
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
  @media screen and (max-width: 1300px) {
    justify-content: center;
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
`;

export default FridgeInner;
