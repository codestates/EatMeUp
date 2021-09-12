import React, { useState, useRef } from "react";
import styled from "styled-components";

/* style-component */
const Storage = styled.div`
  min-height: 600px;
  border-radius: 10px;
  background-color: lightgrey;
  opacity: 0.6;
  padding: 5px;
  
`;

const IngredientBox = styled.div`
  max-width: 100%;
  height: 130px;
  border-radius: 8px;
  margin: 0 auto;
  margin: 8px;
  cursor: pointer;
  background-color: white;
  text-align: center;
  line-height: 130px;
`;

const RefrigeInner = ({ data }) => {
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

    if(e.target !== dragNode.current) {

      setList(oldList => {
        // deep deep deep deeply copy list array
        let newList = JSON.parse(JSON.stringify(oldList));
        
        //manipulate oldlist splice(0, 1, 2)
        newList[params.grpI].item.splice(params.itemI, 0, newList[currentItem.grpI].item.splice(currentItem.itemI, 1)[0]);
        dragItem.current = params;
        return newList
      })
    }
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    console.log("dragging end..");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  }


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
      {list.map((group, grpI) => {
        return (
          <Storage 
          onDragEnter={dragging && !group.item.length ? (e) => handlerDragEnter(e, {grpI, itemI: 0}) : null}
          onDragOver={handlerDragOver}
          key={grpI}>
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
                  {item}
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
