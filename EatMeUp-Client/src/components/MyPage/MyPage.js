import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
import Card from "../MyRecipePage/sections/Card";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

/* 데이터 */
import { myRecipes } from "../dummydata";

const MyPage = () => {
  return (
    <div>
      <Header id={2} />
      <section>
        <Container>
          <Sidebar id={0} />
          <MyInfoContainer>
            <TitleBox>
              <div className='title'>My Page</div>
            </TitleBox>
            <InfoConatainer>
              <ProfileContainer>
                <div className='img_box'>
                  <i class='far fa-user-circle' id='userimg'></i>
                </div>
                <div className='info1'>
                  username
                  <input placeholder='김코딩' disabled />
                </div>
                <div className='info2'>
                  avatar
                  <input placeholder='kimcoding' disabled />
                </div>
                <div className='info3'>
                  email
                  <input placeholder='kimcoding@eatmeup.me' disabled />
                </div>
                <div className='btn_container'>
                  <Link to='/user/info'>
                    <EditButton>내 정보 수정</EditButton>
                  </Link>
                </div>
              </ProfileContainer>

              <RecipeContainer>
                <MyRecipeBox>
                  <Title>
                    <div className='recipe_title'>My Recipes</div>
                  </Title>
                  <MyCard>ddd</MyCard>
                  <MyCard>ddd</MyCard>
                  <MyCard>ddd</MyCard>
                </MyRecipeBox>
                <LikedRecipeBox>
                  <Title>
                    <div className='recipe_title'>Liked Recipes</div>
                  </Title>
                  <div></div>
                </LikedRecipeBox>
              </RecipeContainer>
            </InfoConatainer>
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
<<<<<<< HEAD
  
=======
>>>>>>> f238a0de4eda42faf63cf11523da7860d0f6b3af
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

const InfoConatainer = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 60px 50px 60px;
`;

const ProfileContainer = styled.div`
  width: 20%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  height: 100%;
  font-size: 14px;
  .img_box {
    text-align: center;
    font-size: 180px;
    width: 100%;
    height: 190px;
    margin: 0 0 80px 0;
    color: ${theme.colors.lightgrey};
    #userimg {
      margin: 20px auto;
      color: ${theme.colors.lightgrey};
    }
  }
  .info1 {
    text-align: center;
    margin: 20px 0;
    font-size: 17px;
    width: 100%;
    height: 50px;
    color: ${theme.colors.gray};
  }
  .info2 {
    text-align: center;
    margin: 20px 0;
    font-size: 17px;
    width: 100%;
    height: 50px;
    color: ${theme.colors.gray};
  }
  .info3 {
    text-align: center;
    margin: 20px 0;
    font-size: 17px;
    width: 100%;
    height: 50px;
    color: ${theme.colors.gray};
  }
  input {
    height: 50px;
    width: 80%;
    text-align: center;
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid ${theme.colors.lightgrey}; */
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Noto Sans KR";
    margin: 0 20px;
    ::placeholder {
      color: ${theme.colors.black};
    }
  }
  .btn_container {
    width: 85%;
    margin: 15% auto;
  }
`;

const RecipeContainer = styled.div`
  width: 65%;
  margin: 0px 20px 0px 10px;
`;

const MyRecipeBox = styled.div`
  width: 100%;
  height: 47%;
  margin: 0 0 3% 2%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const LikedRecipeBox = styled.div`
  width: 100%;
  height: 47%;
  margin: 3% 0 0 2%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const Title = styled.div`
  width: 100%;
  /* height: 90px; */
  font-weight: 500;
  font-size: 24px;
  text-indent: 30px;
  display: flex;
  justify-content: space-between;
  padding: 12px 2px;
`;

const EditButton = styled(LargeBtn)`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  background-color: ${theme.colors.lightgrey};
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  font-family: "Noto Sans KR";
  cursor: pointer;
  &:active {
    background-color: ${theme.colors.gray};
    /* color: white; */
  }
`;

const MyCard = styled.div`
  width: 30px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export default MyPage;
