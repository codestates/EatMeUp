import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";

import theme from "../../StyledComponent/theme";

const Steps = ({ menuals, setMenuals }) => {
  const [recipeBox, setRecipeBox] = useState(["recipe"]);
  const [recipeDC, setRecipeDC] = useState("");
  const [recipeImg, setRecipeImg] = useState(
    "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
  );

  // 요리법 step 영역 추가하는 핸들러, db에 저장할 recipe배열에 넣는 핸들러
  const addRecipeHandler = () => {
    const textarea = "add";
    const menual = {
      cookingNo: menuals.length + 1,
      image: recipeImg,
      recipe: recipeDC,
    };

    setRecipeBox([...recipeBox, textarea]);
    setMenuals([...menuals, menual])
  };
  

  //추가된 step영역 삭제하는 핸들러
  const deleteRecipeHandler = (idx) => {
    
    const deleteBox = recipeBox.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
    });

    const deleteMenual = menuals.filter((recipe, id) => {
      if(id !== idx) {
        return recipe;
      }
    })

    setRecipeBox(deleteBox);
    setMenuals(deleteMenual);
  };

  const dropHandler = () => {};

  return (
    <AddRecipeArea>
      {recipeBox.map((recipe, idx) => {
        return (
          <AddRecipeBox key={idx}>
            <div className='steps'>Step {idx + 1}</div>

            {/* 단계별 레시피 쓰는 영역 */}
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

              {/* 단계별 요리법 설명 영역 */}
              <div className='recipe-dc_box'>
                <textarea
                  onChange={(e) => setRecipeDC(e.currentTarget.value)}
                  placeholder='요리 레시피를 입력해 주세요.'
                ></textarea>
              </div>

              {/* 단계 삭제버튼 영역 */}
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
      <BtnArea>
        {recipeBox.length === 20 ? (
          ""
        ) : (
          <PlusBtn>
            <i class='far fa-plus-square' onClick={addRecipeHandler}></i>
          </PlusBtn>
        )}
      </BtnArea>
    </AddRecipeArea>
  );
};

const AddRecipeArea = styled.div`
  width: 100%;
  min-height: 300px;
`;

const AddRecipeBox = styled.div`
  width: 95%;
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
    margin: 10px;
    border-radius: 20px;
  }

  .recipe-dc_box > textarea {
    width: 100%;
    height: 98%;
    border-radius: 10px;
    border: 2px solid ${theme.colors.lightgrey};
    text-indent: 10px;
  }

  .fa-times {
    font-size: 30px;
    padding: 10px;
    color: ${theme.colors.gray};
    cursor: pointer;
  }
`;

const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const PlusBtn = styled.div`
  width: 50px;
  font-size: 40px;
  color: grey;
  cursor: pointer;
`;

export default Steps;
