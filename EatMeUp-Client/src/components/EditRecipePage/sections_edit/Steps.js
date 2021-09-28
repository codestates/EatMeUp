import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

import theme from "../../StyledComponent/theme";

const Steps = () => {

  // 단계별 요리법 추가하는 핸들러
  const [recipeBox, setRecipeBox] = useState(["recipe"]);
  const addRecipeHandler = () => {
    const textarea = "add";
    setRecipeBox([...recipeBox, textarea]);
  };

  // 삭제핸들러
  const deleteRecipeHandler = (idx) => {
    console.log(idx);
    const deleteBox = recipeBox.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
    });

    setRecipeBox(deleteBox);
  };

  // 이미지 업로드 핸들러
  const dropHandler = () => {};

  console.log(recipeBox);
  return (
    <AddRecipeArea>
      {recipeBox.map((recipe, idx) => {
        return (
          <AddRecipeBox key={idx}>
            <div className='steps'>Step {idx + 1}</div>
            <div className='cook-recipe_box'>
              {/* 이미지 업로드 영역 */}
              <Dropzone
                onDrop={dropHandler}
                multiple={false}
                maxSize={800000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className='recipeImg_box' {...getRootProps()}>
                    <input {...getInputProps()} />

                    <i class='far fa-image'></i>
                  </div>
                )}
              </Dropzone>

              {/* 레시피 쓰는 영역 */}
              <div className='recipe-dc_box'>
                <textarera></textarera>
              </div>

              {/* 삭제버튼 영역 */}
              <div>
                <i
                  className='fas fa-times'
                  onClick={() => deleteRecipeHandler(idx)}
                ></i>
              </div>
            </div>
          </AddRecipeBox>
        );
      })}

      {/* 단계별 레시피 추가버튼영역 */}
      <BtnArea>
        <PlusBtn>
          <i class='far fa-plus-square' onClick={addRecipeHandler}></i>
        </PlusBtn>
      </BtnArea>
    </AddRecipeArea>
  );
};

const AddRecipeArea = styled.div`
  width: 100%;
  min-height: 300px;
  transition: 0.3s;
`;

const AddRecipeBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;

  .steps {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
    text-indent: 30px;
  }

  .cook-recipe_box {
    width: 95%;
    margin: 0 auto;
    border: 2px dashed ${theme.colors.lightgrey};
    height: 230px;
    display: flex;
  }

  .recipeImg_box {
    width: 40%;
    height: 90%;
    border: 2px solid ${theme.colors.lightgrey};
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${theme.colors.gray};
    cursor: pointer;
  }

  .recipe-dc_box {
    width: 60%;
    height: 90%;
    border: 2px solid ${theme.colors.lightgrey};
    margin: 10px;
    border-radius: 20px;
  }

  .recipe-dc_box > textarea {
    width: 90%;
    height: 90%;
    border-radius: 10px;
  }

  .fa-times {
    font-size: 30px;
    padding: 10px;
    color: ${theme.colors.gray};
  }
`;

const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const PlusBtn = styled.div`
  width: 50px;
  font-size: 40px;
  color: grey;
  cursor: pointer;
`;

export default Steps;
