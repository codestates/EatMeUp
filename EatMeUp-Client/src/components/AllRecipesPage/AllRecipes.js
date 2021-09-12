import React from "react";
import "./recipes.css";
import Card from './sections/Card'
/* import styled-component */
import CardContainer from "../StyledComponent/CardContainer";

const AllRecipes = () => {
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
  return (
    <>
      <header
        style={{
          width: "100%",
          height: "75px",
          border: "2px solid black",
          marginBottom: "10px",
        }}
      ></header>
      <section>
        {/* main image area */}
        <div
          style={{ width: "100%", height: "400px", border: "1px solid black" }}
        >
        
        </div>

        <div style={{ width: "100%", height: "100px", textAlign: "center" }}>
          <h1>Recipes</h1>
        </div>

        {/* all recipes cards */}
        <CardContainer>
          {images.map((image, idx) => {
            return (
              <Card image={image} key={idx} />
            );
          })}
        </CardContainer>
      </section>
    </>
  );
};

export default AllRecipes;
