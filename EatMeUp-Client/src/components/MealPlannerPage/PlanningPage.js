import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikelist } from "../../_actions/userActions";
import { allFoods } from "../../_actions/fridgeActions";
import { createMealPlan } from "../../_actions/calendarActions";
import axios from "axios";

/* 컴포넌트 */
import Header from "../Util/Header";
import MealPlanCard from "./sections/MealPlanCard";
import RecipeCards from "./sections/RecipeCard";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";

/* 스타일 컴포넌트 */
import { MiddleBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";
import { Container, SectionBox } from "../StyledComponent/containers";

const { Swal } = window;

const PlanningPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { foods } = useSelector((state) => state.allFoods);
  const { mylikelist } = useSelector((state) => state.mylikelist);

  const [date, setDate] = useState("");
  const [getRecommand, setGetRecommand] = useState([]);
  const [addToPlan, setAddToPlan] = useState({
    image: null,
    title: "",
    id: null,
  });

  const [mealPlan, setMealPlan] = useState([
    { id: 0, meal: "아침", plan: [], recipeId: [] },
    { id: 1, meal: "점심", plan: [], recipeId: [] },
    { id: 2, meal: "저녁", plan: [], recipeId: [] },
  ]);

  useEffect(() => {
    dispatch(getMyLikelist());
    dispatch(allFoods());
  }, [dispatch]);

  useEffect(() => {
    const food = [];
    foods.forEach((type) => {
      type.items.forEach((item) => {
        food.push({ name: item.food_name });
      });
    });

    const data = {
      food: food,
    };

    axios
      .post(`${process.env.REACT_APP_API}/recipe/food`, data, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          setGetRecommand(response.data.recipeInfo[0]);
        }
      });
  }, [foods]);

  const addMealplanHandler = () => {
    if (date === "") {
      alert("날짜를 추가해주세요.");
      return;
    }

    const plan = {
      date: date,
      breakfast: mealPlan[0].recipeId,
      lunch: mealPlan[1].recipeId,
      dinner: mealPlan[2].recipeId,
    };

    Swal.fire({
      title: "Success",
      text: "식단을 추가 하시겠습니까?",
      icon: "success",
      showCancleButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "추가하기",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(createMealPlan(plan));
        history.push("/user/myplanner");
      }
    });
  };

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바영역 */}
          <Sidebar id={3} />

          {/* 콘텐츠영역 */}
          <PlannerContainer>
            {/* 타이틀/날짜핸들러/달력보러가기버튼 영역 */}
            <TitleBox>
              <div>
                <ThisMonth>식단짜기</ThisMonth>
              </div>
              <div>
                <ThisMonth>
                  <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </ThisMonth>
              </div>
              <div>
                <CalendarBtn
                  onClick={addMealplanHandler}
                  fillColor={theme.colors.yellow}
                  style={{ color: "white" }}
                >
                  식단 추가하기
                </CalendarBtn>
                <Link to='/user/myplanner'>
                  <CalendarBtn fillColor={theme.colors.lightgrey}>
                    달력보러 가기
                  </CalendarBtn>
                </Link>
              </div>
            </TitleBox>

            {/* 식단짜기영역 */}
            <MealPlaner>
              {/* 레시피 추천 */}
              <RecommandRecipesBox>
                <RecipeCards
                  mylikelist={mylikelist}
                  getRecommand={getRecommand}
                  setAddToPlan={setAddToPlan}
                />
              </RecommandRecipesBox>

              {/* 아침/점심/저녁 식단 */}
              <PlannerBox>
                {/* 사야할 재료 */}
                <IngredientBox>
                  <div className='title'>사야할 재료</div>
                  <div className='emptybox'>
                    <div>
                      <i className='fas fa-hourglass-start'></i>서비스 준비중..
                    </div>
                  </div>
                </IngredientBox>

                {/* 아침/점심/저녁 적는 식단 */}
                <MealPlanCardBox>
                  <MealPlanCard
                    addToPlan={addToPlan}
                    mealPlan={mealPlan}
                    setMealPlan={setMealPlan}
                  />
                </MealPlanCardBox>
              </PlannerBox>
            </MealPlaner>
          </PlannerContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};

const PlannerContainer = styled(SectionBox)`
  width: 77%;
  min-height: 770px;

  @media screen and (max-width: 1035px) {
    width: 88%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100px;
  margin: 0 auto;
  input {
    height: 40px;
    width: 220px;
    font-size: 20px;
    border-radius: 20px;
    border: none;
  }

  /* 반응형 css */
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }

  @media screen and (max-width: 625px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      font-size: 15px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      font-size: 15px;
      margin-top: 10px;
    }
  }
`;

const ThisMonth = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #303030;

   /* 반응형 css */
   @media screen and (max-width: 725px) {
    font-size: 18px;
  }
   @media screen and (max-width: 625px) {
    font-size: 18px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const CalendarBtn = styled(MiddleBtn)`
  margin-right: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #303030;
  width: 130px;

  &:hover {
    border: 2px solid ${theme.colors.lightgrey};
  }

   /* 반응형 css */

   @media screen and (max-width: 725px) {
   width: 120px;
   height: 30px;
 
  }
   @media screen and (max-width: 625px) {
   width: 120px;
   height: 30px;
 
  }
  @media screen and (max-width: 375px) {
   width: 120px;
   height: 30px;
 
  }
`;

const MealPlaner = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;

  /* 반응형 css */
  @media screen and (max-width: 625px) {
    display: block;
    margin-top: 15px;
  }
  @media screen and (max-width: 375px) {
    display: block;
    margin-top: 15px;
  }
`;

const RecommandRecipesBox = styled.div`
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  height: 560px;
  margin: 0px 10px 0px 20px;

   /* 반응형 css */
   @media screen and (max-width: 1300px) {
    min-width: 300px;
  }
  @media screen and (max-width: 625px) {
    width: 95%;
    max-width: 240px;
    margin: 5px auto;
    max-height: 250px;
    overflow-x: scroll;
  }
  @media screen and (max-width: 375px) {
    min-width: 95%;
    margin: 5px auto;
    max-height: 250px;
  }
`;

const PlannerBox = styled.div`
  width: 70%;
  margin: 0px 20px 0px 10px;

   /* 반응형 css */

   @media screen and (max-width: 625px) {
    width: 95%;
    /* max-width: 260px; */
    margin: 5px auto;
    max-height: 250px;
    overflow-x: scroll;
  }
  @media screen and (max-width: 375px) {
    max-width: 100%;
    margin: 5px auto;
    max-height: 250px;
    overflow-x: scroll;
  }
`;

const rotate = keyframes`
  from {

    transform: rotate(-180deg)
  }

  to {
    transform: rotate(0deg)
  }
`;

const IngredientBox = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;

  .title {
    margin-top: 10px;
    text-indent: 15px;
    font-size: 20px;
    font-weight: 500;
    padding-top: 10px;
  }

  .emptybox {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 20px;
    color: grey;
  }

  .fa-hourglass-start {
    margin-right: 10px;
    animation: ${rotate} 2s infinite;
  }

   /* 반응형 css */
   @media screen and (max-width: 1300px) {
    display: none;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const MealPlanCardBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

   /* 반응형 css */
   @media screen and (max-width: 1300px) {
    display: block;
  }

  @media screen and (max-width: 625px) {
    display: block;
    width: 100%;

  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 100%;
  }
`;

export default PlanningPage;
