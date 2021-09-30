import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest, clearErrors } from "../../_actions/authActions";

/* 스타일 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Loader from "../Util/Loader";

const { swal } = window;

const Landing = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      swal("Please!", "로그아웃 실패, 다시 확인해주세요.", "error");
      dispatch(clearErrors());
      return;
    }
  }, [dispatch, error]);

  const logoutHandler = () => {
    dispatch(logoutRequest());
  };

  return (
    <>
      <Header />

      <button onClick={logoutHandler}>logout</button>

      <Loader />
      <Footer />
    </>
  );
};

export default Landing;
