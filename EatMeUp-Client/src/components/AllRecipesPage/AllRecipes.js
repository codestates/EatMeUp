import React, { useState } from "react";
import Header from "../Util/Header";
import Card from "./sections/Card";
import styled from "styled-components";
import { myRecipes } from "../dummydata";
import SwiperCompo from "./sections/SwiperCompo";
import Footer from '../Util/Footer'
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

      <SearchBox>

      </SearchBox>
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
  max-width: 80%;
  margin: 15px auto;
  min-height: 100px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
`
const Container = styled.div`
  width: 80%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export default AllRecipes;
