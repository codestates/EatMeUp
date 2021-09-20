import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import EditFridge from "./EditFridge";
import theme from '../../StyledComponent/theme'


const FridgeInner = ({ foods, showEditBtn, checkedFoods, setCheckedFoods }) => {
  const [list, setList] = useState(foods);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    setList(foods);
  }, [foods]);

  /* check foodbox handler */
  const checkedFoodBox = (e, food) => {
    console.log(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCheckedFoods([...checkedFoods, food]);
    } else if (!e.currentTarget.checked) {
      const deleteCheckedfood = checkedFoods.filter((item) => {
        if (item.food_name !== food.food_name) {
          return item;
        }
      });
      setCheckedFoods(deleteCheckedfood);
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
      setList((oldList) => {
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
      return { color: "white", border: "none", borderRadius: "30px", boxShadow: "none" };
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

  return showEditBtn ? (
    <EditFridge foods={list} />
  ) : (
    <FridgeInnerBox>
      {list.map((type, typeIdx) => {
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
            {type.items.map((food, foodIdx) => {
              return (
                <FoodBox
                  style={
                    dragging
                      ? getStyles({ typeIdx, foodIdx })
                      : { background: "white", borderRadius: "30px" }
                  }

                  draggable
                  key={foodIdx}
                  onDragEnter={
                    dragging
                      ? (e) => handlerDragEnter(e, { typeIdx, foodIdx })
                      : null
                  }
                  onDragStart={(e) => handlerDragStart(e, { typeIdx, foodIdx })}
                  onDragOver={handlerDragOver}
                >


                  {/* <div className='check_box'>
                    <input
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: 1 }
                      }
                      onChange={(e) => checkedFoodBox(e, food)}
                      type='checkbox'
                    />
                  </div> */}
                  <div className='food' draggable={false}>
                    <img
                      src={`../food_img/${food.food_image}`}
                      alt='food'
                      className='food_img'
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: 1 }
                      }
                      draggable={false}
                    />
                    <span className='name'>{food.food_name}</span>
                  </div>
                  <div className='foodlife_box'>
                    <span 
                    style={
                      dragging
                        ? getImgStyle({ typeIdx, foodIdx })
                        : { opacity: 1 }
                    }
                    className='foodlife'>D-{food.life}</span>
                  </div>
                </FoodBox>
              );
            })}
          </FoodContainer>
        );
      })}
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
  justify-content: space-between;
  position: relative;
  margin: 10px auto;
  border: 1px solid ${theme.colors.lightgrey};
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15); */
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

export default FridgeInner;
