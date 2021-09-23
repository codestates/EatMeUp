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
          <Sidebar id={1}/>

          {/* 레시피 리스트 영역 */}
          <ListContainer>
            {/* 레시피만들기버튼 영역 */}
            <TitleBox>
              <div className='title'>My Recipes</div>
              <div>
                <Link to='/user/myrecipe/create'>
                  <Button fillColor={theme.colors.lightgrey}>
                    <span>레시피 만들기</span> <i className="fas fa-chevron-right"></i>
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

const ListContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;
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
  margin: 5px 20px 10px 20px;
  padding: 10px;
`;

const Button = styled(LargeBtn)`
  margin-right: 70px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  span {
    margin: 8px;
  }
`;

const ListBox = styled.div`
  width: 95%;
  max-width: 1329px;
  margin: 0 auto;
  min-height: 720px;
  column-width: 300px;
  gap: 15px;
  padding: 10px;
`;

export default MyRecipe;
