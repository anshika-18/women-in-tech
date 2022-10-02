import React, { useState, useEffect } from "react";
import "./Register.scss";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    emailId: "",
    password: "",
  });
  const submit = async () => {
    try {
      const data = await axios.post(
        //`https://wit-backend.herokuapp.com/auth/login`,
        "http://localhost:5001/auth/login",
        user
      );
      console.log(data.data);
      localStorage.setItem("emailId", data.data.user.emailId);
      localStorage.setItem("token", data.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="register-main">
        <form>
          <div className="register-head">LOGIN</div>
          <input
            className="register-input"
            type="text"
            value={user.emailId}
            placeholder="Email"
            onChange={(e) => {
              setUser({ ...user, emailId: e.target.value });
            }}
          ></input>

          <input
            className="register-input"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          ></input>
          <Button
            className="register-button"
            onClick={() => {
              submit();
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
