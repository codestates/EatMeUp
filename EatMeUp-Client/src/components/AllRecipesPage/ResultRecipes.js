import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Loader from "../Util/Loader";
import ResultCard from './sections/ResultCard'

const ResultRecipes = () => {
  // Todo
  // 더보기 버튼 만들기
  // 재료 삭제 핸들러만들기

  const { loading, recommandRecipes, food } = useSelector((state) => state.recommandrecipes);

  return (
    <>
      <Header id={0} />
      {loading ? (
        <Loader />
      ) : (
        <section>
          {/* 페이지 제목 */}
          <TitleBox>
            <h1>
              <i className='fas fa-utensils'></i> 추천 레시피
            </h1>
          </TitleBox>

          {/* 냉장고 재료기반 추천된 재료리스트 */}
          <SearchBox>
            <div className='search_box'>
              <Stack direction='row' spacing={1}>
                <i className='fas fa-shopping-basket'></i>
                {/* {food.food
                  ? food.food.map((item, idx) => {
                      return <Chip label={item.name} key={idx} />;
                    })
                  : ""} */}
              </Stack>
            </div>
          </SearchBox>

          {/* 카드리스트 컨테이너 */}
          <Container>
            {recommandRecipes.map((recipe, idx) => {
              return <ResultCard recipe={recipe} key={idx} />;
            })}
          </Container>
        </section>
      )}
      <Footer />
    </>
  );
};

const TitleBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
`;
const SearchBox = styled.div`
  width: 90%;
  display: flex;
  margin: 30px auto;
  align-items: center;

  .title {
    font-size: 23px;
    font-weight: 500;
    margin-left: 30px;
  }

  .search_box {
    border: 2px solid #ebe9e5;
    width: 100%;
    height: 50px;
    border-radius: 20px;
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
`;

const Container = styled.div`
  width: 95%;
  column-width: 280px;
  gap: 15px;
  margin: 0 auto;

  a {
    color: #404040;
  }

  @media screen and (max-width: 1500px) {
    column-width: 300px;
  }
`;

export default ResultRecipes;
