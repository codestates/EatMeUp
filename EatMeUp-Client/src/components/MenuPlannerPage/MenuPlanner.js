import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Calendar from "./sections/Calendar";
import Weekly from "./sections/Weekly";
import Header from "../Util/Header";

const MenuPlanner = () => {
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
        <ContentBox>
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
        </ContentBox>
      </section>
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
  width: 170px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
  margin-right: 20px;
`;

const CalendarContainer = styled.div`
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export default MenuPlanner;
