import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserinfo,
  getMyLikelist,
  getMyrecipes,
  clearErrors,
} from "../../_actions/userActions";
import { logoutRequest } from "../../_actions/authActions";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
import Loader from "../Util/Loader";

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

  useEffect(() => {
    dispatch(getMyLikelist());
    dispatch(getMyrecipes());
    dispatch(getUserinfo());

    if (error) {
      swal("Please!", "로그인이 필요합니다.", "warning");
      dispatch(clearErrors());
      dispatch(logoutRequest());
      history.push("/");
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
                    {user && user.avatar ? (
                      <img src={user.avatar} alt='userimg' />
                    ) : (
                      <i className='far fa-user-circle' id='userimg'></i>
                    )}
                  </div>
                  <div className='userinfo_box'>
                    <div className='info_username'>
                      name
                      <div className='email'>{user && user.username}</div>
                    </div>
                    <div className='info_email'>
                      email
                      <div className='email'>{user && user.email}</div>
                    </div>
                    <div className='info3'></div>
                    <div className='btn_container'>
                      <Link to='/user/info'>
                        <EditButton>내 정보 수정</EditButton>
                      </Link>
                    </div>
                  </div>
                </ProfileContainer>

                <RecipeContainer>
                  <MyRecipeBox>
                    <Title>
                      <div className='recipe_title'>My Recipes</div>
                      <Link to='/user/myrecipe'>
                        <AddBtn>
                          더 보기 <i className='fas fa-chevron-right'></i>
                        </AddBtn>
                      </Link>
                    </Title>
                    <CardContainer>
                      <ul>
                        {myrecipe &&
                          myrecipe.map((recipe, idx) => {
                            return (
                              <MyCard key={idx}>
                                <div className='img_container'>
                                  <img src={recipe.main_image} alt='main' />
                                </div>
                                <div className='recipe_title'>
                                  {recipe.title}
                                </div>
                              </MyCard>
                            );
                          })}
                      </ul>
                    </CardContainer>
                  </MyRecipeBox>

                  <LikedRecipeBox>
                    <Title>
                      <div className='recipe_title'>Liked Recipes</div>
                      <Link to='/user/likelist'>
                        <AddBtn>
                          더 보기 <i className='fas fa-chevron-right'></i>
                        </AddBtn>
                      </Link>
                    </Title>
                    <CardContainer>
                      <ul>
                        {mylikelist &&
                          mylikelist.map((recipe, idx) => {
                            return (
                              <MyCard key={idx}>
                                <div className='img_container'>
                                  <img src={recipe.main_image} alt='recipe' />
                                </div>
                                <div className='recipe_title'>
                                  {recipe.title}
                                </div>
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
  
  @media screen and (max-width: 1035px) {
    width: 88%;
    margin: 7% 0 1% 0;
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    margin: auto;
    margin: 70px 7px;
  }
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
  @media screen and (max-width: 375px) {
    width: 100%;
    line-height: 40px;
    height: 40px;
    font-size: 24px;
    padding: 0px;
    margin: 30px 0px 10px 0px;
  }
`;

const InfoConatainer = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 60px 50px 60px;

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 0;
  }
  @media screen and (max-width: 775px) {
    display: block;
    margin: 0;
  }
  @media screen and (max-width: 450px) {
    display: block;
    margin: 0;
  }
  @media screen and (max-width: 375px) {
    display: block;
    margin: 0;
  }
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
   img {
     width: 190px;
     height: 190px;
     border-radius: 50%;
   }  
  }
  .info_username {
    text-align: center;
    margin: 20px 0;
    font-size: 17px;
    width: 100%;
    height: 50px;
    color: ${theme.colors.gray};
  }
  .info_email {
    text-align: center;
    margin: 20px 0;
    font-size: 17px;
    width: 100%;
    height: 100px;
    color: ${theme.colors.gray};
  }
  .email {
    height: 40px;
    width: 80%;
    color: ${theme.colors.black};
    text-align: center;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "Noto Sans KR";
    margin: 15px auto 0 auto;
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
  }
  .btn_container {
    width: 85%;
    margin: 15% auto;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .img_box {
      font-size: 140px;
      width: 50%;
      margin: 0px;
      img {
        width: 50%;

      }
      #userimg {
        margin: 0px auto;
        color: ${theme.colors.lightgrey};
      }


    }

    .userinfo_box {
      width: 50%;
    }

    .info_username {
      width: 100%;
      text-align: center;
      margin-top: 5px;
      margin: 0;
    }

    .info_email {
      width: 100%;
      margin: 0;
      text-align: center;
      height: auto;
    }

    .email {
      width: 100%;
      text-align: center;
      margin: 0;
    }
    .btn_container {
      margin: 5px 0px;
    }

    .btn_container > a > button {
      width: 85%;
      height: 35px;
      margin: 0px auto;
      font-size: 14px;
    }
  }

  }
  @media screen and (max-width: 775px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .img_box {
      width: 40%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .img_box {
      width: 40%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .img_box {
      font-size: 70px;
      width: 40%;
      height: 100px;
      margin: 0px;
      img {
       width: 100px;
       height: 100px;
      }
      #userimg {
        margin: 0px auto;
        color: ${theme.colors.lightgrey};
      }
    }
    .userinfo_box {
      width: 60%;
    }

    .info_username {
      width: 100%;
      text-align: left;
      margin-top: 5px;
      margin: 0;
    }

    .info_email {
      width: 100%;
      margin: 0;
      text-align: left;
      height: auto;
    }

    .email {
      text-align: left;
      margin: 0;
    }
    .btn_container {
      margin: 5px 0px;
    }

    .btn_container > a > button {
      width: 85%;
      height: 35px;
      margin: 0px auto;
      font-size: 14px;
    }
  }
`;

const RecipeContainer = styled.div`
  width: 70%;
  margin: 0px 20px 0px 10px;
  @media screen and (max-width: 1034px) {
  
    width: 95%;
    margin: 10px auto;
  }
  @media screen and (max-width: 775px) {
    width: 95%;
    margin: 10px auto;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    margin: 10px auto;
  }
  @media screen and (max-width: 375px) {
    width: 95%;
    margin: 10px auto;
  }
`;

const MyRecipeBox = styled.div`
  width: 100%;
  height: 47%;
  margin: 0 0 3% 2%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;

  @media screen and (max-width: 1034px) {
    min-height: 280px;
    margin: 5px auto;
  }
  @media screen and (max-width: 775px) {
    min-height: 280px;
  }
  @media screen and (max-width: 450px) {
    min-height: 280px;
  }
  @media screen and (max-width: 375px) {
    min-height: 200px;
  }
`;

const LikedRecipeBox = styled.div`
  width: 100%;
  height: 47%;
  margin: 3% 0 0 2%;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  /* background-color: #f90d; */
  @media screen and (max-width: 1034px) {
    min-height: 280px;
    margin: 5px auto;
  }
  @media screen and (max-width: 775px) {
    min-height: 280px;
  }
  @media screen and (max-width: 450px) {
    min-height: 200px;
  }
  @media screen and (max-width: 375px) {
    min-height: 200px;
  }
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
  @media screen and (max-width: 375px) {
    font-size: 15px;
    text-indent: 10px;
    line-height: 40px;
  }
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

  @media screen and (max-width: 375px) {
    width: 80px;
    margin: 0 20px;
  }
`;

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

  @media screen and (max-width: 375px) {
    width: 120px;
    height: 160px;
    margin: 0 5px;
    .img_container {
      width: 80px;
      height: 80px;
    }
  }
`;

export default MyPage;
