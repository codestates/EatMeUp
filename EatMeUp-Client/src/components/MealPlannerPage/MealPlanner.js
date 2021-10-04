import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMealPlans } from "../../_actions/calendarActions";

/* 컴포넌트 */
import Calendar from "./sections/Calendar";
import Weekly from "./sections/Weekly";
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";

/* 스타일 컴포넌트 */
import { Container, SectionBox } from "../StyledComponent/containers";

const MealPlanner = () => {

  const dispatch = useDispatch();
  /* 월별/주별 핸들러 */
  const [showMonth, setShowMonth] = useState(true);

  useEffect(() => {
    
    dispatch(getMealPlans())
  }, [dispatch])
  const showWeekHandler = () => {
    setShowMonth(false);
  };

  const showMonthHandler = () => {
    setShowMonth(true);
  };

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바영역 */}
          <Sidebar id={3} />

          {/* 콘텐츠영역 */}
          <CalendarContainer>
            {/* 월별/주별 핸들러 */}
            {showMonth ? (
              <Calendar
                showWeekHandler={showWeekHandler}
                showMonthHandler={showMonthHandler}
              />
            ) : (
              <Weekly
                showWeekHandler={showWeekHandler}
                showMonthHandler={showMonthHandler}
              />
            )}
          </CalendarContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};

const CalendarContainer = styled(SectionBox)`
  width: 77%;
`;

export default MealPlanner;
