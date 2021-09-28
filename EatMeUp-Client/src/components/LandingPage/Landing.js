import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Landing = () => {
  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    axios
      .get("https://api.eatmeup.me/auth/logout", { withCredentials: true })
      .then((response) => {
        if (response.data.success) {
          history.push("/login");
        } else {
          alert("로그아웃에 실패");
        }
      });
  };

  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
      <button><Link to="/login">Login</Link></button>
    </div>
  );
};

export default Landing;
