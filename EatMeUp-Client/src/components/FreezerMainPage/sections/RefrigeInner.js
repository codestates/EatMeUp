import React, { useState, useRef } from "react";
import styled from "styled-components";
import EditRefrige from "./EditRefrige"

/* style-component */
const Storage = styled.div`
  min-height: 300px;
  border-radius: 10px;
  background-color: lightgrey;
  padding: 5px;
`;

const IngredientBox = styled.div`
  max-width: 100%;
  height: 100px;
  border-radius: 8px;
  margin: 0 auto;
  margin: 8px;
  cursor: pointer;
  background-color: white;
  position: relative;

  .foodImg {
    width: 100px; 
    height: 60px;
    border: 1px solid black;
    margin: 20px 8px 0px 10px; /* 상 우 하 좌*/
  }

  
  .life-date {
    background-color: #C7B69D;
    padding: 5px 13px 5px 13px;
    position: absolute;
  }


  @media only screen and (max-width: 1000px) {
     
      .foodImg {
        display: none;
      }

      .foodName {
        margin-left: 20px;
        line-height: 100px;
      }
      
      
    
    }
  @media only screen and (max-width: 768px) {
      border: 1px solid pink;
      
      .foodImg {
        display: none;
      }

      .foodName {
        margin-left: 20px;
      }
      
      .life-date {
        display: none;
      }
    
    }
`;


/* 냉장고 속 재료 정리 drag & drop 구현 */
const RefrigeInner = ({ data,  showEditBtn}) => {
  /* function area */

  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

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
        newList[params.grpI].item.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].item.splice(currentItem.itemI, 1)[0],
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
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return { color: "lightgrey", backgroundColor: "lightgrey" };
    }
    return { backgroundColor: "white" };
  };

  return (
    <>
      {/* store at room temperature */}
      {showEditBtn ? <EditRefrige list={list} /> : 
      list.map((group, grpI) => {
        return (
          <Storage
            onDragEnter={
              dragging && !group.item.length
                ? (e) => handlerDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            onDragOver={handlerDragOver}
            key={grpI}
          >
            {group.item.map((item, itemI) => {
              return (
                <IngredientBox
                  style={
                    dragging
                      ? getStyles({ grpI, itemI })
                      : { backgroundColor: "white" }
                  }
                  draggable
                  key={itemI}
                  onDragEnter={
                    dragging
                      ? (e) => handlerDragEnter(e, { grpI, itemI })
                      : null
                  }
                  onDragStart={(e) => handlerDragStart(e, { grpI, itemI })}
                  onDragOver={handlerDragOver}
                >
                  <img
                    className="foodImg"
                    draggable={false}
                    src={`../../food_img/${item}`}
                    alt='food'
                  />
                  <span className="life-date">D-3</span>
                  <span className="foodName">{item}</span>
                
                </IngredientBox>
              );
            })}
          </Storage>
        );
      })}
    </>
  );
};

export default RefrigeInner;
