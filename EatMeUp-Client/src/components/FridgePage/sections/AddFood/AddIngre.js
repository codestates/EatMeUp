import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { addToFridge } from '../../../../_actions/fridgeActions'

/* 스타일 컴포넌트 */
import {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
} from "../styled/Style";
import { Button } from "../../../StyledComponent/buttons";

const AddIngre = ({ setOpenAddWindow,  }) => {

  const dispatch = useDispatch();

  const [foodname, setFoodname] = useState("");
  const [foodlife, setFoodlife] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  /* function area */
  const closeHandler = () => {
    setOpenAddWindow(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    

    const food = {
      food_image: 'food2.jpeg',
      food_name: foodname,
      life: foodlife,
      frez_type: 2,
      created_at: registerDate,
      update_at: "2021-01-02",
    }

    dispatch(addToFridge(food))
      setOpenAddWindow(false);
   
  };

  const dropHandler = () => {};

  return (
    <>
      <BackGroundModal>
        <ModalDialog>
          <div className='closeBtn'>
            <i onClick={closeHandler} className='fas fa-times'></i>
          </div>
          <form onSubmit={submitHandler}>
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
              <div className='foodname-box'>
                <span>음식이름 : </span>
                <input
                  value={foodname}
                  onChange={(e) => setFoodname(e.currentTarget.value)}
                  type='text'
                  placeholder='음식이름을 입력해주세요.'
                />
              </div>

              <div className='buydate-box'>
                <span>구매일자 : </span>
                <input
                  value={registerDate}
                  onChange={(e) => setRegisterDate(e.currentTarget.value)}
                  type='date'
                />
              </div>

              <div className='foodlife-box'>
                <span>유통기한 : </span>
                <input
                  type='date'
                  value={foodlife}
                  onChange={(e) => setFoodlife(e.currentTarget.value)}
                />
              </div>
            </FoodInfoBox>
            <AddToRefriBtn>
              <Button
                fillColor='#EAEAEA'
                heightSize='30px'
                onClick={submitHandler}
              >
                추가하기
              </Button>
            </AddToRefriBtn>
          </form>
        </ModalDialog>
      </BackGroundModal>
    </>
  );
};

export default AddIngre;
