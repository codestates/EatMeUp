import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToFridge } from "../../../../_actions/fridgeActions";
import axios from "axios";

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
  const [foodname, setFoodname] = useState("");
  const [foodlife, setFoodlife] = useState("");
  const [image, setImage] = useState(null);

  const closeHandler = () => {
    setOpenAddWindow(false);
  };

  // 음식을 냉장고에 추가하는 핸들러
  const imgFileHandler = (e) => {
    setImage(e.target.files[0]);
  };


  const today = new Date().toISOString().substring(0, 10)

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
      food_image: foodImage ? foodImage : null,
      food_name: foodname,
      life: foodlife ? foodlife : today,
      frez_type: 0,
    };

    dispatch(addToFridge(food));
    setOpenAddWindow(false);
  };

  return (
    <>
      <BackGroundModal>
        <ModalDialog>
          <div className='closeBtn'>
            <i onClick={closeHandler} className='fas fa-times'></i>
          </div>
          <form onSubmit={submitHandler}>
            {/* 음식사진 업로드 */}
            <DropzoneArea>
              {image ? (
                <div>
                  <img
                    src={URL.createObjectURL(image)}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                    }}
                    alt='foodimg'
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="../food_img/octopus.png"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                    }}
                    alt='foodimg'
                  />
                </div>
              )}
            </DropzoneArea>
            <InputBox>
              <label htmlFor='foodimg'>
              <i className='bx bxs-camera-plus'></i>
              </label>
              <input
                type='file'
                id='foodimg'
                onChange={imgFileHandler}
                accept='image/*'
              />
            </InputBox>

            <FoodInfoBox>
              {/* 음식이름입력창 */}
              <div className='foodname-box'>
                <input
                  value={foodname}
                  onChange={(e) => setFoodname(e.currentTarget.value)}
                  type='text'
                  placeholder='음식이름'
                />
              </div>

              {/* 유통기한 입력창 */}
              <div className='foodlife-box'>
                <label for="life">유통기한</label>
                <input
                  id="life"
                  type='date'
                  defaultValue={today}               
                  onChange={(e) => setFoodlife(e.currentTarget.value)}
                />
              </div>
            </FoodInfoBox>
            <AddToRefriBtn>
              <Button
                fillColor='#FEBD2F'
                width='200px'
                height='35px'
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


export default AddIngre;
