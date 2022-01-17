import React, { useState, useContext } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import credentials from "../../services/index";
import AuthContext from "../../context/login/authContext";

function CodAuth({ setCard }) {
  const authContext = useContext(AuthContext);
  const { cerrar } = authContext;

  let navigate = useNavigate();

  const [cod, setCod] = useState({
    codigo: "",
  });

  const { codigo } = cod;

  const onClickClose = () => {
    cerrar();
    setCard(0)

  };

  const onChange = (e) => {
    setCod({
      ...cod,
      [e.target.name]: e.target.value,
    });
  };

  let data = credentials.getUser();



  const sendForm = (e) => {
    e.preventDefault();
    if (codigo.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "All fields are required!",
        icon: "error",
      });
    } else if (codigo !== data.cod) {
      Swal.fire({
        title: "Error!",
        text: "The code is wrong!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Ok!",
        text: "Welcome",
        icon: "success",
      });
      navigate("/");
    }
  };

  return (
    <>
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
      <Button type="link" onClick={onClickClose}>
        Previous
      </Button>
    </>
  );
}

export default CodAuth;
