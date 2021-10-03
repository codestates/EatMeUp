import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikelist } from "../../_actions/userActions";
import { allRecipes } from "../../_actions/recipeActions";

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

const PlanningPage = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recommandrecipes);
  const { mylikelist } = useSelector((state) => state.mylikelist);
  const [addToPlan, setAddToPlan] = useState({
    image: null,
    title: "",
    id: null,
  });

  useEffect(() => {
    dispatch(getMyLikelist());
    dispatch(allRecipes({ page: 1 }));
  }, [dispatch]);
  console.log(addToPlan);

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
                  <input type='date' />
                </ThisMonth>
              </div>
              <div>
                <CalendarBtn fillColor={theme.colors.yellow} style={{ color: "white"}}>
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
                  recipes={recipes}
                  setAddToPlan={setAddToPlan}
                />
              </RecommandRecipesBox>

              {/* 아침/점심/저녁 식단 */}
              <PlannerBox>
                {/* 사야할 재료 */}
                <IngredientBox>
                  <div className='title'>사야할 재료</div>
                  <div className='emptybox'>
                    <div><i class="fas fa-hourglass-start"></i>서비스 준비중..</div>
                  </div>
                </IngredientBox>

                {/* 아침/점심/저녁 적는 식단 */}
                <MealPlanCardBox>
                  <MealPlanCard addToPlan={addToPlan} />
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
`;

const ThisMonth = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #303030;
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
`;

const MealPlaner = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`;

const RecommandRecipesBox = styled.div`
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  height: 560px;
  margin: 0px 10px 0px 20px;
`;
// margin top right bottom left (시계방향)
// margin 위아래, 오른쪽왼쪽
const PlannerBox = styled.div`
  width: 70%;
  margin: 0px 20px 0px 10px;
`;

const rotate = keyframes`
  from {

    transform: rotate(-180deg)
  }

  to {
    transform: rotate(0deg)
  }
`

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

  .fa-hourglass-start  {
    margin-right: 10px;
    animation: ${rotate} 2s infinite;
  }
`;

const MealPlanCardBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export default PlanningPage;
