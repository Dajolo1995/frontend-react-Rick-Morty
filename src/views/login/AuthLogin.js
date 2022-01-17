import React, { useState, useContext, useEffect } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Swal from "sweetalert2";
import AuthContext from "../../context/login/authContext";
import FormLogin from "./contents/FormLogin";
import CodAuth from "../codAut/CodAuth";
import credentials from "../../services/index";

const Cards = styled(Card)`
  border-radius: 10px;
`;

function AuthLogin() {
  let navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const { login, auth, msg, user } = authContext;

  const [access, setAccess] = useState({
    email: "",
    password: "",
  });
  const [cards, setCard] = useState(0);

  let tokens = credentials._store(user);

  const { email, password } = access;

  useEffect(() => {
    if (tokens === true) setCard(1);
  }, [tokens]);

  useEffect(() => {
    if (auth && cards === 0) navigate("/");
  }, []);

  console.log(tokens);

  const onChangeAuth = (e) => {
    setAccess({
      ...access,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    console.log("que pasa");
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else {
      login({
        email,
        password,
      });

      Swal.fire({
        title: "Ok.",
        text: "We have sent a code to your email!",
        icon: "success",
      });
    }
  };

  return (
    <div className="login-or-register">
      <div className="card-auth">
        <Cards title="Login" bordered={false}>
          {cards === 0 ? (
            <FormLogin
              access={access}
              sendForm={sendForm}
              onChangeAuth={onChangeAuth}
            />
          ) : (
            <CodAuth setCard={setCard} />
          )}
        </Cards>
      </div>
    </div>
  );
}

export default AuthLogin;
