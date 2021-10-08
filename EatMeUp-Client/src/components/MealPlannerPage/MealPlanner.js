import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMealPlans } from "../../_actions/calendarActions";
import {
  DELETE_MEALPLAN_RESET,
  NEW_MEALPLAN_RESET,
} from "../../_types/calendarTypes";

/* 컴포넌트 */
import Calendar from "./sections/Calendar";
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";
import Loader from "../Util/Loader";

/* 스타일 컴포넌트 */
import { Container, SectionBox } from "../StyledComponent/containers";

const MealPlanner = () => {
  const dispatch = useDispatch();

  const { loading, plans } = useSelector((state) => state.getmealplan);
  const { isAdded } = useSelector((state) => state.mealplan);
  const { isDeletetd } = useSelector((state) => state.deleteplan);

  useEffect(() => {
    dispatch(getMealPlans());

    if (isAdded) {
      dispatch({ type: NEW_MEALPLAN_RESET });
    }

    if (isDeletetd) {
      dispatch({ type: DELETE_MEALPLAN_RESET });
    }
  }, [dispatch, isDeletetd, isAdded]);

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바영역 */}
          <Sidebar id={3} />

          {/* 콘텐츠영역 */}
          {loading ? (
            <Loader />
          ) : (
            <CalendarContainer>
              <TitleBox>
              <div className='title'>Meal Planner</div>
            </TitleBox>
              {/* 월별/주별 핸들러 */}
              <Calendar plans={plans} />
            </CalendarContainer>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
};

const CalendarContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;

  

  @media screen and (max-width: 1035px) {
    width: 88%;
    margin: 7% 0 1% 0;
   
  }

  @media screen and (max-width: 375px) {
    
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 10px 20px;
  padding: 10px;

  @media screen and (max-width: 375px) {
    display: block;
    font-size: 23px;
    text-indent: 10px;
  }
`;

export default MealPlanner;
