import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* 컴포넌트 */
import Daily from "./Daily";

/* 스타일 컴포넌트 */
import { MiddleBtn } from "../../StyledComponent/buttons";
import theme from "../../StyledComponent/theme";

function Calendar({ plans }) {
  // 달력 알고리즘 (moment.js를 이용한 달력만들기)
  const [getMoment, setMoment] = useState(moment());
  const [openDaily, setOpenDaily] = useState(false);
  const [getDate, setGetDate] = useState("");
  const [plan, setPlan] = useState("");
  const [date, setDate] = useState([]);

  const openModalHandler = (date, plan) => {
    setOpenDaily(true);
    setGetDate(date);
    setPlan(plan);
  };


  useEffect(() => {
   const getDate = plans && plans.map((plan) => {

      const dates = plan.date.split("-").join("");

      return dates
     
    });

    setDate(getDate)

  }, [plans]);

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
              for (let i = 0; i < date.length; i++) {
                if (days.format("YYYYMMDD") === date[i]) {
                  return (
                    <HasPlanCell
                      key={index}
                      onClick={() =>
                        openModalHandler(days.format("YYYYMMDD"), plans[i])
                      }
                    >
                      <span className='day'>{days.format("D")}</span>
                      <br />
                      {plans[i].mealplanBreakfast.length > 0 ? (
                        <TitleBox>
                          <Img>
                            <img
                              src='../food_img/breakfast.png'
                              alt='breakfast'
                              style={{ width: "25px", height: "25px" }}
                            />
                          </Img>
                          <Title>아침식단</Title>
                        </TitleBox>
                      ) : (
                        ""
                      )}

                      {plans[i].mealplanLunch.length > 0 ? (
                        <TitleBox>
                          <Img>
                            <img
                              src='../food_img/lunch.png'
                              alt='breakfast'
                              style={{ width: "25px", height: "25px" }}
                            />
                          </Img>
                          <Title>점심식단</Title>
                        </TitleBox>
                      ) : (
                        ""
                      )}

                      {plans[i].mealplanDinner.length > 0 ? (
                        <TitleBox>
                          <Img>
                            <img
                              src='../food_img/dinner.png'
                              alt='breakfast'
                              style={{ width: "25px", height: "25px" }}
                            />
                          </Img>
                          <Title>저녁식단</Title>
                        </TitleBox>
                      ) : (
                        ""
                      )}
                    </HasPlanCell>
                  );
                }
              }

              //오늘날짜를 달력에 표시
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <TodayCell
                    key={index}
                    onClick={() =>
                      openModalHandler(moment().format("YYYYMMDD"))
                    }
                  >
                    <span className='day'>{days.format("D")}</span>
                  </TodayCell>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <Cell
                    key={index}
                    onClick={() => openModalHandler(days.format("YYYYMMDD"))}
                  >
                    <span className='day'>{days.format("D")}</span>
                  </Cell>
                );
              } else {
                return (
                  <Cell
                    key={index}
                    onClick={() =>
                      openModalHandler(days.format("YYYYMMDD"), null)
                    }
                  >
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
          <Link to='/user/myplanner/create'>
            <CalendarBtn fillColor={theme.colors.lightgrey}>
              <span>식단 만들기</span>
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
            onClick={() => setMoment(getMoment.clone().subtract(1, "month"))}
          >
            <i className='fas fa-caret-left'></i>
          </LeftControl>
          <ThisMonth>{today.format("YYYY년 MM월")}</ThisMonth>
          <RightControl
            onClick={() => {
              setMoment(getMoment.clone().add(1, "month"));
            }}
          >
            <i className='fas fa-caret-right'></i>
          </RightControl>
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
          <Tbody>{calendarArr()}</Tbody>
        </Table>
      </div>

      {/* 일별 일정보여주는 모달창 핸들러 */}
      {openDaily ? (
        <Daily setOpenDaily={setOpenDaily} getDate={getDate} plan={plan} />
      ) : (
        ""
      )}
    </>
  );
}

const CalendarBtn = styled(MiddleBtn)`
  margin-right: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;

  span {
    color: #303030;
  }
  @media screen and (max-width: 550px) {
    width: 65px;
    height: 34px;
  }

  @media screen and (max-width: 450px) {
    width: 65px;
    height: 30px;
    font-size: 13px;
    margin-top: 20px;
    margin-right: 4px;
    float: right;
  }

  @media screen and (max-width: 375px) {
    width: 70px;
    height: 30px;
    font-size: 12px;
    float: right;
    margin-right: 4px;
   
  }
`;


const ThisMonth = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #303030;


  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;

const LeftControl = styled.button`
  background-color: white;
  border: none;
  font-size: 30px;
  margin-right: 8px;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    font-size: 20px;
    margin-right: 1px;
    margin-left: 5px;
  }
`;

const RightControl = styled.button`
  background-color: white;
  border: none;
  font-size: 30px;
  margin-left: 8px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    font-size: 20px;
    margin-left: 1px;
  }
`;
const CalendarControls = styled.div`
  width: 92%;


  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;

  @media screen and (max-width: 450px) {
    width: 95%;
    height: 55px;
    flex-direction: column-reverse;

  }


`;

const Table = styled.table`
  width: 93%;
  border-spacing: 10px;
  margin: 0 auto;
  margin-bottom: 10px;

  @media screen and (max-width: 450px) {
    border-spacing: 2px;
    width: 95%;
  }

  @media screen and (max-width: 375px) {
    border-spacing: 2px;
    width: 95%;
  }
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
  @media screen and (max-width: 450px) {
    width: 50px;
    height: 20px;
    border-radius: 5px;
    font-size: 10px;
  }

  @media screen and (max-width: 375px) {
    width: 50px;
    height: 20px;
    border-radius: 5px;
    font-size: 10px;
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
  @media screen and (max-width: 775px) {
    width: 65px;
    height: 126px;
    border-radius: 5px;

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 375px) {
    width: 40px;
    height: 100px;
    border-radius: 5px;

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
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
  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }
  @media screen and (max-width: 775px) {
    width: 40px;
    height: 80px;
    border-radius: 5px;

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 375px) {
    width: 40px;
    height: 100px;
    border-radius: 5px;

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

const HasPlanCell = styled.td`
  width: 100px;
  height: 120px;
  border: 2px solid ${theme.colors.yellow};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-align: center;
  position: relative;
  border-spacing: 0;
  .day {
    position: absolute;
    top: 0;
    margin-top: 5px;
    vertical-align: middle;
  }
  &:hover {
    border: 2px solid ${theme.colors.yellow};
  }

  @media screen and (max-width: 775px) {
    width: 65px;
    height: 126px;
    border-radius: 5px;
    border: 2px solid ${theme.colors.yellow};

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 13px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 375px) {
    width: 40px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.yellow};

    .day {
      position: absolute;
      top: 0;
      left: 8px;
      font-size: 10px;
      font-weight: 500;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 15px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media screen and (max-width: 575px) {
    width: 8px;
    height: 8px;
    margin: 3px;
  }
  @media screen and (max-width: 375px) {
    width: 8px;
    height: 8px;
    margin: 3px;
  }
`;

const Title = styled.div`
  margin-left: 7px;
  font-weight: 500;
  font-size: 12px;

  @media screen and (max-width: 875px) {
    display: none;
  }

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export default Calendar;
