import React, { useState } from "react";
import styled from "styled-components";
import "../create_recipe.css";
/* styled-component */
import Button from "../../../StyledComponent/Button";
import Input from "../../../StyledComponent/Input";

/* styled-component */
const AddIngredientArea = styled.div`
  width: 100%;
  min-height: 150px;
  border: 1px solid black;
  margin-bottom: 8px;
`;

const FlexContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem auto;
`;

const SpanTag = styled.span`
  min-width: 100px;
  height: 40px;
  border: 1px solid black;
  margin: 8px;
  text-align: center;
  line-height: 40px;
  padding: 8px;
`;

const AddIngredient = () => {
  /* function */
  const [ingredientTag, setIngredientTag] = useState([]);
  const [foodname, setFoodname] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");

  const AddIngredientHandler = (e) => {
    e.preventDefault();

    const tag = foodname + foodQuantity;
    if (tag === "") {
      return;
    }
    setIngredientTag([...ingredientTag, tag]);
    setFoodname("");
    setFoodQuantity("");
  };

  const deleteIngredientHandler = (idx) => {
    const deleteTag = ingredientTag.filter((tag, id) => {
      if (id !== idx) {
        return tag;
      }
    });

    setIngredientTag(deleteTag);
  };

  return (
    <AddIngredientArea>
      {/* input area */}
      <FlexContainer>
        <div>
          <Input
            onChange={(e) => setFoodname(e.currentTarget.value)}
            value={foodname}
            type='text'
          />
        </div>
        <div>
          <Input
            onChange={(e) => setFoodQuantity(e.currentTarget.value)}
            value={foodQuantity}
            type='date'
          />
        </div>
        <div>
          <Button onClick={AddIngredientHandler}>ADD</Button>
        </div>
      </FlexContainer>

      {/* tag area */}

      {ingredientTag.map((food, idx) => {
        return (
          <SpanTag key={idx}>
            {food}
            <i
              className='fas fa-times'
              onClick={() => deleteIngredientHandler(idx)}
            ></i>
          </SpanTag>
        );
      })}
    </AddIngredientArea>
  );
};

export default AddIngredient;
