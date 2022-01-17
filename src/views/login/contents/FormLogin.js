import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import Enlace from "../../../components/button/Enlace";


const InputEmail = styled(Input)`
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const InputPassword = styled(Input.Password)`
  border-radius: 10px;
  font-size: 14px;
`;

function FormLogin({ access, sendForm, onChangeAuth }) {
  const { email, password } = access;

  return (
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
  );
}

export default FormLogin;
