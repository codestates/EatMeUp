import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Calendar from "./sections/Calendar";
import Weekly from "./sections/Weekly";

const TitleArea = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid black;
`;

const MenuPlanner = () => {
  const [showMonth, setShowMonth] = useState(true);

  const showWeekHandler = () => {
    setShowMonth(false);
  };

  const showMonthHandler = () => {
    setShowMonth(true);
  };

  return (
    <div>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
   
        <TitleArea></TitleArea>
        <div style={{ width: "70%", margin: "0.5rem auto", display: "flex", justifyContent: "flex-end"}}>
         <Link to="/user/myplanner/create"><button>식단짜러 가기</button></Link>
        </div>
        
        <div style={{ width: "70%", height: "90%", margin: "2rem auto" }}>
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
        </div>
      </section>
    </div>
  );
};

export default MenuPlanner;
