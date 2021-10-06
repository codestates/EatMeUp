import React, { useEffect } from "react";
import styled from "styled-components";

const MealPlanCard = ({ addToPlan, mealPlan, setMealPlan }) => {
  useEffect(() => {
    const arr = mealPlan.map((plan, idx) => {
      if (addToPlan.mealId === plan.id) {
        return {
          id: plan.id,
          meal: plan.meal,
          plan: [...plan.plan, addToPlan],
          recipeId: [...plan.recipeId, addToPlan.recipeId],
        };
      }

      return plan;
    });

    setMealPlan(arr);
  }, [addToPlan]);

  const deleteHandler = (planIdx, itemIdx) => {
    console.log(planIdx, itemIdx);
    const deleted = mealPlan.map((plan) => {
      if (plan.id === planIdx) {
        const itemDeleted = plan.plan.filter((item, idx) => {
          if (idx !== itemIdx) {
            return item;
          }
          return "";
        });
        return {
          id: planIdx,
          meal: plan.meal,
          plan: itemDeleted,
        };
      }
      return plan;
    });
    setMealPlan(deleted);
  };

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
                      <i
                        className='far fa-times-circle'
                        onClick={() => deleteHandler(planIdx, itemIdx)}
                      ></i>
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
  @media screen and (max-width: 1300px) {
    width: 95%;
    min-height: 200px;
   
  }

  @media screen and (max-width: 375px) {
    margin: 5px auto;
    min-width: 97%;
    max-height: 250px;
    overflow-x: scroll;
  }
`;

const Plans = styled.div`
  @media screen and (max-width: 1300px) {
    display: flex;
    max-width: 430px;
    overflow-x: scroll;
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
  @media screen and (max-width: 1300px) {
    display: block;
    min-width: 100px;

    max-width: 100px;
    min-height: 150px;
    margin: 6px 5px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    div {
      display: block;
    }

    .planmeal-img > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .planmeal-img {
      margin: 20px 0px 0px 0px;
    }

    .menuname {
      margin: 10px 0px 0px 0px;
      line-height: 10px;
    }

    .fa-times-circle {
      margin: 20px 0px 0px 0px;
    }
  }
`;

export default MealPlanCard;
