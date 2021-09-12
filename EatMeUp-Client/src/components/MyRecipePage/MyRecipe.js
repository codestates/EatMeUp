import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* components */
import Card from "./sections/Card";

/* styled-component */
import GridContainer from "../StyledComponent/GridContainer";

const MyRecipe = () => {
  const images = [
    "../food_img/food1.jpeg",
    "../food_img/food2.jpeg",
    "../food_img/food3.jpg",
    "../food_img/food4.jpg",
    "../food_img/food5.jpg",
    "../food_img/food6.jpg",
    "../food_img/food7.jpg",
    "../food_img/food8.jpg",
    "../food_img/food9.jpg",
    "../food_img/food10.jpg",
    "../food_img/food11.jpg",
    "../food_img/food12.jpg",
    "../food_img/food13.jpg",
  ];

  /* styled-component */
  const TitleArea = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 8px;
    border: 1px solid black;
  `;

  const AddbtnArera = styled.div`
    width: 70%;
    height: 70px;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const AddRecipeBtnBox = styled.div`
    width: 150px;
    height: 50px;
  `;

  const AddRecipeBtn = styled.button`
    width: 130px;
    height: 48px;
    border: 1px solid black;
    margin-left: 5px;
    cursor: pointer;
  `;

  return (
    <>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
        {/* page title area */}
        <TitleArea>

        </TitleArea>

        {/* recipe add button area */}
        <AddbtnArera>
          <AddRecipeBtnBox>
            <Link to='/user/myrecipe/create'>
              <AddRecipeBtn>button</AddRecipeBtn>
            </Link>
          </AddRecipeBtnBox>
        </AddbtnArera>
        {/* card list area */}
        <GridContainer>
          {images.map((image, idx) => {
            return <Card image={image} key={idx} />;
          })}
        </GridContainer>
      </section>
    </>
  );
};

export default MyRecipe;
