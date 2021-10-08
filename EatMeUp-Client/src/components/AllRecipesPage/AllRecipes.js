import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../_actions/recipeActions";
import { getUserinfo } from "../../_actions/userActions";

/* 컴포넌트 */
import Header from "../Util/Header";
import Card from "./sections/Card";
import Footer from "../Util/Footer";
import Loader from "../Util/Loader";
import Slider from "./Slider";
import FirstCard from "./sections/FirstCard";

const { swal } = window;

const AllRecipes = () => {
  // Todo

  const dispatch = useDispatch();
  const { loading, recipes, recipeCount } = useSelector(
    (state) => state.allRecipes,
  );
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const count = Math.ceil(recipeCount / 12);

  // useEffect(() => {
  //   swal(
  //     "Please",
  //     "혹시 레시피 이미지가 안보이시나요? \n 사이트설정에서 안전하지않은 컨텐츠 허용을 해주세요 😃",
  //     "success",
  //   );
  // }, []);

  useEffect(() => {
    const getPage = {
      page: page,
    };
    dispatch(allRecipes(getPage));

    if (isAuthenticated) {
      dispatch(getUserinfo());
    }
  }, [dispatch, page, isAuthenticated]);

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
            <div className='todays-pick'>오늘의 레시피</div>
          </TitleContainer>
          <MainContainer>
            <Slider />
            {recipes &&
              recipes.slice(0, 2).map((recipe, idx) => {
                return <FirstCard recipe={recipe} key={idx} />;
              })}
          </MainContainer>

          <SearchBox>
            <div className='level-box'>
              <i className='fas fa-concierge-bell'></i>
              <span className='level'>난이도 :</span>
              <span>초보환영 </span>
              <i className='bx bxs-star' id='icon'></i>
              <span>보통 </span>
              <i className='bx bxs-star' id='icon'></i>
              <i className='bx bxs-star' id='icon'></i>
              <span>어려움</span>
              <i className='bx bxs-star' id='icon'></i>
              <i className='bx bxs-star' id='icon'></i>
              <i className='bx bxs-star' id='icon'></i>
            </div>
          </SearchBox>

          {/* 카드리스트 컨테이너 */}
          <Container>
            {recipes &&
              recipes.map((recipe, idx) => {
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
  width: 80%;
  margin: 0 auto;
  padding: 7% 0 1% 0;
  display: flex;
  align-items: center;
  position: relative;


  .todays-pick {
    font-size: 30px;
    font-weight: bold;
  
  }
  @media screen and (max-width: 1500px) {
    padding: 10% 0 1% 0;
    margin-top: 60px;
    width: 80%;
    margin: 0 auto;

    .todays-pick {
      font-size: 30px;
      font-weight: bold;
   
    }
  }
`;

const SearchBox = styled.div`
  width: 80%;
  margin: 5px auto;
  align-items: center;

  .level-box {
    margin-top: 15px;
  }
  .bxs-star {
    color: #febd2f;
    font-size: 17px;
  }

  .level {
    margin-left: 1px;
  }

  div > span {
    margin-left: 10px;
    color: #a9a7a3;
  }
  .fa-concierge-bell {
    color: #a9a7a3;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 95%;
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
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr;
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
    width: 70%;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media screen and (max-width: 375px) {
    width: 88%;
    display: block;
  }
`;

const PaginationBox = styled.div`
  width: 80%;

  margin: 15px auto;
  display: flex;
  justify-content: flex-end;
  div {
    font-size: 17px;
  }
`;
export default AllRecipes;
