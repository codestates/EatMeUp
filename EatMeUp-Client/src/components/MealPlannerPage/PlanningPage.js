import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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


  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          <Sidebar />

          <PlannerContainer>
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
                <Link to='/user/myplanner'>
                  <CalendarBtn fillColor={theme.colors.lightgrey}>
                    달력보러 가기
                  </CalendarBtn>
                </Link>
              </div>
            </TitleBox>
            
            <MealPlaner>
              <RecommandRecipesBox>
                <RecipeCards />
              </RecommandRecipesBox>

              <PlannerBox>
                <IngredientBox></IngredientBox>

                <MealPlanCardBox>
                  <MealPlanCard />
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
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
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

  input {

  }
`;

const CalendarBtn = styled(MiddleBtn)`
  margin-right: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #303030;
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
  border-radius: 20px;
  height: 560px;
  margin: 0px 10px 0px 20px;
`;
// margin top right bottom left (시계방향)
// margin 위아래, 오른쪽왼쪽
const PlannerBox = styled.div`
  width: 70%;
  margin: 0px 20px 0px 10px;
`;

const IngredientBox = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const MealPlanCardBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export default PlanningPage;