import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "300px", height: "150px", border: "1px solid black" }}
      >
        <form>
          <div>
            <label>email</label>
            <input 
            type='text' 
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label>password</label>
            <input 
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type='password' 
            />
          </div>
          <button onClick={loginHandler}>Login</button>
          
        </form>
        <Link to="/signup">회원가입하러 가기</Link>
      </div>
    </div>
  );
};

export default Login;
