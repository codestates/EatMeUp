import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";

// 컴포넌트
import AlertBox from "../SignupPage/AlertBox";

// 스타일 컴포넌트
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    axios
      .post("https://api.eatmeup.me/auth/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        res.data.success && history.push("/");
      });
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
          <form onSubmit={handleSubmit(loginHandler)}>
            <div>
              <input
                {...register("email", {
                  required: "email error",
                })}
                name='email'
                className='loginEmail'
                type='email'
                placeholder='email'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.email && "이메일을 입력해주세요"}
                </div>
              </div>
            </div>
            <div>
              <input
                {...register("password", { required: "password error" })}
                name='password'
                className='loginPw'
                type='password'
                placeholder='password'
              />
              <div className='errMsg_container'>
                <div className='errMsg'>
                  {errors.password && "비밀번호를 입력해주세요"}
                </div>
              </div>
            </div>
            <LoginButton className='loginBtn' type='submit' value='Login'>
              Login
            </LoginButton>
          </form>
        </InputContainer>
        <SocialButton>
          <div className='google'>
            <span>
              <img className='google_logo' src='../food_img/google_logo.png' />
            </span>
            <span className='google_text'> Login with Google</span>
          </div>
        </SocialButton>
        <LoginEnd>
          <div className='loginLine'>
            <StyledLink to='/signup'>
              <SignUpButton>SignUp</SignUpButton>
            </StyledLink>
          </div>
          <div className='noUser'>Guest Login</div>
        </LoginEnd>
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
    margin: 0 auto;
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
    margin: 20px 0;
    font-size: 18px;
    width: 50%;
    /* height: 100%; */
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

const LoginButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  margin: 15px auto;
  cursor: pointer;
`;

const SocialButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  margin: 0 auto;
  background-color: white;
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.lightgrey};
  cursor: pointer;
  .google_logo {
    vertical-align: top;
    width: 22px;
  }
  .google_text {
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 600;
  }
`;

const SignUpButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  background-color: #eaeaea;
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  margin: 15px auto;
  cursor: pointer;
`;

const LoginEnd = styled.div`
  width: 100%;
  margin: 0 auto;
  .loginLine {
    width: 100%;
  }
  .noUser {
    width: 30%;
    margin: 0 auto;
    color: ${theme.colors.gray};
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:visited {
    color: ${theme.colors.black};
  }
`;

export default Login;
