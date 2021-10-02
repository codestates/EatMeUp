import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signupRequest, clearErrors } from "../../_actions/authActions";

import axios from "axios";
import styled from "styled-components";

// 유효성검사 라이브러리
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// 컴포넌트
import AlertBox from "./AlertBox";

// 스타일 컴포넌트
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const { swal } = window;

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { success, loading, error } = useSelector((state) => state.auth);
  const [alert, setAlert] = useState(false);
  const Timer = setTimeout(() => {
    setAlert(false);
  }, 2000);

  useEffect(() => {
    if (error) {
      swal("Please!", "입력한 정보를 다시 확인해주세요.", "error");
      dispatch(clearErrors());
      return;
    }
  }, [dispatch, error, success]);

  const validationSchema = yup.object().shape({
    name: yup.string().min(2).max(10).required(),
    email: yup.string().email().required(),
    pwd: yup.string().min(6).max(10).required(),
    checkPwd: yup
      .string()
      .oneOf([yup.ref("pwd"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const submitForm = (data) => {
    const signupData = {
      username: data.name,
      email: data.email,
      password: data.pwd,
    };

    dispatch(signupRequest(signupData));

    history.push("/login");
  };

  return (
    <StyledContainer>
      <LoginContainer>
        <div className='logo_container'>
          <img
            className='loginLogo'
            src='../food_img/EatMeUp.png'
            alt='loginLogo'
          />
        </div>
        <InputContainer>
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              <input
                {...register("name")}
                name='name'
                className='username'
                type='text'
                placeholder='username'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.name && "이름은 2글자 이상 6글자 이하여야 합니다"}
                </div>
              </div>
            </div>
            <div>
              <input
                {...register("email")}
                name='email'
                className='loginEmail'
                type='email'
                placeholder='email'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.email && "이메일 형식이 올바르지 않습니다"}
                </div>
              </div>
            </div>
            <div>
              <input
                {...register("pwd")}
                name='pwd'
                className='loginPw'
                type='password'
                placeholder='password'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.pwd && "비밀번호는 6글자 이상 10글자 이하여야 합니다"}
                </div>
              </div>
            </div>
            <div>
              <input
                {...register("checkPwd")}
                name='checkPwd'
                className='loginPw'
                type='password'
                placeholder='repeat yout password'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.checkPwd && "비밀번호가 맞지 않습니다!"}
                </div>
              </div>
            </div>
            <BtnContainer>
              <SignUpButton type='submit' value='Sign up'>
                SignUp
              </SignUpButton>
              <StyledLink to='/login'>
                <BackButton>Go to Login</BackButton>
              </StyledLink>
            </BtnContainer>
          </form>
        </InputContainer>
      </LoginContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin: 0 auto;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const LoginContainer = styled(SectionBox)`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 200px auto;
  .logo_container {
    width: 100%;
    height: 70px;
    margin: 15px auto 0 auto;
  }
  .loginLogo {
    width: 45%;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  input {
    border: none;
    border-bottom: 1px solid ${theme.colors.lightgrey};
    margin: 10px 0;
    font-size: 18px;
    width: 50%;
    &:focus {
      outline: none;
      border-bottom: 1px solid ${theme.colors.black};
      transition: all 0.2s ease-in-out;
    }
  }
  .errMsg_container {
    width: 50%;
    margin: 0 auto;
  }
  .errMsg {
    font-size: 12.5px;
    color: ${theme.colors.red};
    text-align: left;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: column;
`;

const SignUpButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  margin: 15px auto;
  cursor: pointer;
`;

const BackButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  background-color: #eaeaea;
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  &:visited {
    color: ${theme.colors.black};
  }
`;

export default Signup;
