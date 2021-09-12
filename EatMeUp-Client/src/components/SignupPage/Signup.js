import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'

const Signup = () => {

  const history = useHistory();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = (e) => {

    e.preventDefault();

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
            <label>name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
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
          <button onClick={signupHandler}>Login</button>
        </form>
        <Link to='/login'>로그인 하러 가기</Link>
      </div>
    </div>
  );
};

export default Signup;
