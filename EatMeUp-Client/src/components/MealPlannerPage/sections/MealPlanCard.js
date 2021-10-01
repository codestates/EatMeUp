import React, { useEffect, useState } from "react";
import theme from "../../StyledComponent/theme";
import styled from "styled-components";

const MealPlanCard = ({ addToPlan }) => {
  const mealplan = ["아침", "점심", "저녁"];

  const [mealPlan, setMealPlan] = useState([
    { id: 0, meal: "아침", plan: [] },
    { id: 1, meal: "점심", plan: [] },
    { id: 2, meal: "저녁", plan: [] },
  ]);

  useEffect(() => {
    const arr = mealPlan.map((plan, idx) => {
      if (addToPlan.id === plan.id) {
        return {
          id: plan.id,
          meal: plan.meal,
          plan: [...plan.plan, addToPlan],
        };
      }

      return plan;
    });

    setMealPlan(arr);
  }, [addToPlan]);

  const deleteHandler = (planIdx, itemIdx) => {
    console.log(planIdx, itemIdx)
    const deleted = mealPlan.map(plan => {

      if(plan.id === planIdx) {
        const itemDeleted = plan.plan.filter((item, idx) => {
          if(idx !== itemIdx) {
            return item
          } 
          return "";
        })
        return {
          id: planIdx,
          meal: plan.meal,
          plan: itemDeleted
      }
    }
      return plan

    })
    setMealPlan(deleted)
  }

  
  return (
    <>
      {mealPlan.map((plan, planIdx) => {
        return (
          // 아침/점심/저녁 식단짜는 영역
          <PlanCard key={planIdx}>
            <span>{plan.meal}</span>

            {/* 입력된 식단을 보여주는 영역 */}
            <Plans>
              {plan.plan.map((item, itemIdx) => {
                return (
                  <MealPlan key={itemIdx}>
                    <div>
                      <div className='planmeal-img'>
                        <img src={item.image} alt='plan' />
                      </div>
                      <div className='menuname'>{item.title}</div>
                    </div>
                    <div>
                      <i className='far fa-times-circle' onClick={() => deleteHandler(planIdx, itemIdx)}></i>
                    </div>
                  </MealPlan>
                );
              })}
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
  border-radius: 30px;
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
    border-radius: 20px 0px 0px 20px;
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
    border-radius: 0px 20px 20px 0px;
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
  border: 1px solid #f5f3f0;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }

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
    line-height: 45px;
    margin-left: 10px;
  }

  .fa-times-circle {
    margin-right: 10px;
    color: grey;
    font-size: 16px;
    cursor: pointer;
  }
`;

const Plans = styled.div``;

export default MealPlanCard;
