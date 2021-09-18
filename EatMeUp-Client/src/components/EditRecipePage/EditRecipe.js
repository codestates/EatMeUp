import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
/* import component */
import Header from "../Util/Header";
import Description from "./sections_edit/Description";
import EditIngredient from "./sections_edit/EditIngredient";
import Steps from "./sections_edit/Steps";
import { LargeBtn } from "../StyledComponent/buttons";
import theme from '../StyledComponent/theme'


const EditRecipe = () => {
  /* function */

  return (
    <>
      <Header id={2} />
      <section>
        <ContentBox>
        <Link to="/user/myrecipe"><Sidebar>Home</Sidebar></Link>
     
          <Container>
            <MainDCBox>
              <TitleBox>
                <div className='title'>Edit Recipe</div>
              </TitleBox>
              <Description />
            </MainDCBox>
            <MainDCBox>
              <EditIngredient />
            </MainDCBox>
            <StepsBox>
              <TitleBox>
                <div className='title'>Cook Recipe</div>
              </TitleBox>
              <Steps />
            </StepsBox>
            <BtnContainer>
              <LargeBtn fillColor={theme.colors.yellow}>레시피 수정하기</LargeBtn>
            </BtnContainer>
          </Container>
        </ContentBox>
      </section>
    </>
  );
};

const ContentBox = styled.div`
  width: 90%;
  margin: 0.5rem auto;
  display: flex;
  margin-top: 50px;
`;

const Sidebar = styled.div`
  width: 170px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
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
`;

const StepsBox = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 18px;
`;
export default EditRecipe;
