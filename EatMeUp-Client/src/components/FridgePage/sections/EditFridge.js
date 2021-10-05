import React, { useState, useRef } from "react";
import styled from "styled-components";

/* 컴포넌트 */
import EditIngre from "./EditFood/EditIngre";
import { foodLife } from './utils/convertDate'

/* 스타일 컴포넌트 */
import theme from "../../StyledComponent/theme";
import { SmallBtn } from "../../StyledComponent/buttons";

const EditFridge = ({
  foods,
  foodList,
  showEditBtn,
  setFoodList,
  setShowEditBtn,
}) => {
  const [openEditWindow, setOpenEditWindow] = useState(false);
  const [clickedFood, setClickedFood] = useState("");

  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  //수정 모달창 띄우기 핸들러
  const openEditWindowHandler = (food) => {
    setClickedFood(food);
    setOpenEditWindow(true);
  };

  // 냉장고 타입 핸들러
  const convertStr = (idx) => {
    if (idx === 0) {
      return "실온";
    } else if (idx === 1) {
      return "냉장";
    } else {
      return "냉동";
    }
  };

  const sliceHandler = (date) => {
    const createAt = date.slice(0, 10);
    const Y = createAt.slice(0, 4);
    const M = createAt.slice(5, 7);
    const D = createAt.slice(8, 10);
    return `${Y}.${M}.${D}`;
  };

  /* drag and drop 구현 코드*/
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
      setFoodList((oldList) => {
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

  const calculatorLife = (life) => {

    if(Number(foodLife(life)) < 0) {
      return Math.abs(foodLife(life))
    }

    if(Number(foodLife(life)) === 0) {
      return "day"
    }

    return foodLife(life)
    
  }

  return (
    <FridgeInnerBox>
      {foodList.map((type, typeIdx) => {
        return (
          // 드랍영역
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
            <FoodBoxs>
              {type.items.map((food, foodIdx) => {
                return (
                  //냉장고 음식 박스 (drag하는 target)
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
                    onDragStart={(e) =>
                      handlerDragStart(e, { typeIdx, foodIdx })
                    }
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
                      {/* 음식사진 */}
                      <img
                        src={
                          food.food_image
                            ? food.food_image
                            : "https://i.pinimg.com/564x/a3/0e/52/a30e52be190e852a878670983753c066.jpg"
                        }
                        alt='food'
                        draggable={false}
                        className='food_img'
                        style={
                          dragging
                            ? getImgStyle({ typeIdx, foodIdx })
                            : { opacity: "1" }
                        }
                      />

                      {/* 음식이름 */}
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

                        {/* 구매일자 */}
                        <div>
                          <span className='date'>
                            {sliceHandler(food.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 남은 유통기한 */}
                    <div
                      draggable={false}
                      className='foodlife_box'
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: "1" }
                      }
                    >
                      {Number(foodLife(food.life)) < 0 ? (
                        <span className='red'>D+{calculatorLife(food.life)}</span>
                      ) : (
                        <span className='foodlife'>D-{calculatorLife(food.life)}</span>
                      )}
                    </div>
                  </FoodBox>
                );
              })}
            </FoodBoxs>
          </FoodContainer>
        );
      })}

      {openEditWindow ? (
        <EditIngre
          setOpenEditWindow={setOpenEditWindow}
          foods={foods}
          food={clickedFood}
          setShowEditBtn={setShowEditBtn}
          setFoodList={setFoodList}
        />
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

  .type {
    cursor: pointer;
  }
  @media screen and (max-width: 1300px) {
    .type {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 1227px) {
    width: 95%;
    margin: 10px;

    .type {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    margin: 10px;

    .type {
      font-size: 17px;
    }
  }
`;

const FridgeButton = styled(SmallBtn)`
  border: 1px solid ${theme.colors.lightgrey};
  margin-right: 8px;
  font-weight: bold;
  cursor: pointer;
  i {
    font-size: 18px;
  }

  &:hover {
    background-color: #febd2f;
  }

  &:active,
  :focus {
    background-color: #febd2f;
  }
`;

const FridgeInnerBox = styled.div`
  width: 100%;
  min-height: 450px;
  margin: 0 auto;
  display: flex;

  @media screen and (max-width: 1500px) {
    width: 100%;
  }

  @media screen and (max-width: 1227px) {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    display: block;
    width: 100%;
  }
`;

const FoodContainer = styled.div`
  width: calc(100% / 3);
  min-height: 500px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media screen and (max-width: 1227px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: 5px auto;
    min-height: 250px;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 5px;
    min-height: 250px;
  }
`;

const FoodBoxs = styled.div`
  display: block;

  @media screen and (max-width: 1227px) {
    width: 90%;
    display: flex;
    overflow: auto;
  }

  @media screen and (max-width: 375px) {
    width: 345px;
    display: flex;
    overflow: auto;
  }
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
  cursor: pointer;

  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }

  .alert {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 20px;
    color: red;
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
    border: 1px solid ${theme.colors.lightgrey};
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

 
  .check_box {
    position: absolute;
    left: 7px;
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

  .red {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #fe8f8f;
    color: white;
  }
}

@media screen and (max-width: 1500px) {
  width: 88%;
  height: 80px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 13px auto;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.lightgrey};
  }

  .alert {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 20px;
    color: red;
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
    border: 1px solid ${theme.colors.lightgrey};
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


  .red {
    padding: 8px 15px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #fe8f8f;
    color: white;
  }
}


  @media screen and (max-width: 1227px) {
    
    display: block;
    min-width: 100px;
    max-width: 100px;
    height: 150px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    .food {
      display: block;
      text-align: center;
      font-size: 14px;
      border-radius: 30px;
      margin: 0 auto;
    }

    .food_img {
      width: 60px;
      height: 60px;
      margin: 0;
      margin-top: 10px;
      object-fit: contain;
      border-radius: 50%;
      border: 1px solid ${theme.colors.lightgrey};
    }

    .name_box {
      margin-left: 0;
    }

    .date {
      font-size: 10px;
    }

    .foodlife_box {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      line-height: 10px;
    }

    .foodlife {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #eaeaea;
    }


 
  .check_box {
    position: absolute;
    left: 7px;

    top: 10px;
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
    .red {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #fe8f8f;
      color: white;
    }
    .alert {
      left: 18px;
    }

  }

  @media screen and (max-width: 375px) {
    display: block;
    min-width: 100px;
    max-width: 100px;
    height: 150px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    .food {
      display: block;
      text-align: center;
      font-size: 14px;
      border-radius: 30px;
      margin: 0 auto;
    }

    .food_img {
      width: 60px;
      height: 60px;
      margin: 0;
      margin-top: 10px;
      object-fit: contain;
      border-radius: 50%;
      border: 1px solid ${theme.colors.lightgrey};
    }

    .name_box {
      margin-left: 0;
    }

    .date {
      font-size: 12px;
    }

    .foodlife_box {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      line-height: 10px;
    }

    .foodlife {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #eaeaea;
    }

    .red {
      padding: 3px 15px;
      border-radius: 30px;
      font-size: 12px;
      background-color: #fe8f8f;
      color: white;
    }
    .alert {
      left: 18px;
    }
  }
`;

export default EditFridge;
