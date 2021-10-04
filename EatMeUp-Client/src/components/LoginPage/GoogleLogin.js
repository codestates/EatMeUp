import React from "react";
import GoogleLogin from "react-google-login";

const LoginGoogle = () => {
  return (
    <GoogleLogin
      clientId={130406253664-nmoc4ibk1emsv3q5ocbldg1rm9ut8k7f.apps.googleusercontent.com}
      onSuccess={}
      onFailure={}
      cookiePolicy={'single_host_origin'}
      responseType={'id_token'}
      render={}
    />
  )
}

export default LoginGoogle;