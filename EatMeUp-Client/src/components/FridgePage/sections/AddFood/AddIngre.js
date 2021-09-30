import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToFridge } from "../../../../_actions/fridgeActions";
import { imageUpload } from "../../../../_actions/imageAction";
import { foodLife } from "../utils/convertDate";

/* 스타일 컴포넌트 */
import {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
} from "../styled/Style";
import { Button } from "../../../StyledComponent/buttons";

//Todo
// 음식 추가시 에러시 메세지 띄우기!!

const AddIngre = ({ setOpenAddWindow }) => {
  const dispatch = useDispatch();
  const { imageUrl } = useSelector((state) => state.image);

  const [foodname, setFoodname] = useState("");
  const [foodlife, setFoodlife] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [image, setImage] = useState(null);

  const closeHandler = () => {
    setOpenAddWindow(false);
  };

  // 음식을 냉장고에 추가하는 핸들러
  const imgFileHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(imageUpload(image));
    const food_life = foodLife(foodlife);
    const buyingDate = foodLife(registerDate);

    const food = {
      food_image: imageUrl,
      food_name: foodname,
      life: food_life.elapsedDay ? food_life.elapsedDay : buyingDate.elapsedDay,
      frez_type: 0,
      created_at: registerDate,
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
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      
                    }}
                    alt='foodimg'
                  />
                </div>
              ) : (
                <div>
                  <i className='bx bxs-camera-plus'></i>
                </div>
              )}
            </DropzoneArea>
            <InputBox>
              <label for='foodimg'><i className="fas fa-upload"></i> 이미지 업로드</label>
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
                fillColor='#FEBD2F'
                width="200px"
                height="35px"
                color='white'
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
export default AddIngre;
