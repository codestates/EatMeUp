import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { myRecipes } from "../dummydata";
import { MiddleBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";
import Header from "../Util/Header";
import MealPlanCard from "./sections/MealPlanCard";
import RecipeCards from "./sections/RecipeCard";
import Footer from '../Util/Footer'

const PlanningPage = () => {
  return (
    <>
      <Header id={2} />
      <section>
        <ContentBox>
          <Link to='/user/myrecipe'>
            <Sidebar>Home</Sidebar>
          </Link>

          <PlannerContainer>
            <TitleBox>
              <div>
                <ThisMonth>식단짜기</ThisMonth>
              </div>
              <div>
                <ThisMonth>2021.9.18</ThisMonth>
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
        </ContentBox>
      </section>
      <Footer />
    </>
  );
};

const ContentBox = styled.div`
  width: 90%;
  margin: 0.5rem auto;
  display: flex;
  margin-top: 50px;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
  margin-right: 20px;
`;

const PlannerContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100px;
  margin: 0 auto;
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
`;

const MealPlaner = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
`;
const RecommandRecipesBox = styled.div`
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 0px 10px 10px 10px;
  min-height: 400px;
`;

const PlannerBox = styled.div`
  width: 70%;
  margin-left: 5px;
`;

const IngredientBox = styled.div`
  width: 97%;
  height: 150px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const MealPlanCardBox = styled.div`
  width: 100%;
  display: flex;
`;

export default PlanningPage;
