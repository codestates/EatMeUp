import React, { useState } from "react";
import styled from "styled-components";

import EditIngre from "./EditIngre/EditIngre";

/* styled-component */
const IngredientContainer = styled.div`
  max-width: 350px;
  height: 130px;
  border-radius: 15px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 8px;
  cursor: pointer;
`;

const Ingredient = () => {
  
  /* function area */
  const [openEditIngre, setOpenEditIngre] = useState(false);

  const openAddIngreHandler = (e) => {
    e.preventDefault();
    setOpenEditIngre(true);
  };

  return (
    <>
      <IngredientContainer onClick={openAddIngreHandler}>

      </IngredientContainer>
      {openEditIngre ? <EditIngre setOpenEditIngre={setOpenEditIngre} /> : ""}
    </>
  );
};

export default Ingredient;
