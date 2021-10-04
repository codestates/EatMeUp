import React from "react";
import KakaoLogin from "react-kakao-login";

const LoginKakao = () => {
  const token = '0a907ff93436c5bc151e611ff1b34ba5';

  return (
    <KakaoLogin
      onSuccess={res => console.log(res)}
      onFail={error => console.log(error)}
      token={token}
      needProfile={true}
      useLoginForm={true}
    />
  )
}

export default LoginKakao;