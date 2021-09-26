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

  // 음식을 냉장고에 추가하는 핸들러
  const submitHandler = () => {};
  const dropHandler = () => {};
  const dataPickerHandler = () => {};
  return (
    <div>
      <BackGroundModal>
        <ModalDialog>
          <div className='closeBtn'>
            <i onClick={closeEditModal} className='fas fa-times'></i>
          </div>
          <form onSubmit={submitHandler}>

            {/* 이미지 업로드 */}
            <Dropzone onDrop={dropHandler} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <DropzoneArea {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div>
                    <i className='bx bxs-camera-plus'></i>
                  </div>
                </DropzoneArea>
              )}
            </Dropzone>
            <FoodInfoBox>
              {/* 음식이름 입력창 */}
              <div className='foodname-box'>
                <span>음식이름 : </span>
                <input type='text' value={food.food_name} />
              </div>

              {/* 구매일자 입력창 */}
              <div className='buydate-box'>
                <span>구매일자 : </span>
                <input onChange={dataPickerHandler} type='date' />
              </div>

              {/* 유통기한 입력창 */}
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
