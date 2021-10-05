import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import {
  loginRequest,
  clearErrors,
  guestLoginRequest,
  GoogleLoginRequest,
  KakaoLoginRequest
} from "../../_actions/authActions";

// 소셜로그인
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";

// 스타일 컴포넌트
import { LargeBtn } from "../StyledComponent/buttons";
import { SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const { swal } = window;

const Login = ({ setShowLogin, setShowSignup }) => {
  // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(
    (state) => state.auth,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    
    if (error) {
      swal("Please!", "로그인 정보를 다시 확인해주세요.", "error");
      dispatch(clearErrors());
      return;
    }
  }, [dispatch, isAuthenticated, error, history]);

  const loginHandler = (data) => {
    dispatch(loginRequest(data));
  };

  const googleSuccess = (res) => {
    console.log(res);
    const data = {
      id: res.googleId,
      email: res.profileObj.email,
      username: res.profileObj.name,
      avatar: res.profileObj.imageUrl,
    }
    dispatch(GoogleLoginRequest(data));
  };

  const kakaoSuccess = (res) => {
    const data = {
      id: res.profile.id,
      email: res.profile.kakao_account.email,
      username: res.profile.kakao_account.profile.nickname,
      avatar: res.profile.kakao_account.profile.profile_image_url,
    }
    dispatch(KakaoLoginRequest(data))
  }

  const submitGuest = () => {
    const date = Date.now();
    const GuestData = {
      username: "guest",
      email: `guest_${date}@eatmeup.me`,
      password: `123456`,
    };

    dispatch(guestLoginRequest(GuestData));
    history.push("/");
    setShowLogin(false);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const signupHandler = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <StyledContainer>
        <LoginContainer>
          <div className='closeBtn'>
            <i onClick={closeLoginModal} className='fas fa-times'></i>
          </div>
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

          <LoginEnd>
            <div className='loginLine'>
              {/* <StyledLink to='/signup'> */}
              <SignUpButton onClick={signupHandler}>SignUp</SignUpButton>
              {/* </StyledLink> */}
            </div>
            <form onSubmit={handleSubmit(submitGuest)}>
              {/* <form Control type /> */}
              <button onClick={submitGuest} type='submit' className='noUser'>
                Guest Login
              </button>
            </form>

            <GoogleBtn
              // icon={false}
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              // buttonText=''
              onSuccess={googleSuccess}
              onFailure={(error) => console.log(error)}
              cookiePolicy={"single_host_origin"}
              responseType={"id_token"}
              render={(renderProps) => (
                <button
                style={{
                  width: 50,
                  border: "none",
                  backgroundColor: "white",
                  margin: 5,
                  padding: 0,
                  cursor: "pointer"
                  }}
                  className='google'
                  onClick={renderProps.onClick}
                >
                  <img src='../food_img/google_logo.png' width='37' />
                </button>
              )}
            />

            <KakaoBtn
              buttonText='Login with kakao'
              id='kakaobutton'
              onSuccess={kakaoSuccess}
              onFail={(error) => console.log(error)}
              token={process.env.REACT_APP_KAKAO_API_KEY}
              needProfile={true}
              useLoginForm={true}
              style={{ color: "white", fontSize: 20, margin: 5, padding: 0 }}
            >
              <img src='../food_img/kakao.png' width='20' />
            </KakaoBtn>
          </LoginEnd>
        </LoginContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 15px 15px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.15s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const showDialog = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const LoginContainer = styled(SectionBox)`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 10% auto;
  animation: ${showDialog} 0.5s forwards;
  position: relative;

  .closeBtn {
    position: absolute;
    top: 13px;
    left: 450px;
    font-size: 24px;
    color: grey;
    cursor: pointer;
  }
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
  margin: 10px auto;
  cursor: pointer;
`;

const SocialButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  margin: 0 auto 10px auto;
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
    margin: 0 0 0 5px;
  }
  .kakao_logo {
    vertical-align: middle;
    height: 28px;
  }
  .kakao_text {
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0 5px;
  }
`;

const GoogleBtn = styled(GoogleLogin)`
`;

const KakaoBtn = styled(KakaoLogin)`
  background-color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-family: "Noto Sans KR";
  font-size: 22px;
  img {
    width: 40px;
  }
`;

const SignUpButton = styled(LargeBtn)`
  width: 50%;
  height: 50px;
  background-color: #eaeaea;
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto 10px auto;
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
    margin: 10px auto 30px auto;
    color: ${theme.colors.gray};
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: white;
    border: none;
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
