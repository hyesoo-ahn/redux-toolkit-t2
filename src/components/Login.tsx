import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

const Login = () => {
  const dispatch = useDispatch();
  // 이거쓰면 actions 보낼 수 있음.
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "해수", age: 20, email: "email@gmail.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
