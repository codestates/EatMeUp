import React, { useState, useRef } from "react";
import styled from "styled-components";

/* 컴포넌트 */
import EditIngre from "./EditFood/EditIngre";

/* 스타일 컴포넌트 */
import theme from "../../StyledComponent/theme";
import { SmallBtn } from "../../StyledComponent/buttons";

const EditFridge = ({ foods, showEditBtn, setFoods }) => {
  const [openEditWindow, setOpenEditWindow] = useState(false);
  const [clickedFood, setClickedFood] = useState("");
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();
  

  const openEditWindowHandler = (food) => {
    console.log(food);
    setClickedFood(food);
    setOpenEditWindow(true);
  };

  const convertStr = (idx) => {
    if (idx === 0) {
      return "실온";
    } else if (idx === 1) {
      return "냉장";
    } else {
      return "냉동";
    }
  };

  /* drag and drop */
  const handlerDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handlerDragEnter = (e, params) => {
    e.preventDefault();
    const currentItem = dragItem.current;

    if (e.target !== dragNode.current) {
      setFoods((oldList) => {
        // deep deep deep deeply copy list array
        let newList = JSON.parse(JSON.stringify(oldList));

        //manipulate oldlist splice(1, 0, 2)
        newList[params.typeIdx].items.splice(
          params.foodIdx,
          0,
          newList[currentItem.typeIdx].items.splice(currentItem.foodIdx, 1)[0],
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.typeIdx === params.typeIdx &&
      currentItem.foodIdx === params.foodIdx
    ) {
      return {
        color: "white",
        border: "none",
        borderRadius: "30px",
        boxShadow: "none",
      };
    }
    return { backgroundColor: "white", borderRadius: "30px" };
  };

  const getImgStyle = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.typeIdx === params.typeIdx &&
      currentItem.foodIdx === params.foodIdx
    ) {
      return { opacity: 0 };
    }
    return { opacity: 1 };
  };

  return (
    <FridgeInnerBox>
       
      {foods.map((type, typeIdx) => {
        return (
          <FoodContainer
            key={typeIdx}
            onDragEnter={
              dragging && !type.items.length
                ? (e) => handlerDragEnter(e, { typeIdx, foodIdx: 0 })
                : null
            }
            onDragOver={handlerDragOver}
          >
            <FridgeHeader>
              <div className='type_box'>
                <span className='type'>{convertStr(typeIdx)}</span>
              </div>
              <div className='filterBtn_box'>
                <FridgeButton fillColor='white'>
                <i className='far fa-grin-beam'></i> 신선
                </FridgeButton>
                <FridgeButton fillColor='white'>
                  <i className='far fa-smile'></i> 보통
                </FridgeButton>
                <FridgeButton fillColor='white'>
                  <i className='far fa-tired'></i> 위험
                </FridgeButton>
              </div>
            </FridgeHeader>

            {type.items.map((food, foodIdx) => {
              return (
                <FoodBox
                  key={foodIdx}
                  draggable
                  style={
                    dragging
                      ? getStyles({ typeIdx, foodIdx })
                      : { backgroundColor: "white" }
                  }
                  onDragEnter={
                    dragging
                      ? (e) => handlerDragEnter(e, { typeIdx, foodIdx })
                      : null
                  }
                  onDragStart={(e) => handlerDragStart(e, { typeIdx, foodIdx })}
                  onDragOver={handlerDragOver}
                >
                  <div
                    style={
                      dragging
                        ? getImgStyle({ typeIdx, foodIdx })
                        : { opacity: "1" }
                    }
                    className='check_box'
                  >
                    <i
                      className='far fa-edit'
                      onClick={() => openEditWindowHandler(food)}
                    ></i>
                  </div>
                  <div className='food'>
                    <img
                      src={`../food_img/${food.food_image}`}
                      alt='food'
                      draggable={false}
                      className='food_img'
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: "1" }
                      }
                    />
                    <div
                      draggable={false}
                      className='name_box'
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: "1" }
                      }
                    >
                      <div>
                        <span className='name'>{food.food_name}</span>
                      </div>
                      <div>
                        <span className='date'>2021.09.20</span>
                      </div>
                    </div>
                  </div>
                  <div
                    draggable={false}
                    className='foodlife_box'
                    style={
                      dragging
                        ? getImgStyle({ typeIdx, foodIdx })
                        : { opacity: "1" }
                    }
                  >
                    <span className='foodlife'>D-{food.life}</span>
                  </div>
                </FoodBox>
              );
            })}
          </FoodContainer>
        );
      })}

      {openEditWindow ? (
        <EditIngre setOpenEditWindow={setOpenEditWindow} food={clickedFood} />
      ) : (
        ""
      )}
    </FridgeInnerBox>
  );
};

/* 스타일 컴포넌트 css */
const FridgeHeader = styled.div`
  width: 95%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  text-indent: 16px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.lightgrey};
`;

const FridgeButton = styled(SmallBtn)`
  border: 1px solid ${theme.colors.lightgrey};
  margin-right: 8px;
  font-weight: bold;
  i {
    font-size: 18px;
  }
`;

const FridgeInnerBox = styled.div`
  
  width: 1280px;
  min-height: 450px;
  margin: 0 auto;
  display: flex;
  
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const FoodContainer = styled.div`
  width: 400px;
  min-height: 500px;
  border-radius: 20px;
  margin: 0px 10px 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const FoodBox = styled.div`
  width: 88%;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 13px auto;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  
  .check_box {
    position: absolute;
    left: 5px;
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.15);
    text-align: center;
    line-height: 60px;
    color: white;
    font-size: 20px;
    margin-left: 15px;
    border-radius: 30px;
  }

  .food {
    display: flex;
    align-items: center;
    font-size: 17px;
    border-radius: 30px;
    margin: 10px;
  }

  .food_img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 12px;
  }

  .name_box {
    margin-left: 15px;
  }

  .date {
    font-size: 12px;
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
    background-color: #eaeaea;
  }
`;

export default EditFridge;
