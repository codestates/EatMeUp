import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { yellow } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../_actions/recipeActions";

/* 컴포넌트 */
import Header from "../Util/Header";
import Card from "./sections/Card";
import Footer from "../Util/Footer";
import Loader from "../Util/Loader";

/* 스타일 컴포넌트 */
import { SectionBox } from "../StyledComponent/containers";

const color = yellow[500];

const AllRecipes = () => {
  // Todo

  const dispatch = useDispatch();
  const { loading, recipes, recipeCount } = useSelector(
    (state) => state.allRecipes,
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [page, setPage] = useState(1);

  const count = Math.ceil(recipeCount / 12);

  useEffect(() => {
    const getPage = {
      page: page,
    };
    dispatch(allRecipes(getPage));
  }, [dispatch, page]);

  const mainCardHandler = (e, idx) => {
    setCurrentIdx(idx);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Header id={0} />
      {loading ? (
        <Loader />
      ) : (
        <section>
          {/* 페이지 제목 */}

          <TitleContainer>
            <TitleBox>
              <h1>
                <i className='fas fa-utensils'></i> 오늘의 레시피
              </h1>
              <div>
                {[
                  "https://cdn.pixabay.com/photo/2020/02/28/12/43/bibimbap-4887417_960_720.jpg",
                  "https://t1.daumcdn.net/cfile/blog/26373634588318E103",
                  "https://cdn.mkhealth.co.kr/news/photo/201908/img_MKH190814002_0.jpg",
                ].map((card, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={(e) => mainCardHandler(e, idx)}
                      className={currentIdx === idx ? "max_box" : "min_box"}
                      style={
                        currentIdx === idx ? { width: "50%" } : { width: "23%" }
                      }
                    >


                      <img src={card} alt='foodimg' />
                      <div>
                        <div>title</div>
                        <div>
                          <span>돼지고기</span>
                          <span>돼지고기</span>
                          <span>돼지고기</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TitleBox>
          </TitleContainer>
          {/* 냉장고 재료기반 추천된 재료리스트 */}
          <SearchBox></SearchBox>

          {/* 카드리스트 컨테이너 */}
          <Container>
            {recipes.map((recipe, idx) => {
              return <Card recipe={recipe} key={idx} />;
            })}
          </Container>
          <PaginationBox>
            <div>
              <Stack spacing={3}>
                <Pagination
                  count={count}
                  size='large'
                  shape='rounded'
                  variant='outlined'
                  page={page}
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </PaginationBox>
        </section>
      )}
      <Footer />
    </>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  margin-top: 60px;
`;
const TitleBox = styled.div`
  width: 95%;
  margin: 0 auto;

  div {
    display: flex;
  }

  .max_box {
    font-size: 40px;
    height: 350px;
    transition: all 0.4s;
    margin: 0px 7.5px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    display: flex;
    font-size: 15px;

    div {
      display: block;
      width: 40%;
    }

    img {
      width: 50%;
      transition: all 0.4s;
      height: 95%;
      border-radius: 25px;
      margin: 7px;
    }
  }

  .min_box {
    font-size: 14px;
    width: 23%;
    height: 350px;
    transition: all 0.4s;
    margin: 0px 7.5px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    display: block;

    div {
      display: block;
    width: 100%;
    }



    img {
      width: 100%;
      height: 250px;
      transition: all 0.4s;
      border-radius: 25px;
    
    }
  }
`;

const MainRecipeCard = styled(SectionBox)`
  width: 23%;
  height: 350px;
  transition: all 0.4s;
  margin: 0px 7.5px;

  .max_box {
    font-size: 40px;
  }

  .min_box {
    font-size: 14px;
  }
  &:active :focus {
    max-width: 50%;
    background-color: black;

    div > img {
      width: 100px;
    }
  }
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 0 auto;

  a {
    color: #404040;
  }
`;

const PaginationBox = styled.div`
  margin: 15px 30px;
  display: flex;
  justify-content: flex-end;
  div {
    font-size: 17px;
  }
`;
export default AllRecipes;
