import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Loader from "../Util/Loader";
import ResultCard from "./sections/ResultCard";

const ResultRecipes = () => {
  // Todo
  // 더보기 버튼 만들기
  // 재료 삭제 핸들러만들기

  const { loading, recommandRecipes } = useSelector(
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
          <TitleBox>
            <h1>
              <i className='fas fa-utensils'></i> 추천 레시피
            </h1>
          </TitleBox>

          {/* 카드리스트 컨테이너 */}

          {recommandRecipes.length === 0 ? (
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
              {recommandRecipes.map((recipe, idx) => {
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
const TitleBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 60px;
`;
// const SearchBox = styled.div`
//   width: 90%;
//   display: flex;
//   margin: 30px auto;
//   align-items: center;

//   .title {
//     font-size: 23px;
//     font-weight: 500;
//     margin-left: 30px;
//   }

//   .search_box {
//     border: 2px solid #ebe9e5;
//     width: 100%;
//     height: 50px;
//     border-radius: 20px;
//     line-height: 40px;
//     align-items: center;
//     display: flex;
//   }

//   .fa-shopping-basket {
//     margin-left: 15px;
//     font-size: 20px;
//     color: lightgrey;
//     margin: 6px 10px 0px 15px;
//   }
// `;

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
