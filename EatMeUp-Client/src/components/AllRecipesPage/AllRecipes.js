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
  const count = Math.ceil(recipeCount / 12);

  useEffect(() => {
    const getPage = {
      page: page,
    };
    dispatch(allRecipes(getPage));

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

  const mainRecipe = [
    {
      title: "불고기 비빔밥",
      description:
        "전 세계인이 사랑하는 한식, 비빔밥과 불고기가 만났어요! 색감이 다양한 야채들과 씹을수록 고소한 불고기까지 듬뿍~ 노른자 톡 터트려 쓱쓱 비벼 먹으면 다른 메뉴 부럽지 않은 완벽한 한 그릇이 된답니다",
      material: ["쇠소기(불고기용)", "당근", "밥1공기"],
      cooking_time: "35",
      level: "보통",
      main_image:
        "https://i.pinimg.com/originals/52/98/41/529841e5fd38290b909cffc74bdef726.jpg",
    },
    {
      title: "감자탕",
      description:
        "감자와 등뼈를 듬뿍 넣고 끓여 낸 감자탕! 그래서 감자탕일까요? 사실 감자탕이라는 이름은 감자와는 무관하다고 해요. 감자탕이라는 이름은 돼지 등뼈에 든 척수를 ‘감자’라고 부른 데서 유래했다는 이야기가 있습니다. 돼지 등뼈와 함께 감자, 우거지, 깻잎, 들깻가루 등을 넣어 푹 끓인 감자탕은 한 끼 식사뿐만 아니라 술안주로도 최고랍니다!",
    material: ["돼지등뼈", "감자", "대파"],
      cooking_time: "60",
      level: "어려움",
      main_image:
        "https://i.pinimg.com/564x/3b/57/85/3b5785807a8866abfe1996ba6fea6997.jpg",
    },
    {
      title: "낙지 연포탕",
      description:
        "대개 낙지를 매운 고추장 양념으로 먹는 것과 달리 연포탕은 낙지를 그대로 요리해 낙지 본연의 맛을 살리는 것이 특징이에요! 연포탕의 뜨끈한 국물을 마시면, 추위도 거뜬하게 이겨낼 힘이 생길 것 같은데요. 바다의 영양을 듬뿍 머금은 낙지와 바지락에 무와 미나리까지 넣어 시원함을 더했답니다. 보약만큼 든든한 낙지 연포탕 레시피를 만나보세요.",
      material: ["낙지", "바지락조개", "알배추"],
      cooking_time: "30",
      level: "보통",
      main_image:
        "https://i.pinimg.com/564x/1a/91/ae/1a91aefc6a9d3c45b2c3fd70552e9e92.jpg",
    },
  ];

 
  const recipeLevel = (level) => {
    if (level === "초보환영") {
      return <i className='bx bxs-star' id='icon'></i>;
    } else if (level === "보통") {
      return (
        <>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
        </>
      );
    } else if (level === "어려움") {
      return (
        <>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
          <i className='bx bxs-star' id='icon'></i>
        </>
      );
    } else {
      return <i className='bx bxs-star' id='icon'></i>;
    }
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
                {mainRecipe.map((card, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={(e) => mainCardHandler(e, idx)}
                      className={currentIdx === idx ? "max_box" : "min_box"}
                      style={
                        currentIdx === idx ? { width: "50%" } : { width: "23%" }
                      }
                    >
                      <img
                        src={card.main_image}
                        alt='recipe'
                        className='recipe-img'
                      />

                      {/* figure태그의 캡션 */}
                      <div className='recipeInfo'>
                        <div className='recipe-info_box'>
                          {/* 요리시간 */}
                          <div className='time'>
                            <i className='far fa-clock'></i> 요리시간{" "}
                            {card.cooking_time}MIN
                          </div>

                          <div className='level'>
                            <spna>/ 난이도 : </spna>
                            {recipeLevel(card.level)}
                          </div>
                        </div>

                        {/* 레시피제목 */}
                        <div className='title_box'>{card.title}</div>
                        <div className='description_box'>
                          <p>{card.description}</p>
                        </div>
                        {/* 레시피 주재료들 */}
                        <div className='main-ingre'>주재료</div>
                        <div className='recipe-ingre_box'>
                          <div className='ingres'>
                            {card.material.map((item, idx) => {
                              return <span key={idx}>#{item}</span>;
                            })}
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
       margin: 70px 15px 0px 10px;
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
       margin-right:5px;
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
    margin-right:5px;
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
