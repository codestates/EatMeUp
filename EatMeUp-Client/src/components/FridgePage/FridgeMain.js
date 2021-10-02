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
      swal(
        "Please!",
        "로그인이 필요합니다.",
        "warning",
      );
      dispatch(clearErrors());
      history.push('/');
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
                <div className='search'>
                  <i class='fas fa-search'></i>
                </div>
              </Stack>
            </CheckedFoodsBox>

            <GotoBtnBox onClick={searchByFoodHandler}>
              레시피 보기 <i className='fas fa-play'></i>
            </GotoBtnBox>
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
  width: 75%;
  margin: 0px auto;
  display: flex;
  position: relative;
  margin-top: 50px;

  @media screen and (max-width: 1500px) {
    width: 80%;
    font-size: 17px;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    font-size: 17px;
  }

  @media screen and (max-width: 975px) {
    display: block;
  }

  @media screen and (max-width: 775px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const FridgeTitle = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 975px) {
    display: block;
  }

  @media screen and (max-width: 775px) {
    display: block;
  }
`;

// 클릭한 음식담는 영역
const CheckedFoodsBox = styled.div`
  width: 70%;
  height: 40px;
  border: 2px solid #ebe9e5;
  border-radius: 30px 0px 0px 30px;
  margin-left: 10px;
  padding-top: 5px;

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

  .fa-search {
    display: none;
  }

  @media screen and (max-width: 975px) {
    width: 100%;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;

    .search {
      margin-left: 40px;
      color: #a8a7a3;
      line-height: 30px;
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 775px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    border-radius: 20px;
    margin: 10px auto;

    .fa-search {
      margin-left: 40px;
      color: #a8a7a3;
      line-height: 30px;
    }
  }
`;

// 재료기반 레시피 찾기버튼
const GotoBtnBox = styled.div`
  width: 120px;
  height: 33px;
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

  @media screen and (max-width: 975px) {
    display: none;
    
  }
  @media screen and (max-width: 375px) {
    display: none;
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
