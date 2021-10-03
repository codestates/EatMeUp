import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserinfo,
  getMyLikelist,
  getMyrecipes,
  clearErrors,
} from "../../_actions/userActions";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
import Loader from "../Util/Loader";
import Card from "../MyRecipePage/sections/Card";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const { swal } = window;
const MyPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, loading, error } = useSelector((state) => state.user);
  const { mylikelist } = useSelector((state) => state.mylikelist);
  const { myrecipe } = useSelector((state) => state.myrecipes);

  const [getUser, setGetUser] = useState({
    username: "",
    email: "",
    avatar: null,
  })

  useEffect(() => {
    dispatch(getMyLikelist());
    dispatch(getMyrecipes());
    dispatch(getUserinfo());

    setGetUser(user)
  
    if(error) {
      swal(
        "Please!",
        "로그인이 필요합니다.",
        "warning",
      );
      dispatch(clearErrors());
      history.push('/');
      return;
    }
  }, [dispatch, history, error]);

  return (
    <div>
      <Header id={2} />
      <section>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <Sidebar id={0} />
            <MyInfoContainer>
              <TitleBox>
                <div className='title'>My Page</div>
              </TitleBox>
              <InfoConatainer>
                <ProfileContainer>
                  <div className='img_box'>
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt='userimg'
                        style={{
                          width: "190px",
                          height: "190px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <i class='far fa-user-circle' id='userimg'></i>
                    )}
                  </div>
                  <div className='info1'>
                    name
                    <input placeholder={getUser.username} disabled />
                  </div>
                  <div className='info2'>
                    email
                    <input placeholder={user.email} disabled />
                  </div>
                  <div className='info3'></div>
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
                      <Link to='/user/myrecipe'>
                        <AddBtn>더 보기  <i class="fas fa-chevron-right"></i></AddBtn>
                      </Link>
                    </Title>
                    <CardContainer>
                      <ul>
                        {myrecipe.map((recipe, idx) => {
                          return (
                            <MyCard key={idx}>
                              <div className='img_container'>
                                <img src={recipe.main_image} alt='main' />
                              </div>
                              <div className='recipe_title'>{recipe.title}</div>
                            </MyCard>
                          );
                        })}
                      </ul>
                    </CardContainer>
                  </MyRecipeBox>

                  <LikedRecipeBox>
                    <Title>
                      <div className='recipe_title'>Liked Recipes</div>
                      <Link to='/user/myrecipe'>
                        <AddBtn>더 보기  <i class="fas fa-chevron-right"></i></AddBtn>
                      </Link>
                    </Title>
                    <CardContainer>
                      <ul>
                        {mylikelist.map((recipe, idx) => {
                          return (
                            <MyCard key={idx}>
                              <div className='img_container'>
                                <img src={recipe.main_image} alt='recipe' />
                              </div>
                              <div className='recipe_title'>{recipe.title}</div>
                            </MyCard>
                          );
                        })}
                      </ul>
                    </CardContainer>
                  </LikedRecipeBox>
                </RecipeContainer>
              </InfoConatainer>
            </MyInfoContainer>
          </Container>
        )}
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
  width: 90%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 10px 20px;
  padding: 10px;
  .title {
    box-sizing: border-box;
  }
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
  width: 70%;
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
  /* background-color: #f90d; */
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
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
  }
`;

const AddBtn = styled(LargeBtn)`
  width: 100px;
  background-color: white;
  border: 1px solid ${theme.colors.lightgrey};
  margin: 0 30px;
  &:active {
    background-color: ${theme.colors.lightgrey};
  }
`

const CardContainer = styled.div`
  list-style: none;
  width: 100%;
  margin: 0 auto;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.lightgrey};
    border-radius: 30px;
  }
`;

const MyCard = styled.li`
  display: inline-block;
  width: 160px;
  height: 190px;
  margin: 0 15px;
  border-radius: 30px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  .img_container {
    width: 110px;
    height: 110px;
    margin: 25px auto 13px auto;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 110px;
  }
  .recipe_title {
    text-align: center;
    width: 100%;
    font-size: 16px;
  }
`;

export default MyPage;
