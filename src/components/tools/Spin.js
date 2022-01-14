import React from "react";
import Loading from "../../assets/loading.png";
import { Row, Col } from "antd";
import styled from "@emotion/styled";

const RowText = styled(Row)`
display: flex;
justify-content: center
`

function Spin() {
  return (
    <>
      <Row className="spin-img">
        <img src={Loading} className="App-logo" />
      </Row>

      <RowText>
       
          <h2 style={{textAlign: "center"}}>Cargando...</h2>

      </RowText>
    </>
  );
}

export default Spin;
