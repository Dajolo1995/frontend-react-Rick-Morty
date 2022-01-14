import React from "react";
import { Image, Row, Col } from "antd";
import styled from "@emotion/styled";

const ImageCharacter = styled(Image)`
  margin-right: 10px;
`;

const Cols = styled(Col)`
  margin-right: 10px;
`;

function Contents({ datos }) {
  console.log(datos);
  return (
    <Row>
      {datos.map((item) => (
        <Cols>
          <ImageCharacter src={item.image} width={250} />
          <h3>
            Name: <span>{item.name}</span>
          </h3>
          <h4>
            Status: <span>{item.status}</span>
          </h4>
          <h4>
            Species: <span>{item.species}</span>
          </h4>
          <h4>
          gender: <span>{item.gender}</span>
          </h4>
        </Cols>
      ))}
    </Row>
  );
}

export default Contents;
