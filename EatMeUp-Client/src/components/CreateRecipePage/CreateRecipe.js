import React from "react";
import styled from "styled-components";

/* import component */
import Header from "../Util/Header";
import Description from "./sections_add/Description";
import AddIngredient from "./sections_add/AddIngredient";
import Steps from "./sections_add/Steps";
import { LargeBtn } from "../StyledComponent/buttons";
import theme from '../StyledComponent/theme'
const CreateRecipe = () => {
  /* function */

  return (
    <>
      <Header />
      <section>
        <ContentBox>
          <Sidebar>Home</Sidebar>
          <Container>
            <MainDCBox>
              <TitleBox>
                <div className='title'>New Recipe</div>
              </TitleBox>
              <Description />
            </MainDCBox>
            <MainDCBox>
              <AddIngredient />
            </MainDCBox>
            <MainDCBox>
              <TitleBox>
                <div className='title'>Cook Recipe</div>
              </TitleBox>
              <Steps />
            </MainDCBox>
            <BtnContainer>
              <LargeBtn fillColor={theme.colors.yellow}>레시피 추가하기</LargeBtn>
            </BtnContainer>
          </Container>
        </ContentBox>
      </section>
    </>
  );
};

const ContentBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

`;

const Sidebar = styled.div`
  width: 200px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 85%;
  margin-left: 25px;
`;

const BtnContainer = styled.div`
  width: 85%;
  height: 100px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const TitleBox = styled.div`
  width: 100%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
`;

const MainDCBox = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 25px;
`;

export default CreateRecipe;
