import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Calendar from "./sections/Calendar";
import Weekly from "./sections/Weekly";
import Header from "../Util/Header";
import Footer from '../Util/Footer'

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
          <Link to="/user/myrecipe"><Sidebar>Home</Sidebar></Link>
         
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

const CalendarContainer = styled(SectionBox)`
  width: 100%;
`;

export default MealPlanner;
