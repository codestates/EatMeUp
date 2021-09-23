import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Card from "./sections/Card";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

/* 데이터 */
import { myRecipes } from "../dummydata";

const MyRecipe = () => {
  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바 영역 */}
          <Sidebar />

          {/* 레시피 리스트 영역 */}
          <ListContainer>
            {/* 레시피만들기버튼 영역 */}
            <TitleBox>
              <div className='title'>My Recipes</div>
              <div>
                <Link to='/user/myrecipe/create'>
                  <Button fillColor={theme.colors.yellow}>
                    레시피 만들기 <i className='fas fa-play'></i>
                  </Button>
                </Link>
              </div>
            </TitleBox>

            {/* 레시피 리스트 */}
            <ListBox>
              <Card recipes={myRecipes} />
            </ListBox>
          </ListContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};

const ListContainer = styled.div`
  width: 75%;
  min-height: 720px;
  margin: 0 auto;

  @media screen and (max-width: 1500px){
    width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled(LargeBtn)`
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
`;

const ListBox = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: 720px;
  column-width: 300px;
  gap: 15px;
`;

export default MyRecipe;
