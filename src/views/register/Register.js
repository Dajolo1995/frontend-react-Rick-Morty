import React, { useState } from "react";
import { Card, Input } from "antd";
import Enlace from "../../components/button/Enlace";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

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
  const [register, setRegister] = useState({
    user: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { user, email, password, cPassword } = register;

  const onChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const sendRegister = (e) => {
    e.preventDefault();
    if (
      user.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      cPassword.trim() === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else if (password !== cPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match!",
        icon: "error",
      });
    } else {
      alert("Success");
    }
  };

  return (
    <div className="login-or-register">
      <div className="card-auth">
        <CardRegister title="Register" bordered={false}>
          <form onSubmit={sendRegister}>
            <InputEmail
              onChange={onChange}
              name="user"
              placeholder="User"
              value={user}
              allowClear
            />
            <InputEmail
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
