import React, { useState } from "react";
import { Card, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Enlace from "../../components/button/Enlace";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

const InputEmail = styled(Input)`
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const InputPassword = styled(Input.Password)`
  border-radius: 10px;
  font-size: 14px;
`;

const Cards = styled(Card)`
  border-radius: 10px;
`;

function AuthLogin() {

  let navigate = useNavigate()

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const { email, password } = auth;

  const onChangeAuth = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else {
      alert("Ok!");
      navigate("/authetication")
    }
  };
  return (
    <div className="login-or-register">
      <div className="card-auth">
        <Cards title="Login" bordered={false}>
          <form onSubmit={sendForm}>
            <InputEmail
              name="email"
              value={email}
              onChange={onChangeAuth}
              placeholder="Email"
              allowClear
            />
            <InputPassword
              name="password"
              value={password}
              onChange={onChangeAuth}
              placeholder="Password"
            />
            <button className="button-login">Next</button>
            <Enlace />
          </form>
        </Cards>
      </div>
    </div>
  );
}

export default AuthLogin;
