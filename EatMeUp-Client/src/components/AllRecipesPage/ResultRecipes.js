import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../_actions/recipeActions";

/* 컴포넌트 */
import Header from "../Util/Header";
import Card from "./sections/Card";
import Footer from "../Util/Footer";

const ResultRecipes = () => {
  // Todo
  // 더보기 버튼 만들기
  // 재료 삭제 핸들러만들기

  const dispatch = useDispatch();
  const { loading, recipes } = useSelector((state) => state.allRecipes);

  const slicedArr = recipes.slice(0, 12);
  const loadMore = 4;
  const [showRecipes, setShowRecipes] = useState(slicedArr);

  useEffect(() => {
    dispatch(allRecipes());
  }, [dispatch]);

  const loadMoreHandler = () => {
    const loadmore = recipes.slice(0, showRecipes.length + loadMore);
    setShowRecipes(loadmore);
  };

  const deleteIngredientHandler = () => {};
  console.log(showRecipes);
  return (
    <>
      <Header id={0} />
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
              <Chip label='감자' onDelete={() => deleteIngredientHandler()} />
              <Chip label='우유' onDelete={() => deleteIngredientHandler()} />
              <Chip label='김치' onDelete={() => deleteIngredientHandler()} />
              <Chip
                label='요구르트'
                onDelete={() => deleteIngredientHandler()}
              />
              <Chip
                label='닭가슴살'
                onDelete={() => deleteIngredientHandler()}
              />
            </Stack>
          </div>
        </SearchBox>

        {/* 카드리스트 컨테이너 */}
        <Container>
          {showRecipes.map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />;
          })}
        </Container>
        <LoadMoreBtn>
          <div>
            {recipes.length === showRecipes.length ? (
              ""
            ) : (
              <button onClick={loadMoreHandler}>더보기</button>
            )}
          </div>
        </LoadMoreBtn>
      </section>
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

  @media screen and (max-width: 1500px) {
    column-width: 300px;
  }
`;

const LoadMoreBtn = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: center;

  button {
    width: 150px;
    height: 40px;
    background-color: #ced0ce;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
  }
`;
export default ResultRecipes;
