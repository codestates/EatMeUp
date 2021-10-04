import React from "react";
import GoogleLogin from "react-google-login";

const LoginGoogle = () => {
  const clientId = process.env.REACT_APP_GOOGLE_API_KEY;
  const onSocial = () => {};

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
