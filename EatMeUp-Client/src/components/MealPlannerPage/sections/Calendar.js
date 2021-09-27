import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { MiddleBtn } from "../../StyledComponent/buttons";
import theme from "../../StyledComponent/theme";
import styled from "styled-components";
import Daily from './Daily'


function Calendar({ showWeekHandler, showMonthHandler }) {
  
  // 달력 알고리즘 (moment.js를 이용한 달력만들기)
  const [getMoment, setMoment] = useState(moment());
  const [openDaily, setOpenDaily] = useState(false)
  const openModalHandler = () => {
    setOpenDaily(true)
  }
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result = [];

    for (let week = firstWeek; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              
              //오늘날짜를 달력에 표시
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <TodayCell key={index} onClick={openModalHandler}>
                    <span className='day'>{days.format("D")}</span>
                  </TodayCell>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <Cell key={index} onClick={openModalHandler}>
                    <span className='day'>{days.format("D")}</span>
                  </Cell>
                );
              } else {
                return (
                  <Cell key={index} onClick={openModalHandler}>
                    <span className='day'>{days.format("D")}</span>
                  </Cell>
                );
              }
            })}
        </tr>,
      );
    }
    return result;
  };

  return (
    <>
      {/* 식단짜기버튼, 날짜핸들러, 월별/주별버튼 영역 */}
      <CalendarControls>
        <div>
          <Link to="/user/myplanner/create"><CalendarBtn fillColor={theme.colors.lightgrey}><span>식단짜기</span></CalendarBtn></Link>
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
          
            onClick={() => setMoment(getMoment.clone().subtract(1, "month"))}
          >
            <i class="fas fa-caret-left"></i>
          </LeftControl>
          <ThisMonth>{today.format("YYYY년 MM월")}</ThisMonth>
          <RightControl
           
            onClick={() => {
              setMoment(getMoment.clone().add(1, "month"));
            }}
          >
            <i class="fas fa-caret-right"></i>
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
              <THead><span className="weekend">SUN</span></THead>
              <THead>MON</THead>
              <THead>TUE</THead>
              <THead>WED</THead>
              <THead>THU</THead>
              <THead>FRI</THead>
              <THead>SAT</THead>
            </tr>
          </thead>
          <Tbody>{calendarArr()}</Tbody>
        </Table>
      </div>

      {/* 일별 일정보여주는 모달창 핸들러 */}
      {openDaily ? <Daily setOpenDaily={setOpenDaily} /> : ""}
    </>
  );
}

const CalendarBtn = styled(MiddleBtn)`
  margin-right: 8px;
  color: white;
  cursor : pointer;
  font-weight: bold;

  span {
    color: #303030;
  }
`;

const MonthBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 30px 0px 0px 30px;
  border: none;
  font-weight: bold;
  cursor : pointer;

`;

const WeekBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 0px 30px 30px 0px;
  border: none;
  background-color: white;
  border: 1px solid #eaeaea;
  font-weight: bold;
  cursor : pointer;

`;

const ThisMonth = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #303030;
`;

const LeftControl = styled.button`
  background-color: white;
  border:none;
  font-size: 30px;
  margin-right: 8px;
  cursor : pointer;
`;

const RightControl = styled.button`
  background-color: white;
  border: none;
  font-size: 30px;
  margin-left: 8px;
  cursor : pointer;

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
    color: ${theme.colors.red}
  }
`;


const Tbody = styled.tbody`
  width: 90%;
  margin: 0px 10px;

`;


const Cell = styled.td`
  width: 100px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }
  .day {
    position: absolute;
    top: 0;
    margin-top: 5px;
  }

`;



const TodayCell = styled.td`
  width: 100px;
  height: 120px;
  background: ${theme.colors.lightgrey};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-align: center;
  position: relative;

  .day {
    position: absolute;
    top: 0;
    margin-top: 5px;
  }

`;


export default Calendar;
