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
import { Container } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";
import { TitleBox, ListBox, ListContainer } from '../StyledComponent/mypage_style'

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
        <Container>
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
              {myrecipe && myrecipe.map((recipe, idx) => {
                return <Card recipe={recipe} key={idx} />
              })}             
            </ListBox>
          </ListContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};

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


export default MyRecipe;
