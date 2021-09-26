import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const MyPage = () => {
  return (
    <div>
      <Header id={2}/>
      <section>
        <Container>
          <Sidebar id={0}/>
          <MyInfoContainer>
            <TitleBox>
            <div className='title'>My Page</div>
            </TitleBox>
          </MyInfoContainer>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

const MyInfoContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;
  
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

export default MyPage;
