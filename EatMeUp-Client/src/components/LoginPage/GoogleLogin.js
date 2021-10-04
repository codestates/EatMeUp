import React from "react";
import GoogleLogin from "react-google-login";

const LoginGoogle = () => {
  const clientId =
    "130406253664-nmoc4ibk1emsv3q5ocbldg1rm9ut8k7f.apps.googleusercontent.com";
  const onSocial = () => {}

  const onSuccess = async (res) => {
    console.log(res);
    const {
      googleId,
      profileObj: { email, name },
    } = res;
    await onSocial({
      socialId: googleId,
      socialType: "google",
      email,
      username: name,
    });
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={(error) => console.log(error)}
      cookiePolicy={"single_host_origin"}
      responseType={"id_token"}
    />
  );
};

export default LoginGoogle;
