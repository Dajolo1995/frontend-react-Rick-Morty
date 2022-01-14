import React, { useState } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Row, Col, Table, Button } from "antd";
import Search from "./contents/Search";
import styled from "@emotion/styled";
import ModalForm from "./contents/ModalForm";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const RowHeader = styled(Row)`
  margin-bottom: 10px;
`;

const ButtonDelete = styled(Button)`
  color: red;
  background: transparent !important;
  border: none;
  &:hover {
    color: red;
  }
`;

function Episodes() {

  let navigate = useNavigate()
  const [dataSource, setDataSource] = useState([
    {
      id:1,
      character: [
        {
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          characters: "Rick Sanchez",
          status: "Alive",
          species: "Human",
        },
        {
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          name: "Morty Smith",
          status: "Alive",
          species: "Human",
        },
      ],
      location: [
        {
          location: 'name: "Earth (C-137)',
          dimension: "Dimension C-137",
        },
      ],

      //New
      type: "Planet",
      nameCap: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
    },
  ]);


  const columns = [
    {
      title: "Name",
      dataIndex: "nameCap",
      key: "nameCap",
    },
    {
      title: "Dimesion",
      dataIndex: "dimension",
      key: "dimension",
      render: (text, record) => (
        <>
          <span>{dataSource[0].location[0].dimension}</span>
        </>
      ),
    },

    {
      title: "date",
      dataIndex: "air_date",
      key: "air_date",
    },
    {
      title: "episode",
      dataIndex: "episode",
      key: "episode",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (text, record) => (
        <>
          <Button onClick={()=> navigate(`/episodes/${record.id}`)}>
            <EyeOutlined />
          </Button>
          <ButtonDelete>
            <DeleteOutlined />
          </ButtonDelete>
        </>
      ),
    },
  ];

  return (
    <LayoutApp>
      <RowHeader>
        <Col span={20}>
          <Search />
        </Col>
        <Col span={4}>
          <ModalForm />
        </Col>
      </RowHeader>

      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </LayoutApp>
  );
}

export default Episodes;
