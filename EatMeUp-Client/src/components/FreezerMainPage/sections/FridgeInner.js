import React, { useState, useRef, useEffect } from "react";
import EditFridge from "./EditFridge";

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
    console.log(e.currentTarget.checked)
    if(e.currentTarget.checked) {
      setCheckedFoods([...checkedFoods, food])
    } else if (!e.currentTarget.checked) {
      const deleteCheckedfood = checkedFoods.filter((item) => {
        if(item.food_name !== food.food_name ) {
          return item
        }
      })  
      setCheckedFoods(deleteCheckedfood)
    }
  }

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
      return { color: "white", border: "none" };
    }
    return { backgroundColor: "white" };
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
    <div className='fridgeInner_box'>
      {list.map((type, typeIdx) => {
        return (
          <div
            key={typeIdx}
            className='food_container'
            onDragEnter={
              dragging && !type.items.length
                ? (e) => handlerDragEnter(e, { typeIdx, foodIdx: 0 })
                : null
            }
            onDragOver={handlerDragOver}
          >
            {type.items.map((food, foodIdx) => {
              return (
                <div
                  className='food_box'
                  style={
                    dragging
                      ? getStyles({ typeIdx, foodIdx })
                      : { backgroundColor: "white" }
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
                  <div className='check_box'>
                    <input
                      style={
                        dragging
                          ? getImgStyle({ typeIdx, foodIdx })
                          : { opacity: 1 }
                      }
                      onChange={(e) => checkedFoodBox(e, food)}
                      type='checkbox'
                    />
                  </div>
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
                    <span className='foodlife'>D-{food.life}</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FridgeInner;
