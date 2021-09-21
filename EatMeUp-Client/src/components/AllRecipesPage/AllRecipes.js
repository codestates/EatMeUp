import React, { useState } from "react";
import Header from "../Util/Header";
import Card from "./sections/Card";
import styled from "styled-components";
import { myRecipes } from "../dummydata";
import SwiperCompo from "./sections/SwiperCompo";
import Footer from "../Util/Footer";
const AllRecipes = () => {
  return (
    <>
      <Header id={0} />
      <section>
        <TitleBox>
          <h1>
            <i class='fas fa-utensils'></i> 오늘의 레시피
          </h1>
        </TitleBox>

        <SwiperCompo />

        <SearchBox></SearchBox>
        <TitleBox>
          <h1>추천 레시피</h1>
        </TitleBox>
        <Container>
          {myRecipes.map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />;
          })}
        </Container>
      </section>
      <Footer />
    </>
  );
};

const TitleBox = styled.div`
  width: 80%;
  margin: 10px auto;
  text-indent: 10px;
  height: 50px;
`;

const SearchBox = styled.div`
  max-width: 75%;
  margin: 15px auto;
  min-height: 130px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
const Container = styled.div`
  width: 85%;
  margin: 10px auto;
  column-width: calc(100% / 4);
`;

export default AllRecipes;
