import React, { useState } from "react";
import styled from "styled-components";

/* styled component */

const AddRecipeArea = styled.div`
  width: 100%;
  min-height: 300px;
  border: 1px solid black;
`;

const AddRecipeBox = styled.div`
  width: 90%;
  height: 200px;
  border: 1px solid black;
  margin-top: 8px;
  margin: 0.5rem auto;
  transition: 1s;
`;
const BtnArea = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PlusBtn = styled.div`
  width: 50px;
  font-size: 40px;
  color: grey;
  cursor: pointer;
`;

const AddRecipe = () => {
  const [recipeBox, setRecipeBox] = useState([]);
// [{ step1  image: image, recipe : recipe }, {image: image, recipe: recipe}
  const addRecipeHandler = () => {

    const textarea = <textarea></textarea>
    setRecipeBox([...recipeBox, textarea])

  };

  const deleteRecipeHandler = (idx) => {

    console.log(idx)
    const deleteBox = recipeBox.filter((recipe, id) => {

      if(id !== idx) {
        return recipe
      }
    })

    setRecipeBox(deleteBox)

  };

  console.log(recipeBox)
  return (
    <AddRecipeArea>
      {recipeBox.map((recipe, idx) => {
        return (
          <AddRecipeBox key={idx}>
            <i
              className='fas fa-times'
              onClick={() => deleteRecipeHandler(idx)}
            ></i>
          </AddRecipeBox>
        );
      })}
      <BtnArea>
        <PlusBtn>
          <i className='fas fa-plus-square' onClick={addRecipeHandler}></i>
        </PlusBtn>
      </BtnArea>
     
    </AddRecipeArea>
  );
};

export default AddRecipe;
