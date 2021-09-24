import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

import theme from "../../StyledComponent/theme";
import { MiddleBtn } from "../../StyledComponent/buttons";

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
    <AddIngredientBox>
     
      {/* 재료 추가 작성 영역 */}
      <FlexContainer>
        <input
          onChange={(e) => setFoodname(e.currentTarget.value)}
          value={foodname}
          placeholder='재료 이름을 적어주세요'
          type='text'
        />

        <input
          onChange={(e) => setFoodQuantity(e.currentTarget.value)}
          value={foodQuantity}
          placeholder='재료의 양을 적어주세요'
          type='text'
        />

        <div>
          <AddIngreBtn
            fillColor={theme.colors.yellow}
            onClick={AddIngredientHandler}
          >
            재료 추가
          </AddIngreBtn>
        </div>
      </FlexContainer>

      {/* 재료추가 영역 */}
      <TagContainer>
        <Stack direction='row' spacing={1}>
          {ingredientTag.map((food, idx) => {
            return (
              <Chip
                label={food}
                onDelete={() => deleteIngredientHandler(idx)}
                key={idx}
              />
            );
          })}
        </Stack>
      </TagContainer>
    </AddIngredientBox>
  );
};

/* styled-component */
const AddIngredientBox = styled.div`
  width: 100%;
  min-height: 150px;
  margin-top: 18px;
`;

const FlexContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;

  input {
    width: 200px;
    height: 40px;
    margin-right: 8px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.lightgrey};
    text-indent: 5px;
  }

  input:focus {
    outline: none;
  }
`;

const TagContainer = styled.div`
  width: 1000px;
  margin: 10px auto;
  overflow-x: scroll;
  height: 50px;
  border: 2px solid ${theme.colors.lightgrey};
  border-radius: 10px;
  padding: 8px;
`;

const AddIngreBtn = styled(MiddleBtn)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export default AddIngredient;
