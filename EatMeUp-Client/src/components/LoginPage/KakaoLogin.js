import React from "react";
import KakaoLogin from "react-kakao-login";

const LoginKakao = () => {
  const token = process.env.REACT_APP_KAKAO_API_KEY;

  return (
    <KakaoLogin
      onSuccess={(res) => console.log(res)}
      onFail={(error) => console.log(error)}
      token={token}
      needProfile={true}
      useLoginForm={true}
    />
  );
};

export default LoginKakao;
