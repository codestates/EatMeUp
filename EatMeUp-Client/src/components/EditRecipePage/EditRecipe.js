import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

/* 컴포넌트 */
import Header from "../Util/Header";
import Description from "./sections_edit/Description";
import EditIngredient from "./sections_edit/EditIngredient";
import Steps from "./sections_edit/Steps";
import Footer from '../Util/Footer'

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from '../StyledComponent/containers'
import theme from '../StyledComponent/theme'


const EditRecipe = () => {
 

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
        <Link to="/user/myrecipe"><Sidebar>Home</Sidebar></Link>
     
          <BoxContainer>
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
          </BoxContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};



const Sidebar = styled.div`
  width: 200px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
`;

const BoxContainer = styled.div`
  width: 85%;
  margin-left: 20px;
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

const MainDCBox = styled(SectionBox)`
  width: 100%;
`;

const StepsBox = styled(SectionBox)`
  width: 100%;
  margin-top: 18px;
`;

export default EditRecipe;
