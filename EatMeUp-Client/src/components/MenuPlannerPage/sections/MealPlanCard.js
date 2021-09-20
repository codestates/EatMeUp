import React from "react";
import theme from "../../StyledComponent/theme";
import styled from "styled-components";

const MealPlanCard = () => {
  const mealplan = ["아침", "점심", "저녁"];

  return (
    <>
      {mealplan.map((plan, idx) => {
        return (
          <PlanCard key={idx}>
            <span>{plan}</span>
            <AddTodo>
              <div>
                <input type='text' placeholder='식단을 추가해보세요.' />
                <button>추가</button>
              </div>
            </AddTodo>
            <Plans></Plans>
          </PlanCard>
        );
      })}
    </>
  );
};

const PlanCard = styled.div`
  text-align: center;
  width: calc(90% / 3);
  min-height: 400px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 10px;
  margin: 10px auto;
  line-height: 30px;
  font-size: 15px;
  font-weight: bold;
  span{
    padding-top: 15px;
  }
`;

const AddTodo = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  input {
    width: 70%;
    height: 35px;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid ${theme.colors.lightgrey};
    font-size: 13px;
  }

  input:focus {
    outline: none;
  }

  button {
    border-radius: 0px 10px 10px 0px;
    width: 20%;
    height: 34px;
    border: none;
    background-color: white;
    border: 1px solid  ${theme.colors.lightgrey};
    color: ${theme.colors.darkgray}
  }
`;

const Plans = styled.div``;

export default MealPlanCard;
