import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

function Enlace() {
  let history = useLocation();
  let navigate = useNavigate();

  function handleClick() {
    if (history.pathname === "/auth") navigate("/register");
    else navigate("/auth");
  }

  return (
    <div className="enlace-link">
      <span></span>
      {history.pathname === "/auth" ? (
        <Button onClick={handleClick} type="link">
          Register
        </Button>
      ) : (
        <Button onClick={handleClick} type="link">
          Sign In
        </Button>
      )}
    </div>
  );
}

export default Enlace;
