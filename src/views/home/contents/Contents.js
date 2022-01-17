import React from "react";
import { Image, Row, Col } from "antd";
import styled from "@emotion/styled";
import Paginations from "../../../components/button/Paginations";

const ImageCharacter = styled(Image)`
  margin-right: 10px;
`;

const Cols = styled(Col)`
  margin-right: 10px;
`;

const ColPagination = styled(Col)`
margin-top; 10px;
  display: flex;
  justify-content: center
`;

function Contents({ dataSource, pagination, setPagination }) {

  return (
    <>
      <Row>
        {dataSource.results.map((item) => (
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

      <Row>
        <ColPagination span={24}>
          <Paginations
            dataSource={dataSource}
            pagination={pagination}
            setPagination={setPagination}
          />
        </ColPagination>
      </Row>
    </>
  );
}

export default Contents;
