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
import { Container } from "../StyledComponent/containers"
import { TitleBox, ListBox, ListContainer } from '../StyledComponent/mypage_style'

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
              {mylikelist && mylikelist.map((recipe, idx) => {
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




export default MyLikelist;
