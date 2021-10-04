import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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

const AllRecipes = () => {
  // Todo

  const dispatch = useDispatch();
  const { loading, recipes, recipeCount } = useSelector(
    (state) => state.allRecipes,
  );
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [page, setPage] = useState(1);
  const [getRecipes, setGetRecipes] = useState([]);
  const count = Math.ceil(recipeCount / 12);

  useEffect(() => {
    const getPage = {
      page: page,
    };
    dispatch(allRecipes(getPage));
    setGetRecipes(recipes);

    if (isAuthenticated) {
      dispatch(getUserinfo());
    }
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
                      <img src={card} alt='recipe' className='recipe-img' />

                      {/* figure태그의 캡션 */}
                      <div className='recipeInfo'>
                        <div className='recipe-info_box'>
                          {/* 요리시간 */}
                          <div className='time'>
                            <i className='far fa-clock'></i> 요리시간 20min
                          </div>
                          <div className='level'>
                            <spna>/ 난이도 : </spna>
                            <i className='bx bxs-star' id='icon'></i>
                            <i className='bx bxs-star' id='icon'></i>
                          </div>
                        </div>

                        {/* 레시피제목 */}
                        <div className='title_box'>돼지고기</div>
                        <div className='description_box'>
                          <p>
                            백종원님의 레시피중에 간혹 감탄이 나오는 레시피가
                            있는데 바로 오징어볶음입니다. 살짝 불향까지 나는것이
                            아주 일품이네요. 쉬운 레시피로 따라하기도 쉽습니다.
                            오늘 메뉴로 해 보세요~
                          </p>
                        </div>
                        {/* 레시피 주재료들 */}
                        <div className='main-ingre'>주재료</div>
                        <div className='recipe-ingre_box'>
                          <div className='ingres'>
                            <span>#돼지전지</span>
                            <span>#양파</span>
                            <span>#대파</span>
                            <span>#고추장</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TitleBox>
          </TitleContainer>
          {/* 냉장고 재료기반 추천된 재료리스트 */}
          <SearchBox>
            <div>
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
            {getRecipes.map((recipe, idx) => {
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
  margin-top: 60px;
  margin: 0 auto;

  @media screen and (max-width: 1500px) {
    width: 95%;
    margin-top: 60px;
    margin: 0 auto;
  }
`;

const showDialog = keyframes`
   from {
    opacity: 0;
    transform: translateY(50px);
   }
   to{
    opacity: 1;
    transform: translateY(0px);
   }
`;

const TitleBox = styled.div`
  width: 100%;
  margin: 0 auto;

  div {
    display: flex;
  }


    /* 큰 카드 */
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

      .recipeInfo {
        opacity: 0;
       display: block;
       margin: 80px 15px 0px 10px;
       animation: ${showDialog} 1s 0.3s forwards;
      }

  
      .title_box {
       font-size: 25px;
       text-indent: 0px;
       font-weight: 500;
      }


      img {
       width: 50%;
       transition: all 0.4s;
       height: 95%;
       border-radius: 25px;
       margin: 7px;
      }

      .recipe-info_box {
       display: flex;
       font-size: 12px;
       color: #A9A7A3;
       width: 100%;
      }


      .level {
       margin-left: 5px;
      }

      .main-ingre {
        text-indent: 4px;
        font-size: 14px;
        color: grey;
        margin-top: 10px;
      }

      .recipe-ingre_box {
       font-size: 14px;
       display: flex;
       margin: 5px 0px 15px 0px;
      }

      .ingre-label {
       text-indent: 10px;
       font-size: 13px;
      }

      .ingres {
       font-size: 11px;
       margin-left: 5px;
      }

      .ingres > span {
       padding: 3px 8px;
       background-color: #EAEAEA;
       border-radius: 30px;
       margin-right:5px;ƒ
      }

      .description_box {
       font-size: 13px;
       margin-top: 13px;
      }

      .fa-clock {
        font-size: 12px;
        margin: 4px;
      }

      .bxs-star {
       color: #febd2f;
       font-size: 16px;
      }
    }

  /* 작은카드 */
  .min_box {
    
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: inline-block;
  background-color: #ffffff;
  width: 95%;
  height: 350px;
  margin: 0px 10px;
  margin-bottom: 30px;

  .recipeInfo {
    display: block;
  }

  img {
    width: 95%;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 7px 0px 7px;
  }

  .description_box {
    display: none;
  }

  .level {
    display: none;
  }


  .main-ingre {
     display: none;
      }

  .recipe-info_box {
    display: flex;
    font-size: 12px;
    color: #A9A7A3;
    margin-left: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .userprofile_box {
    margin-right: 20px;
  }

 

  .title_box {
    text-indent: 5px;
    margin-left: 15px;
    font-weight: 500;
  }

  .recipe-ingre_box {
    font-size: 14px;
    display: flex;
    margin: 5px 0px 15px 10px;
  }

  .ingre-label {
    text-indent: 10px;
    font-size: 13px;
  }

  .ingres {
    font-size: 11px;
    margin-left: 5px;
  }

  .fa-clock {
    color: grey;
    font-size: 12px;
    margin: 4px;
 } 

  .ingres > span {
    padding: 3px 8px;
    background-color: #EAEAEA;
    border-radius: 30px;
    margin-right:5px;ƒ
  }
 }

@media screen and (max-width: 1500px) {
    width: 100%;
    margin: 0 auto;

    div {
      display: flex;
    }


    /* 작은카드 */
    .min_box {
      .fa-clock {
        font-size: 12px;
        margin: 4px;
      } 

      .main-ingre {
        display: none;
      }
    }

  }


  @media screen and (max-width: 1024px) {
    div {
    display: block;
  }
    
  .max_box {
      min-width: 92%;
      margin: 10px auto;
    }

    .min_box{
      min-width: 45%;
      margin:10 20px;
    }

  }

  @media screen and (max-width: 768px) {
    div {
    display: block;
  }
    
  .max_box {
      min-width: 92%;
    }

    .min_box{
      min-width: 45%;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 550px) {
    div {
    display: block;
  }
    .max_box {
      display: none;
    }

    .min_box{
      min-width: 90%;
    }
  }

  

  @media screen and (max-width: 375px) {

    
  div {
    display: block;
  }
    .max_box {
      display: none;
    }

    .min_box{
      min-width: 90%;
    }
   
  }
`;

const SearchBox = styled.div`
  width: 80%;
  margin: 10px auto;
  align-items: center;

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

  @media screen and (max-width: 1500px) {
    width: 90%;
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

const PaginationBox = styled.div`
  margin: 15px 30px;
  display: flex;
  justify-content: flex-end;
  div {
    font-size: 17px;
  }
`;
export default AllRecipes;
