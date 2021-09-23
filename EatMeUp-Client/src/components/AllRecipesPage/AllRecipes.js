import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

/* 컴포넌트 */
import Header from "../Util/Header";
import Card from "./sections/Card";
import SwiperCompo from "./sections/SwiperCompo";
import Footer from "../Util/Footer";


import { myRecipes } from "../dummydata";


const AllRecipes = () => {

  // Todo
  // 더보기 버튼 만들기
  // 재료 삭제 핸들러만들기

  const deleteIngredientHandler = () => {};


  return (
    <>
      <Header id={0} />
      <section>

        {/* 페이지 제목 */}
        <TitleBox>
          <h1>
            <i class='fas fa-utensils'></i> 오늘의 레시피
          </h1>
        </TitleBox>

       {/* 오늘의 레시피 */}
        <SwiperCompo />



        {/* 냉장고 재료기반 추천된 재료리스트 */}
        <SearchBox>
          <div className='title'>추천 레시피</div>
          
          <div className='search_box'>
            <Stack direction='row' spacing={1}>
              <i class='fas fa-shopping-basket'></i>
              <Chip label='감자' onDelete={() => deleteIngredientHandler()} />
            </Stack>
          </div>
          <div className='searchBtn_box'>검색하기</div>
        </SearchBox>



        {/* 카드리스트 컨테이너 */}
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
  text-indent: 10px;
  margin: 0 auto;
`;

const SearchBox = styled.div`
  width: 90%;
  display: flex;
  margin: 15px auto;
  align-items: center;

  .title {
    font-size: 23px;
    font-weight: 500;
    margin-left: 30px;
  }

  .search_box {
    width: 70%;
    height: 43px;
    border: 1px solid #e1e0dc;
    border-radius: 30px 0px 0px 30px;
    margin-left: 18px;
    line-height: 40px;
    align-items: center;
    display: flex;

  }

  .fa-shopping-basket {
    margin-left: 15px;
    font-size: 20px;
    color: lightgrey;
    margin: 6px 10px 0px 15px;
  }

  .searchBtn_box {
   border: 1px solid #e1e0dc;
   width: 150px;
   height: 43px;
   border-radius: 0px 30px 30px 0px;
   font-weight: bold;
   padding: 8px;
   background: white;
   text-align: center;
   color: grey;
  }

  .
`;
const Container = styled.div`
  width: 90%;
  column-width: 250px;
  margin: 0 auto;
  gap: 15px;
`;

export default AllRecipes;
