import React, { useState, useContext } from "react";
import { Card, Input } from "antd";
import Enlace from "../../components/button/Enlace";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
import UserContext from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";

const CardRegister = styled(Card)`
  width: 70%;
  border-radius: 10px;
`;

const InputEmail = styled(Input)`
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const InputPassword = styled(Input.Password)`
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 14px;
`;

function Register() {
  let navigate = useNavigate();
  const userContext = useContext(UserContext);
  const { registerUser } = userContext;

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { name, email, password, cPassword } = register;

  const onChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const sendRegister = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      cPassword.trim() === ""
    ) {
      Swal.fire({
        title: "Oops!",
        text: "All fields are required!",
        icon: "error",
      });
    } else if (password !== cPassword) {
      Swal.fire({
        title: "Oops!",
        text: "Passwords do not match!",
        icon: "error",
      });
    } else if (password.length <= 7) {
      Swal.fire({
        title: "Oops!",
        text: "The password must be at least 8 characters!",
        icon: "error",
      });
    } else {
      registerUser({
        name,
        email,
        password,
      });
      navigate("/auth");
      setRegister({
        name: "",
        email: "",
        password: "",
        cPassword: "",
      });
    }
  };

  return (
    <div className="login-or-register">
      <div className="card-auth">
        <CardRegister title="Register" bordered={false}>
          <form onSubmit={sendRegister}>
            <InputEmail
              onChange={onChange}
              name="name"
              placeholder="Username"
              value={name}
              allowClear
            />
            <InputEmail
              type={email}
              onChange={onChange}
              name="email"
              value={email}
              placeholder="Email"
              allowClear
            />
            <InputPassword
              onChange={onChange}
              name="password"
              value={password}
              placeholder="Password"
            />
            <InputPassword
              onChange={onChange}
              name="cPassword"
              value={cPassword}
              placeholder="Confirm password"
            />
            <button className="button-login">Next</button>
            <Enlace />
          </form>
        </CardRegister>
      </div>
    </div>
  );
}

export default Register;
