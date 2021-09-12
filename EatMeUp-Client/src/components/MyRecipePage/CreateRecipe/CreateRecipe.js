import React from "react";
import styled from "styled-components";
import './create_recipe.css'
/* import component */
import AddIngredient from "./sections/AddIngredient";
import AddRecipe from "./sections/AddRecipe";
import Description from "./sections/Description";
import SideBar from '../../Util/Sidebar'
/* styled component */
const TitleArea = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid black;
`;

const CreateArea = styled.div`
  width: 65%;
  margin: 0.5rem auto;
  border: 1px solid black;
  padding: 8px;
`;
const CreateRecipe = () => {
  /* function */

  return (
    <div>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
        <SideBar />
        {/* title area */}
        <TitleArea></TitleArea>

        {/* create area */}

        <CreateArea>
          <Description />
          <AddIngredient />
          <AddRecipe />
          
        </CreateArea>
      </section>
    </div>
  );
};

export default CreateRecipe;
