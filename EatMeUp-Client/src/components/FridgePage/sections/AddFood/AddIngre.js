import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { addToFridge } from "../../../../_actions/fridgeActions";

/* 스타일 컴포넌트 */
import {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
} from "../styled/Style";
import { Button } from "../../../StyledComponent/buttons";

const AddIngre = ({ setOpenAddWindow }) => {
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.allFoods);
  const [foodname, setFoodname] = useState("");
  const [foodlife, setFoodlife] = useState("");
  const [registerDate, setRegisterDate] = useState("");

  const closeHandler = () => {
    setOpenAddWindow(false);
  };
  
  // 음식을 냉장고에 추가하는 핸들러
  const submitHandler = (e) => {
    e.preventDefault();

    const food = {
      food_image: "food2.jpeg",
      food_name: foodname,
      life: 50,
      frez_type: 0,
      created_at: registerDate,
      update_at: "2021-01-02",
    };

    const foodlist = foods.map((item, idx) => {
      if(idx === 0) {
        return {
          type: idx,
          items: [...item.items, food]
        }
      } else {
        return item
      }
    })
    dispatch(addToFridge(foodlist));
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

            {/* 음식사진 업로드 */}
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
              {/* 음식이름입력창 */}
              <div className='foodname-box'>
                <span>음식이름 : </span>
                <input
                  value={foodname}
                  onChange={(e) => setFoodname(e.currentTarget.value)}
                  type='text'
                  placeholder='음식이름을 입력해주세요.'
                />
              </div>

              {/* 구매일자 입력창 */}
              <div className='buydate-box'>
                <span>구매일자 : </span>
                <input
                  value={registerDate}
                  onChange={(e) => setRegisterDate(e.currentTarget.value)}
                  type='date'
                />
              </div>

              {/* 유통기한 입력창 */}
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
