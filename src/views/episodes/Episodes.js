import React, { useState, useEffect, useContext } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Row, Col, Table, Button } from "antd";
import Search from "./contents/Search";
import styled from "@emotion/styled";
import ModalForm from "./contents/ModalForm";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import EpisodeContext from "../../context/episode/episodeContext";
import { gql, useQuery } from "@apollo/client";

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

const RICK = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          species
          image
        }
      }
    }
  }
`;

function Episodes() {
  const episodeContext = useContext(EpisodeContext);
  const { episode, getEpisode, createEpisode, deleteEpisode } = episodeContext;
  const [pagination, setPagination] = useState(1);
  let navigate = useNavigate();

  const [dataSource, setDataSource] = useState();
  const { loading, error, data } = useQuery(RICK, {
    variables: {
      page: pagination,
    },
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "nameCap",
      key: "nameCap",
    },
    {
      title: "episode",
      dataIndex: "episode",
      key: "episode",
    },
    {
      title: "date",
      dataIndex: "air_date",
      key: "air_date",
    },

    {
      title: "",
      dataIndex: "",
      key: "",
      render: (text, record) => (
        <>
          {/* <Button onClick={() => navigate(`/episodes/${record.id}`)}>
            <EyeOutlined />
          </Button> */}
          <ButtonDelete onClick={()=> deleteEpisode(record.id)}>
            <DeleteOutlined />
          </ButtonDelete>
        </>
      ),
    },
  ];

  useEffect(() => {
    getEpisode();
  }, []);

  useEffect(() => {
    setDataSource(TableData(episode));
  }, [episode]);

  const TableData = (episode) => {
    let tableData = [];
    episode.forEach((i) => {
      tableData.push({
        id: i.id,
        nameCap: i.nameChapter,
        air_date: i.date,
        episode: i.nameEpisode,
      });
    });
    return tableData;
  };

  return (
    <LayoutApp>
      <RowHeader>
        <Col span={20}>
          <Search />
        </Col>
        <Col span={4}>
          <ModalForm createEpisode={createEpisode} data={data} />
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
