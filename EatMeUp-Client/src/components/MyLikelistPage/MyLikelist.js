import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyLikelist } from "../../_actions/userActions";
import { REMOVE_FROM_LIKELIST_RESET } from "../../_types/userTypes";
import { clearErrors } from "../../_actions/userActions";
import { logoutRequest } from "../../_actions/authActions";

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

    if (error) {
      swal("Please!", "로그인이 필요합니다.", "warning");
      dispatch(clearErrors());
      dispatch(logoutRequest());
      history.push("/");
    }
  }, [dispatch, isDeleted, history, error]);

  return (
    <>
      <Header id={2} />
      <section>
        <LikeListContainer>
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
        </LikeListContainer>
      </section>
      <Footer />
    </>
  );
};

const LikeListContainer = styled(Container)`
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
    width: 85%;
  }
  @media screen and (max-width: 450px) {
    padding: 100px 0 70px 0;
    width: 85%;
  }
  @media screen and (max-width: 375px) {
    padding: 90px 0 70px 0;
    width: 100%;
  }
`;

const ListContainer = styled(SectionBox)`
  width: 77%;
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

export default MyLikelist;
