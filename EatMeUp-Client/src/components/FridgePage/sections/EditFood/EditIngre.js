import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFood, editFood } from "../../../../_actions/fridgeActions";
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

  const { id, food_name, food_image, life, frez_type } = food;
  
  const [foodname, setFoodname] = useState("");
  const [foodlife, setFoodlife] = useState("");
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

    const food = {
      food_name: foodname ? foodname : food_name,
      frez_type: frez_type,
      life: foodlife ? foodlife : life,
      food_image: foodImage ? foodImage : food_image,
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
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                />
              ) : food_image ? (
                <img
                  src={food_image}
                  alt='foodImg'
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <img
                src="../food_img/octopus.png"
                alt='foodImg'
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                }}
              />
              )}
            </DropzoneArea>
            <InputBox>
              <label htmlFor='foodimg'>
                <i className='bx bxs-camera-plus'></i>
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
                <input
                  type='text'
                  defaultValue={food_name}
                  onChange={(e) => setFoodname(e.target.value)}
                />
              </div>

              {/* 유통기한 입력창 */}
              <div className='foodlife-box'>
                <label>유통기한 : </label>
                <input
                  defaultValue={life}
                  type='date'
                  onChange={(e) => setFoodlife(e.currentTarget.value)}
                />
              </div>
            </FoodInfoBox>
            <AddToRefriBtn>
              <Button
                width='120px'
                height='35px'
                fillColor={theme.colors.yellow}
                onClick={deleteHandler}
              >
                삭제하기
              </Button>
              <Button
                width='120px'
                height='35px'
                fillColor='white'
                style={{ border: "1px solid #eaeaea"}}
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
  display: flex;
  justify-content: center;
  label {
    position: absolute;
    top: 145px;
    left: 205px;
    padding: 0.3em 0.5em;
    border-radius: 10px;
    height: 27px;
    cursor: pointer;
    font-size: 30px;
    line-height: 27px;
    color: lightgrey;
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
