import React from 'react'
import styled from "styled-components";

/* import component */
import EditIngredient from "./sections/EditIngredient";
import EditCookRecipe from "./sections/EditRecipe";
import EditDescription from "./sections/EditDescription";

/* styled component */
const TitleArea = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid black;
`;

const EditArea = styled.div`
  width: 65%;
  margin: 0.5rem auto;
  border: 1px solid black;
  padding: 8px;
`;

const EditRecipe = () => {
  return (
    <div>
     <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
        {/* title area */}
        <TitleArea></TitleArea>

        {/* create area */}

        <EditArea>
          <EditDescription />
          <EditIngredient />
          <EditCookRecipe />
        </EditArea>
      </section>
    </div>
  )
}

export default EditRecipe
