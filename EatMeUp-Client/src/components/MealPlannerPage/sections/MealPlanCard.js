import React from "react";
import theme from "../../StyledComponent/theme";
import styled from "styled-components";

const MealPlanCard = () => {
  const mealplan = ["아침", "점심", "저녁"];

  return (
    <>
      {mealplan.map((plan, idx) => {
        return (

          // 아침/점심/저녁 식단짜는 영역
          <PlanCard key={idx}>
            <span>{plan}</span>

            {/* 식단을 직접입력하는 영역 */}
            <AddTodo>
              <div className='input'>
                <input type='text' placeholder='식단을 추가해보세요.' />
              </div>
              <div className='addBtn'>추가</div>
            </AddTodo>

            {/* 입력된 식단을 보여주는 영역 */}
            <Plans>
              <MealPlan>
                <div className="planmeal-img">
                  <img src='https://i.pinimg.com/564x/87/af/02/87af0213242fed2393be9c88816e6be6.jpg' alt='plan' />
                </div>
                <div className='menuname'>꽈리고추무침</div>
              </MealPlan>
            </Plans>
          </PlanCard>
        );
      })}
    </>
  );
};

const PlanCard = styled.div`
  text-align: center;
  min-height: 400px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 10px;
  line-height: 30px;
  font-size: 15px;
  font-weight: bold;
  span {
    padding-top: 15px;
  }
`;

const AddTodo = styled.div`
  width: 95%;
  margin-top: 10px;
  display: flex;
  margin: 5px auto;
  justify-content: center;

  .input {
    width: 75%;
    height: 35px;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid ${theme.colors.lightgrey};
    font-size: 13px;
  }

  .input > input {
    width: 95%;
    height: 30px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .addBtn {
    border-radius: 0px 10px 10px 0px;
    width: 25%;
    height: 35px;
    font-size: 12px;
    background-color: white;
    border: 1px solid ${theme.colors.lightgrey};
    color: ${theme.colors.darkgray};
  }
`;

const MealPlan = styled.div`
  width: 90%;
  height: 45px;
  border-radius: 20px;
  border: 1px solid #F5F3F0;
  margin: 10px auto;
  display: flex;
  align-items: center;

.planmeal-img {
  margin-left: 14px;
  margin-top: 6px;
}

.planmeal-img > img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
  .menuname {
    font-weight: 500;
    font-size: 13px;
    line-height:45px;
    margin-left: 10px;
  }
`;

const Plans = styled.div``;

export default MealPlanCard;
