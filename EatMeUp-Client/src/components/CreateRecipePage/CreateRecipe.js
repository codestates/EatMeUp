import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

/* 컴포넌트 */
import Header from "../Util/Header";
import Description from "./sections_add/Description";
import AddIngredient from "./sections_add/AddIngredient";
import Steps from "./sections_add/Steps";
import Footer from '../Util/Footer'
import Sidebar from '../Util/Sidebar'

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from '../StyledComponent/containers'
import theme from "../StyledComponent/theme";


const CreateRecipe = () => {
  /* function */

  return (
    <>
      <Header id={2} />
      <section>
        <Container>

          {/* 사이드바 컴포넌트 */}
          <Sidebar id={1}/>
         
         {/* 레시피 만들기 컨테이너 */}
          <BoxContainer>

            {/* 제목, 요리설명, 메인이미지 컴포넌트 */}
            <MainDCBox>
              <TitleBox>
                <div className='title'>New Recipe</div>
              </TitleBox>
              <Description />
            </MainDCBox>

            {/* 재료 추가 컴포넌트 */}
            <MainDCBox>
              <AddIngredient />
            </MainDCBox>

            {/* 레시피 메뉴얼 작성 컴포넌트 */}
            <StepsBox>
              <TitleBox>
                <div className='title'>Cook Recipe</div>
              </TitleBox>
              <Steps />
            </StepsBox>

            {/* 레시피 추가버튼 영역 */}
            <BtnContainer>
              <LargeBtn fillColor={theme.colors.yellow}>
                레시피 추가하기
              </LargeBtn>
            </BtnContainer>
          </BoxContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};


const BoxContainer = styled.div`
  width: 77%;
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
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
  padding: 10px;
`;

const MainDCBox = styled(SectionBox)`
  width: 100%;
`;

const StepsBox = styled(SectionBox)`
  width: 100%;
  margin-top: 18px;
`;

export default CreateRecipe;
