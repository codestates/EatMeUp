import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyrecipes } from "../../_actions/userActions";
import { DELETE_MYRECIPE_RESET } from "../../_types/userTypes";
import { clearErrors } from "../../_actions/userActions";
import { logoutRequest } from "../../_actions/authActions";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Card from "./sections/Card";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const { swal } = window;
const MyRecipe = () => {
  const { myrecipe, error } = useSelector((state) => state.myrecipes);
  const { isDeleted } = useSelector((state) => state.myrecipe);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMyrecipes());

    if (isDeleted) {
      dispatch({ type: DELETE_MYRECIPE_RESET });
    }

    if (error) {
      swal("Please!", "로그인이 필요합니다.", "warning");
      dispatch(clearErrors());
      dispatch(logoutRequest());
      history.push("/");
    }
  }, [dispatch, isDeleted, error, history]);

  return (
    <>
      <Header id={2} />
      <section>
        <MyRecipeContainer>
          {/* 사이드바 영역 */}
          <Sidebar id={1} />

          {/* 레시피 리스트 영역 */}
          <ListContainer>
            {/* 레시피만들기버튼 영역 */}
            <TitleBox>
              <div className='title'>My Recipes</div>
              <div className='btn_container'>
                <Link to='/user/myrecipe/create'>
                  <Button fillColor={theme.colors.lightgrey}>
                    <span>레시피 만들기</span>{" "}
                    <i className='fas fa-chevron-right'></i>
                  </Button>
                </Link>
              </div>
            </TitleBox>

            {/* 레시피 리스트 */}
            <ListBox>
              <Card recipes={myrecipe} />
              {/* <EmptyState /> */}
            </ListBox>
          </ListContainer>
        </MyRecipeContainer>
      </section>
      <Footer />
    </>
  );
};

const MyRecipeContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding: 140px 0 70px 0;
  @media screen and (max-width: 1200px) {
    width: 94.7%;
  }
  @media screen and (max-width: 1023px) {
    width: 93%;
  }
  @media screen and (max-width: 768px) {
    padding: 130px 0 70px 0;
    width: 90%;
  }
  @media screen and (max-width: 568px) {
    padding: 110px 0 70px 0;
    width: 95%;
  }
  @media screen and (max-width: 450px) {
    padding: 100px 0 70px 0;
    width: 95%;
  }
  @media screen and (max-width: 375px) {
    padding: 90px 0 70px 0;
    width: 100%;
  }
`;

const ListContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;

  @media screen and (max-width: 1023px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 95%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 10px 20px;
  padding: 10px;

  .btn_container {
    width: 170px;
    margin: 0px 30px;
    @media screen and (max-width: 568px) {
      width: 100px;
    }
    @media screen and (max-width: 450px) {
      width: 100px;
      margin: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 28px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  @media screen and (max-width: 1023px) {
    font-size: 28px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  @media screen and (max-width: 568px) {
    font-size: 24px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 20px;
    width: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    display: block;
    font-size: 25px;
    text-indent: 10px;
    margin: 0;
  }
`;

const Button = styled(LargeBtn)`
  width: 90%;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  span {
    margin: 5px;
  }

  @media screen and (max-width: 568px) {
    /* display: block; */
    width: 100%;
    margin: 0 auto;
    font-size: 12px;
    span {
      margin: 0px;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    display: block;
    margin: 5px 120px 30px 120px;
    font-size: 13px;
    width: 150px;
    height: 35px;
    float: left;
  }
`;

const ListBox = styled.div`
  width: 95%;
  max-width: 1329px;
  margin: 0 auto;
  min-height: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  padding: 10px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 1034px) {
    grid-template-columns: 1fr 1fr;
    gap: 0px;
    padding: 0px;
  }

  @media screen and (max-width: 568px) {
    width: 95%;
    gap: 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    gap: 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

export default MyRecipe;
