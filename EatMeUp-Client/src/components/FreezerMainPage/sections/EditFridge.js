import React, { useState } from "react";
import EditIngre from './EditFood/EditIngre'
const EditFridge = ({ foods }) => {

  const [openEditWindow, setOpenEditWindow] = useState(false)
  const [clickedFood, setClickedFood] = useState("")
  const openEditWindowHandler = (food) => {
    console.log(food)
    setClickedFood(food)
    setOpenEditWindow(true)
  }

  return (
    <div className='fridgeInner_box'>
      {foods.map((type, typeIdx) => {
        return (
          <div className='food_container' key={typeIdx}>
            {type.items.map((food, foodIdx) => {
              return (
                <div className='food_box' key={foodIdx}>
                  {/* <i 
                  className='far fa-edit'
                  onClick={() => openEditWindowHandler(food)}
                  ></i> */}
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
                </div>
              );
            })}
          </div>
        );
      })}

      {openEditWindow ? <EditIngre setOpenEditWindow={setOpenEditWindow} food={clickedFood} /> : ""}
    </div>
  );
};

export default EditFridge;
