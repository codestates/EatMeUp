import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFood, editFood } from "../../../../_actions/fridgeActions";
import { foodLife } from "../utils/convertDate";
import axios from "axios";
import styled from "styled-components";
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

const EditIngre = ({ setOpenEditWindow, food }) => {
  const dispatch = useDispatch();

  const { id, food_name, food_image, food_life, createdAt, frez_type } = food;
  const creatAt = createdAt.slice(0, 10);

  const [foodname, setFoodname] = useState(food_name);
  const [life, setlife] = useState("");
  const [boughtDate, setboughtDate] = useState("");
  const [image, setImage] = useState(null);

  const closeEditModal = (e) => {
    e.preventDefault();
    setOpenEditWindow(false);
  };

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // 음식을 냉장고에 수정하는 핸들러
  const submitHandler = async (e) => {
    e.preventDefault();
    let foodImage = null;

    if (!image) {
      foodImage = null;
    } else {
      const data = await axios.get(`${process.env.REACT_APP_API}/image/s3url`, {
        withCredentials: true,
      });

      //url을 사용해서 S3 버킷에 업로드
      //axios
      const img = await fetch(
        data.data.s3url,
        {
          method: "PUT",
          headers: {
            "Content-Type": "image/jpeg",
          },
          body: image,
        },
        {
          withCredentials: true,
        },
      );

      foodImage = img.url.split("?")[0];
    }

    const foodlife = foodLife(life);

    const food = {
      food_name: foodname ? foodname : food_name,
      frez_type: frez_type,
      life: foodlife ? foodlife : life,
      food_image: foodImage ? foodImage : food_image,
      created_at: boughtDate,
      update_at: "2021-01-02",
    };

    dispatch(editFood(id, food));
    setOpenEditWindow(false);
  };

  const deleteHandler = () => {
    dispatch(deleteFood(id));
    setOpenEditWindow(false);
  };

  return (
    <div>
      <BackGroundModal>
        <ModalDialog>
          <div className='closeBtn'>
            <i onClick={closeEditModal} className='fas fa-times'></i>
          </div>
          <form onSubmit={submitHandler}>
            {/* 이미지 업로드 */}
            <DropzoneArea>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt='foodImg'
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              ) : food_image ? (
                <img
                  src={food_image}
                  alt='foodImg'
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <div>
                  <i className='bx bxs-camera-plus'></i>
                </div>
              )}
            </DropzoneArea>
            <InputBox>
              <label htmlFor='foodimg'>
                <i className='fas fa-upload'></i> 이미지 업로드
              </label>
              <input
                type='file'
                id='foodimg'
                accept='image/*'
                onChange={fileHandler}
              />
            </InputBox>

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
              <Button
                width='130px'
                height='35px'
                fillColor={theme.colors.yellow}
                color='white'
                onClick={deleteHandler}
              >
                삭제하기
              </Button>
              <Button
                width='130px'
                height='35px'
                fillColor='lightgrey'
                onClick={submitHandler}
              >
                수정하기
              </Button>
            </AddToRefriBtn>
          </form>
        </ModalDialog>
      </BackGroundModal>
    </div>
  );
};

const InputBox = styled.div`
  margin: 15px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  label {
    padding: 0.3em 0.5em;
    border-radius: 10px;
    height: 27px;
    border: 1px solid lightgrey;
    cursor: pointer;
    background-color: #f8f8f8;
    font-size: 14px;
    line-height: 27px;
    color: grey;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default EditIngre;
