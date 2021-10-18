import React, { useState } from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import { foodLife } from "./utils/convertDate";

import Fridge from "./Fridge";

/* 스타일 컴포넌트 */
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const FridgeInner = ({ foods, checkedFoods, setCheckedFoods }) => {
  const [filtered, setFiltered] = useState(null);
  const [alreadyHas, setAlreadyHas] = useState(false);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    console.log(newState)
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


  /* 신선버튼 핸들러 */
  const GreenFoodHandler = (idx) => {
    const freshFood = foods.map((food) => {
      if (String(idx) === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (foodLife(item.life) > 30) {
            return item;
          }
          return "";
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

    setFiltered(freshFood);
  };

  /* 보통버튼 핸들러 */
  const yellowFoodHandler = (idx) => {
    const yellowFood = foods.map((food) => {
      if (String(idx) === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (foodLife(item.life) < 30 && foodLife(item.life) > 7) {
            return item;
          }
          return "";
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
      if (String(idx) === food.type) {
        const filtereditem = food.items.filter((item) => {
          if (foodLife(item.life) <= 7) {
            return item;
          }
          return "";
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
    setFiltered(null);
  };


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
        {!filtered
          ? foods.map((type, typeIdx) => {
              return (
                <Fridge
                  key={typeIdx}
                  typeIdx={typeIdx}
                  type={type}
                  handleClick={handleClick}
                  resetFilterHandler={resetFilterHandler}
                  GreenFoodHandler={GreenFoodHandler}
                  yellowFoodHandler={yellowFoodHandler}
                  redFoodHandler={redFoodHandler}
                />
              );
            })
          : filtered.map((type, typeIdx) => {
              return (
                //typeIdx, resetFiltterHandler, GreenFoodHandler, yellowFoodHandler, RedFoodHandler, type
                //  신선, 보통, 위험버튼눌렀을 때
                <Fridge
                  key={typeIdx}
                  typeIdx={typeIdx}
                  type={type}
                  handleClick={handleClick}
                  resetFilterHandler={resetFilterHandler}
                  GreenFoodHandler={GreenFoodHandler}
                  yellowFoodHandler={yellowFoodHandler}
                  redFoodHandler={redFoodHandler}
                />
              );
            })}
      </FridgeInnerBox>
    </div>
  );
};

const FridgeInnerBox = styled.div`
  width: 100%;
  min-height: 650px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1500px) {
    width: 100%;
  }

  @media screen and (max-width: 1227px) {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    display: block;
    width: 100%;
  }
`;


export default FridgeInner;
