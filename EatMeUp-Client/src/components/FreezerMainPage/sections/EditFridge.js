import React, { useState } from "react";
import EditIngre from './EditFood/EditIngre'
import styled from 'styled-components'

const EditFridge = ({ foods }) => {

  const [openEditWindow, setOpenEditWindow] = useState(false)
  const [clickedFood, setClickedFood] = useState("")
  const openEditWindowHandler = (food) => {
    console.log(food)
    setClickedFood(food)
    setOpenEditWindow(true)
  }

  return (
    <FridgeInnerBox>
      {foods.map((type, typeIdx) => {
        return (
          <FoodContainer
          key={typeIdx}>
            {type.items.map((food, foodIdx) => {
              return (
                <FoodBox key={foodIdx}>
                  <div className='check_box'>
                  <i 
                  className='far fa-edit'
                  onClick={() => openEditWindowHandler(food)}
                  ></i>
                  </div>
                  <div className='food'>
                    <img
                      src={`../food_img/${food.food_image}`}
                      alt='food'
                      className='food_img'
                    />
                    <span className='name'>{food.food_name}</span>
                  </div>
                  <div className='foodlife_box'>
                    <span className='foodlife'>D-{food.life}</span>
                  </div>
                </FoodBox>
              );
            })}
          </FoodContainer>
        );
      })}

      {openEditWindow ? <EditIngre setOpenEditWindow={setOpenEditWindow} food={clickedFood} /> : ""}
    </FridgeInnerBox>
  );
};

const FridgeInnerBox = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 5px auto;
  display: flex;
`;

const FoodContainer = styled.div`
  width: 400px;
  min-height: 500px;
  border-radius: 0px 0px 20px 20px;
  margin: 0px 10px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const FoodBox = styled.div`
  width: 350px;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  position: relative;
  margin: 10px auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  font-weight: 500;

  .check_box {
    width: 15%;
    text-align: center;
    line-height: 80px;
    padding: 5px auto;
    border-radius: 30px;
  }

  .food {
    width: 60%;
    display: flex;
    align-items: center;
    font-size: 17px;
    border-radius: 30px;
  }

  .food_img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    border-radius: 50%;
  }

  .foodlife_box {
    width: 25%;
    text-align: center;
    line-height: 80px;
    margin-right: 10px;
  }

  .foodlife {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color:#EAEAEA
   
  }
`;

export default EditFridge;
