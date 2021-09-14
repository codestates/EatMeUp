import React, { useState } from "react";
import styled from "styled-components";
import EditIngre from "./EditIngre/EditIngre";


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
    background-color: #c7b69d;
    padding: 5px 13px 5px 13px;
    position: absolute;
  }

  .fa-edit {
    margin-left: 70px;
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

const EditRefrige = ({ list }) => {
  /* function area */

  const [openEditWindow, setOpenEditWindow] = useState(false);

  const openEditWindowHandler = () => {
    setOpenEditWindow(true);
  };

  return (
    <>
      {list.map((group, grpI) => {
        return (
          <Storage key={grpI}>
            {group.item.map((item, itemI) => {
              return (
                <IngredientBox key={itemI}>
                  <img
                    className='foodImg'
                    draggable={false}
                    src={`../../food_img/${item}`}
                    alt='food'
                  />
                  <span className='life-date'>D-3</span>
                  <span className='foodName'>{item}</span>
                  <i
                    className='far fa-edit'
                    onClick={openEditWindowHandler}
                  ></i>
                </IngredientBox>
              );
            })}
              {openEditWindow ? <EditIngre setOpenEditIngre={setOpenEditWindow} /> : ""}
          </Storage>
      
        );
      })}
    </>
  );
};

export default EditRefrige;
