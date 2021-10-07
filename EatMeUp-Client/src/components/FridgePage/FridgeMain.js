import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {
  allFoods,
  saveFridgeInfo,
  clearErrors,
} from "../../_actions/fridgeActions";
import { getRecommandRecipe } from "../../_actions/recipeActions";
import { logoutRequest } from "../../_actions/authActions";
import {
  NEW_FOOD_RESET,
  EDIT_FOOD_RESET,
  DELETE_FOOD_RESET,
  SAVE_FOOD_RESET,
} from "../../_types/fridgeTypes";

/* 컴포넌트 */
import FridgeInner from "./sections/FridgeInner";
import FridgeBtn from "./sections/FridgeBtn";
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import EditFridge from "./sections/EditFridge";
import Loader from "../Util/Loader";

const { swal } = window;
/* 냉장고 페이지 */
const FridgeMain = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { foods, error, loading } = useSelector((state) => state.allFoods);
  const { isEdited, isCreated, isDeleted } = useSelector((state) => state.food);
  const { isArranged } = useSelector((state) => state.savedfoods);
  const [foodList, setFoodList] = useState(foods);

  useEffect(() => {
    dispatch(allFoods());

    if (isCreated) {
      dispatch({ type: NEW_FOOD_RESET });
    }
    if (isEdited) {
      dispatch({ type: EDIT_FOOD_RESET });
    }

    if (isDeleted) {
      dispatch({ type: DELETE_FOOD_RESET });
    }

    if (isArranged) {
      dispatch({ type: SAVE_FOOD_RESET });
    }

    if (error) {
      swal("Please!", "로그인이 필요합니다.", "warning");
      dispatch(clearErrors());
      dispatch(logoutRequest());
      history.push("/");
      return;
    }
  }, [dispatch, isEdited, isCreated, isArranged, isDeleted, error, history]);

  useEffect(() => {
    setFoodList(foods);
  }, [foods]);

  const [checkedFoods, setCheckedFoods] = useState([]);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  /* 수정하기 버튼, 수정한 음식리스트 저장 요청 핸들러 */
  const showEditBtnHandler = (e) => {
    e.preventDefault();
    setShowEditBtn(!showEditBtn);
    setFoodList(foods);
    if (showEditBtn) {
      dispatch(saveFridgeInfo(foodList));
      setFoodList(foods);
    }
  };

  /* 추가된 재료 삭제 핸들러 */
  const handleDelete = (idx) => {
    const deleteFood = checkedFoods.filter((food, id) => {
      if (id !== idx) return food;
      return "";
    });
    setCheckedFoods(deleteFood);
    setCurrentIdx(idx);
  };

  const searchByFoodHandler = () => {
    const foodArr = checkedFoods.map((food) => {
      return {
        name: food,
      };
    });

    const data = {
      food: foodArr,
    };

    if (foodArr.length === 0) {
      swal("Please!", "마이냉장고 속 음식을 선택해주세요.", "error");
      return;
    }
    dispatch(getRecommandRecipe(data));
    history.push("/recipes/result");
  };

  return (
    <>
      <Header id={1} />
      {loading ? (
        <Loader />
      ) : (
        <section>
          {/* 유통기한이 임박한 음식 추천기능 */}

          <SearchBox>
            <FridgeTitle>마이냉장고</FridgeTitle>
            <FoodBox>
              {/* 체크된 음식 담는 영역 */}
              <CheckedFoodsBox>
                <Stack direction='row' spacing={1}>
                  <i className='fas fa-shopping-basket'></i>
                  {checkedFoods.length === 0 ? (
                    <span className='placeholder'>
                      냉장고 재료를 추가해 주세요
                    </span>
                  ) : (
                    checkedFoods.map((food, idx) => {
                      return (
                        <Chip
                          key={idx}
                          label={food}
                          onDelete={() => handleDelete(idx)}
                        />
                      );
                    })
                  )}
                </Stack>
              </CheckedFoodsBox>

              <GotoBtnBox onClick={searchByFoodHandler}>
                레시피 보기 <i className="fas fa-chevron-right"></i>
              </GotoBtnBox>
            </FoodBox>
          </SearchBox>

          {/* 냉장고 */}
          <ContentBox>
            {/* 냉장고 안 */}
            {showEditBtn ? (
              <EditFridge
                foodList={foodList}
                setFoodList={setFoodList}
                showEditBtn={showEditBtn}
                setShowEditBtn={setShowEditBtn}
              />
            ) : (
              <FridgeInner
                foods={foods}
                checkedFoods={checkedFoods}
                setCheckedFoods={setCheckedFoods}
              />
            )}

            {/* 냉장고 핸들러 버튼들 */}
            <FridgeBtn
              showEditBtnHandler={showEditBtnHandler}
              showEditBtn={showEditBtn}
            />
          </ContentBox>
        </section>
      )}
      <Footer />
    </>
  );
};

// 음식담는 영역 css
const SearchBox = styled.div`
  width: 70%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 7% 0 0 0;
  @media screen and (max-width: 1500px) {
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 80%;
  }

  @media screen and (max-width: 775px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 575px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 90%;
  }
`;

const FridgeTitle = styled.div`
  width: 15%;
  font-weight: bold;
  font-size: 35px;
  text-indent: 10px;

  @media screen and (max-width: 1200px) {
    width: 15%;
    font-size: 27px;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 775px) {
    display: block;
  }

  @media screen and (max-width: 575px) {
    display: block;
  }

  @media screen and (max-width: 450px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const FoodBox = styled.div`
  width: 85%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1035px) {
    width: 100%;
    margin: 8px 0px;
  }
`;

// 클릭한 음식담는 영역
const CheckedFoodsBox = styled.div`
  width: 85%;
  height: 40px;
  border: 2px solid #ebe9e5;
  border-radius: 30px 0px 0px 30px;
  padding-top: 5px;
  margin-left: 8px;

  .fa-shopping-basket {
    margin-left: 20px;
    color: #a8a7a3;
    line-height: 30px;
  }

  .name {
    margin-left: 15px;
    padding: 3px 20px;
    background-color: #e1e0dc;
    border-radius: 30px;
  }

  .placeholder {
    text-indent: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #a8a7a3;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 85%;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 90%;
  }
`;

// 재료기반 레시피 찾기버튼
const GotoBtnBox = styled.div`
  width: 13%;
  height: 32px;
  border-radius: 0px 30px 30px 0px;
  line-height: 33px;
  background: white;
  color: white;
  font-weight: bold;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  color: #303030;
  cursor: pointer;
  border: 1px solid #ebe9e5;

  @media screen and (max-width: 1035px) {
    display: block;
    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 775px) {
    font-size: 13px;

    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 575px) {
    width: 20%;
    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    width: 20%;
    font-size: 10px;
  }

  @media screen and (max-width: 375px) {


  }
`;

//냉장고
const ContentBox = styled.div`
  width: 70%;
  margin: 2rem auto;

  @media screen and (max-width: 1500px) {
    width: 90%;
  }

  @media screen and (max-width: 375px) {
    margin: 5px auto;
    width: 95%;
  }
`;

export default FridgeMain;
