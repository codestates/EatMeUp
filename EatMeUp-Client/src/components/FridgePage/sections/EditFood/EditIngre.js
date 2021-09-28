import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { deleteFood, editFood } from "../../../../_actions/fridgeActions";

/* 스타일 컴포넌트 */
import {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
} from "../styled/Style";
import { Button } from "../../../StyledComponent/buttons";
import theme from "../../../StyledComponent/theme";

const EditIngre = ({ setOpenEditWindow, food, setShowEditBtn }) => {
  const { id, food_name, food_image, food_life, createdAt, frez_type } = food;
  const creatAt = createdAt.slice(0, 10);

  const dispatch = useDispatch();
  const [foodname, setFoodname] = useState(food_name);
  const [life, setlife] = useState("");
  const [boughtDate, setboughtDate] = useState("");

  const closeEditModal = (e) => {
    e.preventDefault();
    setOpenEditWindow(false);
  };

  // 음식을 냉장고에 추가하는 핸들러
  const submitHandler = () => {
    const data = {
      food_name: foodname,
      frez_type: frez_type,
      food_life: life,
      food_image: "food2.jpeg",
      created_at: boughtDate,
      update_at: "2021-01-02",
    };

    dispatch(editFood(id, data));

    setOpenEditWindow(false);
  };

  const deleteHandler = () => {
    dispatch(deleteFood(id));
    setOpenEditWindow(false);
    setShowEditBtn(false);
  };
  const dropHandler = () => {};

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
                <input
                  type='text'
                  value={foodname}
                  onChange={(e) => setFoodname(e.currentTarget.value)}
                />
              </div>

              {/* 구매일자 입력창 */}
              <div className='buydate-box'>
                <span>구매일자 : </span>
                <input
                  value={boughtDate ? boughtDate : creatAt}
                  onChange={(e) => setboughtDate(e.currentTarget.value)}
                  type='date'
                />
              </div>

              {/* 유통기한 입력창 */}
              <div className='foodlife-box'>
                <span>유통기한 : </span>
                <input
                  value={life ? life : creatAt}
                  type='date'
                  onChange={(e) => setlife(e.currentTarget.value)}
                />
              </div>
            </FoodInfoBox>
            <AddToRefriBtn>
              <Button fillColor={theme.colors.yellow} onClick={deleteHandler}>
                삭제하기
              </Button>
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
