import React, { useState } from "react";
import styled from "styled-components";

/* 컴포넌트 */
import Calendar from "./sections/Calendar";
import Weekly from "./sections/Weekly";
import Header from "../Util/Header";
import Footer from '../Util/Footer'
import Sidebar from '../Util/Sidebar'

/* 스타일 컴포넌트 */
import { Container, SectionBox } from '../StyledComponent/containers'

const MealPlanner = () => {
  const [showMonth, setShowMonth] = useState(true);

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
          <Sidebar id={3} />
        
          <CalendarContainer>
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
