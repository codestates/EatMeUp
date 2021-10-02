import React from "react";
import styled from "styled-components";
import { BackGroundModal, ModalDialog } from "../styled/Style";
import { SectionBox } from "../../StyledComponent/containers";
const { Swal } = window;

const Daily = ({ setOpenDaily, getDate, plan }) => {
  /* function area */

  const getPlan = [
    {
      id: "아침",
      icon: "breakfast.png",
      meal: plan ? plan.mealplanBreakfast : [],
    },
    { id: "점심", icon: "lunch.png", meal: plan ? plan.mealplanLunch : [] },
    { id: "저녁", icon: "dinner.png", meal: plan ? plan.mealplanDinner : [] },
  ];

  const deletetHandler = () => {
    setOpenDaily(true);
    Swal.fire({
      title: "Delete",
      text: "레시피를 삭제 하시겠습니까?",
      icon: "warning",
      showCancleButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제하기",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleded");
        setOpenDaily(false);
      }
    });
  };

  const closeModalHandler = () => {
    setOpenDaily(false);
  };

  const date = `${getDate.slice(0, 4)}.${getDate.slice(4, 6)}.${getDate.slice(
    6,
    8,
  )}`;

  return (
    <>
      <BackGroundModal>
        <ModalDialog onClick={closeModalHandler}>
          <Date>
            {date}
            <i class='far fa-trash-alt' onClick={deletetHandler}></i>
          </Date>
          {/* flex box */}
          <MealPlanBox>
            {getPlan.map((data, idx) => {
              return (
                <MealPlanCard key={idx}>
                  <TitleBox>
                    <Title>
                      <div>
                        <img
                          src={`../food_img/${data.icon}`}
                          alt='icon'
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div>{data.id}</div>
                    </Title>
                  </TitleBox>
                  <PlansBox>
                    {data.meal.map((card, idx) => {
                      return (
                        <PlanCard key={idx}>
                          <Img>
                            <img src={card.main_image} alt='lunch' />
                          </Img>
                          <SubTitle>{card.title}</SubTitle>
                          <ShowRecipe>
                            <i className='fas fa-sign-out-alt'></i>
                          </ShowRecipe>
                        </PlanCard>
                      );
                    })}
                  </PlansBox>
                </MealPlanCard>
              );
            })}
          </MealPlanBox>
        </ModalDialog>
      </BackGroundModal>
    </>
  );
};

const Date = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 40px;
  font-weight: bold;

  i {
    margin-left: 10px;
    font-size: 22px;
    cursor: pointer;
  }
`;

const MealPlanBox = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
`;

const MealPlanCard = styled(SectionBox)`
  width: 30%;
  height: 380px;
  margin: 10px auto;
  text-align: center;
  line-height: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

const Img = styled.div`
  width: 45px;
  height:45px;
  margin-left: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
`;

const Title = styled.div`
  margin-left: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  div > img {
    margin-right: 5px;
  }
`;
const PlansBox = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
`;

const PlanCard = styled.div`
  width: 90%;
  margin: 5px auto;
  border: 1px solid grey;
  border-radius: 20px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;

  &:hover .fa-sign-out-alt {
    opacity: 1;
  }
`;
const SubTitle = styled.div`
  font-size: 13px;
`;
const ShowRecipe = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: grey;

  i {
    cursor: pointer;
    opacity: 0;
  }
`;
export default Daily;
