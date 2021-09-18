import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../StyledComponent/theme";

const Steps = () => {
  const [recipeBox, setRecipeBox] = useState(["recipe"]);
  // [{ step1  image: image, recipe : recipe }, {image: image, recipe: recipe}
  const addRecipeHandler = () => {
    const textarea = "add";
    setRecipeBox([...recipeBox, textarea]);
  };

  const deleteRecipeHandler = (idx) => {
    console.log(idx);
    const deleteBox = recipeBox.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
    });

    setRecipeBox(deleteBox);
  };

  console.log(recipeBox);
  return (
    <ThemeProvider theme={theme}>
      <AddRecipeArea>
        {recipeBox.map((recipe, idx) => {
          return (
            <AddRecipeBox key={idx}>
              <div className='steps'>Step {idx + 1}</div>
              <div className='cook-recipe_box'>
                <div className='recipeImg_box'>
                  <i class='far fa-image'></i>
                </div>
                <div className='recipe-dc_box'>
                  <textarera></textarera>
                </div>
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
          <PlusBtn>
            <i class='far fa-plus-square' onClick={addRecipeHandler}></i>
          </PlusBtn>
        </BtnArea>
      </AddRecipeArea>
    </ThemeProvider>
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
    border: 1px solid ${theme.colors.lightgrey};
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${theme.colors.gray};
  }

  .recipe-dc_box {
    width: 60%;
    height: 90%;
    border: 1px solid ${theme.colors.lightgrey};
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
    padding:10px;
    color: ${theme.colors.gray}
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
