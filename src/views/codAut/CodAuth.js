import React, { useState } from "react";
import { Card, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

const Cards = styled(Card)`
  border-radius: 10px;
`;

function CodAuth() {
  let navigate = useNavigate();

  const [cod, setCod] = useState({
    codigo: "",
  });

  const { codigo } = cod;

  const onChange = (e) => {
    setCod({
      ...cod,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (codigo.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else {
      alert("Success");
      navigate("/");
    }
  };

  return (
    <div className="login-or-register">
      <div className="card-auth">
        <Cards title="authentication code" bordered={false}>
          <form onSubmit={sendForm}>
            <Input
              name="codigo"
              value={codigo}
              onChange={onChange}
              maxLength={6}
              allowClear
            />
            <button className="button-login">Next</button>
          </form>
        </Cards>
      </div>
    </div>
  );
}

export default CodAuth;
