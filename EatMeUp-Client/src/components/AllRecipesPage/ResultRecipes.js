import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Loader from "../Util/Loader";
import ResultCard from "./sections/ResultCard";

const ResultRecipes = () => {
  // Todo

  const { loading, food, recommandRecipes } = useSelector(
    (state) => state.recommandrecipes,
  );

  return (
    <>
      <Header id={0} />
      {loading ? (
        <Loader />
      ) : (
        <section>
          {/* 페이지 제목 */}

          <SearchBox>
            <FridgeTitle>추천 레시피</FridgeTitle>
            <FoodBox>
              {/* 체크된 음식 담는 영역 */}
              <CheckedFoodsBox>
                <Stack direction='row' spacing={1}>
                  <i className='fas fa-shopping-basket'></i>
                  {food && food.length === 0 ? (
                    <span className='placeholder'>
                      냉장고 재료를 추가해 주세요
                    </span>
                  ) : (
                   food && food.map((food, idx) => {
                      return <Chip key={idx} label={food.name} />;
                    })
                  )}
                </Stack>
              </CheckedFoodsBox>

              <Link to='/fridge'>
                <GotoBtnBox>
                  냉장고 보기 <i className='fas fa-chevron-right'></i>
                </GotoBtnBox>
              </Link>
            </FoodBox>
          </SearchBox>

          {/* 카드리스트 컨테이너 */}

          {recommandRecipes && recommandRecipes.length === 0 ? (
            <NoResultBox>
              <div className='box'>
                <div className='icon'>
                  <i className='bx bx-search-alt'></i>
                </div>
                <div className='text'>검색 결과가 없습니다.</div>
              </div>
            </NoResultBox>
          ) : (
            <Container>
              {recommandRecipes && recommandRecipes.map((recipe, idx) => {
                  return <ResultCard recipe={recipe} key={idx} />;
              })}
            </Container>
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

const NoResultBox = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
  }

  .bx-search-alt {
    font-size: 150px;
    color: #a9a7a3;
  }

  .text {
    font-size: 20px;
    color: #a9a7a3;
  }
`;

const SearchBox = styled.div`
  padding: 6% 0 0 0;
  width: 88%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 50px;

  @media screen and (max-width: 1500px) {
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 80%;
  }

  @media screen and (max-width: 775px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 575px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    display: block;
    width: 90%;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 90%;
  }
`;

const FridgeTitle = styled.div`
  width: 15%;
  font-weight: bold;
  font-size: 30px;
  text-indent: 80px;

  @media screen and (max-width: 1500px) {
    font-size: 25px;
    text-indent: 50px;
  }

  @media screen and (max-width: 1200px) {
    width: 15%;
    font-size: 27px;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 775px) {
    display: block;
  }

  @media screen and (max-width: 575px) {
    display: block;
  }

  @media screen and (max-width: 450px) {
    display: block;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const FoodBox = styled.div`
  width: 85%;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1035px) {
    width: 100%;
    margin: 8px 0px;
  }
`;

// 클릭한 음식담는 영역
const CheckedFoodsBox = styled.div`
  width: 85%;
  height: 40px;
  border: 2px solid #ebe9e5;
  border-radius: 30px 0px 0px 30px;
  padding-top: 5px;
  margin-left: 8px;

  .fa-shopping-basket {
    margin-left: 20px;
    color: #a8a7a3;
    line-height: 30px;
  }

  .name {
    margin-left: 15px;
    padding: 3px 20px;
    background-color: #e1e0dc;
    border-radius: 30px;
  }

  .placeholder {
    text-indent: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #a8a7a3;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1035px) {
    display: block;
    width: 85%;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 90%;
  }
`;

// 재료기반 레시피 찾기버튼
const GotoBtnBox = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 0px 30px 30px 0px;
  line-height: 33px;
  background: white;
  color: white;
  font-weight: bold;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  color: #303030;
  cursor: pointer;
  border: 1px solid #ebe9e5;

  @media screen and (max-width: 1035px) {
    display: block;
    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 775px) {
    font-size: 13px;

    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 575px) {
    width: 20%;
    .fa-play {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    width: 20%;
    font-size: 10px;
  }

  @media screen and (max-width: 375px) {
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;

  a {
    color: #404040;
  }
  @media screen and (max-width: 1500px) {
    width: 95%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    margin: 0 auto;

    a {
      color: #404040;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin: 0 auto;

    a {
      color: #404040;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin: 0 auto;

    a {
      color: #404040;
    }
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media screen and (max-width: 550px) {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export default ResultRecipes;
