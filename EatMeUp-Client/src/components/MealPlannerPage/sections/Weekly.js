import React from "react";
import { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

/* 스타일 컴포넌트 */
import { MiddleBtn } from "../../StyledComponent/buttons";
import theme from "../../StyledComponent/theme";
import styled from "styled-components";

const Weekly = ({ showWeekHandler, showMonthHandler, plans }) => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const thisWeek = today.clone().startOf("week").week();

  const dates = [];

  plans.forEach((plan) => {
    const date = "0" + plan.date.split("-").join("");
    dates.push(date);
  });

  console.log(dates)

  const calendarArr = () => {
    let result = [];

    result = result.concat(
      Array(7)
        .fill(0)
        .map((data, i) => {
          let thisweekDays = today
            .clone()
            .startOf("year")
            .week(thisWeek)
            .startOf("week")
            .add(i, "day");
          for (let i = 0; i < dates.length; i++) {

            console.log(thisweekDays.format("YYYYYMMDD"))
            if (thisweekDays.format("YYYYMMDD") === dates[i]) {
              console.log("true")
              return (
                <WeekCell key={i}>
                  <span>{thisweekDays.format("D")}</span>
                  <div className='_week'>
                    <MealCell>
                      <span>아침</span>
                      {plans[i].mealplanBreakfast.map((plan, idx) => {
                        return <div key={idx}>{plan.title}</div>;
                      })}
                    </MealCell>
                    <MealCell>
                      <span>점심</span>
                      {plans[i].mealplanLunch.map((plan, idx) => {
                        return <div key={idx}>{plan.title}</div>;
                      })}
                    </MealCell>
                    <MealCell>
                      <span>저녁</span>
                      {plans[i].mealplanDinner.map((plan, idx) => {
                        return <div key={idx}>{plan.title}</div>;
                      })}
                    </MealCell>
                  </div>
                </WeekCell>
              );
            }
          }
          // 달력에서 투데이날짜를 표시
          if (moment().format("YYYYMMDD") === thisweekDays.format("YYYYMMDD")) {
            return (
              <WeekCell key={i}>
                <span>{thisweekDays.format("D")}</span>
                <div className='_week'>
                  <MealCell>
                    <span>아침</span>
                  </MealCell>
                  <MealCell>
                    <span>점심</span>
                  </MealCell>
                  <MealCell>
                    <span>저녁</span>
                  </MealCell>
                </div>
              </WeekCell>
            );
          } else {
            return (
              <WeekCell key={i}>
                <span>{thisweekDays.format("D")}</span>
                <div className='_week'>
                  <MealCell>
                    <span>아침</span>
                  </MealCell>
                  <MealCell>
                    <span>점심</span>
                  </MealCell>
                  <MealCell>
                    <span>저녁</span>
                  </MealCell>
                </div>
              </WeekCell>
            );
          }
        }),
    );
    return result;
  };

  return (
    <>
      {/* 식단짜기버튼, 날짜핸들러, 월별/주별버튼 영역 */}
      <CalendarControls>
        <div>
          <Link to='/user/myplanner/create'>
            <CalendarBtn fillColor={theme.colors.lightgrey}>
              <span>식단짜기</span>
            </CalendarBtn>
          </Link>
          <CalendarBtn
            fillColor={theme.colors.yellow}
            id='today'
            onClick={() => {
              setMoment(moment());
            }}
          >
            Today
          </CalendarBtn>
        </div>
        <div>
          <LeftControl
            id='left'
            onClick={() => setMoment(getMoment.clone().subtract(1, "week"))}
          >
            <i className='fas fa-caret-left'></i>
          </LeftControl>
          <ThisMonth id='date'>{today.format("YYYY년 MM월")}</ThisMonth>
          <RightControl
            id='right'
            onClick={() => {
              setMoment(getMoment.clone().add(1, "week"));
            }}
          >
            <i className='fas fa-caret-right'></i>
          </RightControl>
        </div>
        <div>
          <MonthBtn onClick={showMonthHandler}>Month</MonthBtn>
          <WeekBtn onClick={showWeekHandler}>Week</WeekBtn>
        </div>
      </CalendarControls>

      {/* 달력영역 */}
      <div>
        <Table>
          <thead>
            <tr>
              <THead>
                <span className='weekend'>SUN</span>
              </THead>
              <THead>MON</THead>
              <THead>TUE</THead>
              <THead>WED</THead>
              <THead>THU</THead>
              <THead>FRI</THead>
              <THead>SAT</THead>
            </tr>
          </thead>
          <Tbody>
            <tr>{calendarArr()}</tr>
          </Tbody>
        </Table>
      </div>
    </>
  );
};

const CalendarBtn = styled(MiddleBtn)`
  margin-right: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;

  span {
    color: #303030;
  }
`;

const MonthBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 20px 0px 0px 20px;
  background-color: white;
  border: 1px solid #eaeaea;
  font-weight: bold;
  cursor: pointer;
`;

const WeekBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 0px 20px 20px 0px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const ThisMonth = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #303030;
`;

const LeftControl = styled.button`
  background-color: white;
  border: none;
  font-size: 30px;
  margin-right: 8px;
  cursor: pointer;
`;

const RightControl = styled.button`
  background-color: white;
  border: none;
  font-size: 30px;
  margin-left: 8px;
  cursor: pointer;
`;

const CalendarControls = styled.div`
  width: 92%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 93%;
  border-spacing: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const THead = styled.td`
  width: 100px;
  height: 25px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-align: center;

  .weekend {
    color: ${theme.colors.red};
  }
`;

const Tbody = styled.tbody`
  width: 90%;
  margin: 0px 10px;
`;

const WeekCell = styled.td`
  width: calc(100% / 7);
  position: relative;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 20px;
  text-align: center;
`;

const MealCell = styled.div`
  width: 90%;
  min-height: 150px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 10px;
  margin: 1rem auto;

  div {
    font-size: 12px;
    margin-top: 4px;
  }
`;

export default Weekly;
