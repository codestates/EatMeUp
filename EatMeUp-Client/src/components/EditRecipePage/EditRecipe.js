import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

/* 컴포넌트 */
import Header from "../Util/Header";
import Description from "./sections_edit/Description";
import EditIngredient from "./sections_edit/EditIngredient";
import Steps from "./sections_edit/Steps";
import Footer from '../Util/Footer'
import Sidebar from '../Util/Sidebar'

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
         <Sidebar id={1}/>
     
          <BoxContainer>
            {/* 레시피 제목, 설명, 메인이미지 업로드영역 */}
            <MainDCBox>
              <TitleBox>
                <div className='title'>Edit Recipe</div>
              </TitleBox>
              <Description />
            </MainDCBox>

            {/* 재료 추가하는 영역 */}
            <MainDCBox>
              <EditIngredient />
            </MainDCBox>
            
            {/* 요리 단계별 설명하는 영역 */}
            <StepsBox>
              <TitleBox>
                <div className='title'>Cook Recipe</div>
              </TitleBox>
              <Steps />
            </StepsBox>

            {/* 수정완료버튼 영역 */}
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
