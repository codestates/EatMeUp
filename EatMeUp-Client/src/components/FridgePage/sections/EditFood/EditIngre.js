import React from "react";
import Dropzone from "react-dropzone";
import {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
} from "../styled/Style";

import { Button } from "../../../StyledComponent/buttons";

const EditIngre = ({ setOpenEditWindow, food }) => {
  /* function area */
  const closeEditModal = (e) => {
    e.preventDefault();
    setOpenEditWindow(false);
  };

  const submitHandler = () => {};
  const dropHandler = () => {};
  const dataPickerHandler = () => {};
  return (
    <div>
      <BackGroundModal onClick={closeEditModal}>
        <ModalDialog>
          <div className='closeBtn'>
            <i onClick={closeEditModal} class='fas fa-times'></i>
          </div>
          <form onSubmit={submitHandler}>
            <Dropzone onDrop={dropHandler} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <DropzoneArea {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div>
                    <i class='bx bxs-camera-plus'></i>
                  </div>
                </DropzoneArea>
              )}
            </Dropzone>
            <FoodInfoBox>
              <div className='foodname-box'>
                <span>음식이름 : </span>
                <input type='text' value={food.food_name} />
              </div>

              <div className='buydate-box'>
                <span>구매일자 : </span>
                <input onChange={dataPickerHandler} type='date' />
              </div>

              <div className='foodlife-box'>
                <span>유통기한 : </span>
                <input type='date' onChange={dataPickerHandler} />
              </div>
            </FoodInfoBox>
            <AddToRefriBtn>
              <Button fillColor='lightgrey' onClick={submitHandler}>
                수정하기
              </Button>
            </AddToRefriBtn>
          </form>
        </ModalDialog>
      </BackGroundModal>
    </div>
  );
};

export default EditIngre;
