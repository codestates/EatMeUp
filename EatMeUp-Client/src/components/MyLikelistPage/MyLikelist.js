import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikelist } from "../../_actions/userActions";
import { REMOVE_FROM_LIKELIST_RESET } from "../../_types/userTypes";
import { clearErrors } from '../../_actions/userActions'
import { logoutRequest } from '../../_actions/authActions'

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Card from "./sections/Card";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";

/* 스타일 컴포넌트 */
import { Container, SectionBox } from "../StyledComponent/containers";

const { swal } = window;
const MyLikelist = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { mylikelist, error } = useSelector((state) => state.mylikelist);
  const { isDeleted } = useSelector((state) => state.likelist);
  
  useEffect(() => {
    dispatch(getMyLikelist());

    if (isDeleted) {
      dispatch({ type: REMOVE_FROM_LIKELIST_RESET });
    }

    if(error) {
      swal(
        "Please!",
        "로그인이 필요합니다.",
        "warning",
      );
      dispatch(clearErrors())
      dispatch(logoutRequest()) 
      history.push('/')
    }


  }, [dispatch, isDeleted, history, error]);

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바영역 */}
          <Sidebar id={2} />

          {/* 좋아요한 레시피 리스트 영역 */}
          <ListContainer>
            {/* 좋아요한 레시피 리스트 페이지 타이틀 */}
            <TitleBox>
              <div className='title'>Liked Recipes</div>
            </TitleBox>

            {/* 좋아요한 레시피들 */}
            <ListBox>
              <Card recipes={mylikelist} />
            </ListBox>
          </ListContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};

const ListContainer = styled(SectionBox)`
  width: 77%;
  /* min-height: 720px;
  @media screen and (max-width: 1500px){
    width: 100%;
  } */
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

  @media screen and (max-width: 375px) {
    display: block;
    font-size: 23px;
    text-indent: 10px;
    margin: 0;
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 1034px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 10px;
  }

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

export default MyLikelist;
