import React, { useState, useEffect } from "react";
import "./Register.scss";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    emailId: "",
    vjudgeId: "",
    college: "",
    phone: "",
    password: "",
    role: "",
  });

  const submit = async () => {
    try {
      const data = await axios.post(
        //`https://wit-backend.herokuapp.com/auth/register`,
        "http://localhost:5001/auth/register",
        user
      );
      console.log(data.data);
      localStorage.setItem("emailId", data.data.result.emailId);
      localStorage.setItem("token", data.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="register-main1">
        <div className="register-head">REGISTER</div>
        <form>
          <input
            className="register-input"
            type="text"
            placeholder="First Name"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          ></input>
          <input
            className="register-input"
            type="text"
            value={user.lastName}
            placeholder="Last Name"
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          ></input>
          <input
            className="register-input"
            type="text"
            value={user.userName}
            placeholder="User Name"
            onChange={(e) => {
              setUser({ ...user, userName: e.target.value });
            }}
          ></input>
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
            type="text"
            value={user.vjudgeId}
            placeholder="Vjudge Id"
            onChange={(e) => {
              setUser({ ...user, vjudgeId: e.target.value });
            }}
          ></input>
          <input
            className="register-input"
            type="text"
            value={user.college}
            placeholder="college"
            onChange={(e) => {
              setUser({ ...user, college: e.target.value });
            }}
          ></input>
          <input
            className="register-input"
            type="text"
            value={user.phone}
            placeholder="Phone Number"
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
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
        </form>
        <Button
          className="register-button"
          onClick={() => {
            submit();
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
