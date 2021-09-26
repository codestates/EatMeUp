import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

/* 스타일 컴포넌트 */
import Footer from "../Util/Footer";
import Slider from "./Slider";
import Card from './sections/Card'

const AllRecipes = () => {
  const { recipes } = useSelector((state) => state.allRecipes);

  return (
    <>
      <Container>
        <Header>
          {/* 왼쪽메뉴(로고, 모든레시피, 마이냉장고메뉴) */}
          <div className='left-menu'>
            <div className='logo'>
              <span>E</span>at<span>M</span>e<span>U</span>p
              {/* <img src='../food_img/EatMeUp3 2.png' alt='logo' /> */}
            </div>
            <div className='menuBtns'>
              <Link to='/recipes'>
                <div className='menu'>모든레시피</div>
              </Link>

              <Link to='/fridge'>
                <div className='menu'>마이냉장고</div>
              </Link>
            </div>
          </div>

          {/* 오른쪽메뉴(로그인, 회원가입, 마이페이지) */}
          <div className='right-menu'>
            <div className='menuBtns'>
              <Link>
                <div className='menu right'>LOGIN</div>
              </Link>
              <Link>
                <div className='menu right'>SIGNUP</div>
              </Link>
            </div>
          </div>
        </Header>

        <MainCard>
          <Slider />
          <ImgBox>
            <img src='../food_img/Cooking-cuate.png' alt='cookingirl' />
          </ImgBox>
        </MainCard>

        {/* 모든 레시피리스트 제목, 리스트 */}
        <RecipeList>
          {recipes.map((recipe, idx) => {
            return (
              <Card key={idx} recipe={recipe} />
            );
          })}
        </RecipeList>
        <Footer />
      </Container>
    </>
  );
};

/* 헤더와 메인카드 css 영역 */
const Container = styled.div`
  width: 100%;
  height: 650px;
  border-radius: 0px 0px 35px 35px;
  background-color: #f4c050;
`;

const Header = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 130px;
    font-family: Fredoka One;
    font-size: 35px;
    text-indent: 30px;
  }

  .logo > span {
    color: white;
  }

  .left-menu {
    display: flex;
    margin-left: 3vw;
  }

  .menuBtns {
    display: flex;
    margin-left: 60px;
  }

  .menu {
    font-weight: bold;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    color: #303030;
  }

  .right-menu {
    margin-right: 5vw;
  }

  .right {
    width: 100px;
    height: 35px;
    border-radius: 30px;
    text-align: center;
    line-height: 35px;
  }

  .right:hover {
    background-color: #f5f3f0;
    color: #f4c050;
  }
`;

/* today's pick 레시피카드와 요리하는 남자이미지 */
const MainCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 35px;
  .swiper {
    width: 1100px;
    height: 500px;
    transition: all 0.6s;
    margin-left: 25px;
    border-radius: 20px;
  }
`;

const ImgBox = styled.div`
  width: 40%;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 레시피 카드들 css영역 */
const RecipeList = styled.div`
  width: 95%;
  column-width: 280px;
  gap: 15px;
  margin: 0 auto;

  @media screen and (max-width: 1500px) {
    column-width: 300px;
  }
`;


export default AllRecipes;
