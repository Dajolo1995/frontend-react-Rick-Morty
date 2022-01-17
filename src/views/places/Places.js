import React, { useState, useEffect } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Collapse, Row, Image, Col } from "antd";
import Spin from "../../components/tools/Spin";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Paginations from "../../components/button/Paginations";
const { Panel } = Collapse;

const Img = styled(Image)`
  width: 240px;
  margin-left: 15px;
`;

const ColPagination = styled(Col)`
margin-top; 10px;
  display: flex;
  justify-content: center
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

function Places() {
  const [pagination, setPagination] = useState(1);
  const [datas, setDatas] = useState(0);
  const [dataSoure, setdataSoure] = useState();

  const { loading, error, data } = useQuery(RICK, {
    variables: {
      page: pagination,
    },
  });

  function callback(key) {
    console.log(key);
  }



  useEffect(() => {
    if (data) {
      setDatas(1);
    } else {
      setTimeout(() => {
        if (!data) setDatas(2);
        setDatas(1);
      }, 10000);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setdataSoure(data.locations.results);
    }
  }, [data]);

  // console.log(dataSoure.residents);

  return (
    <LayoutApp>
      {datas === 0 ? (
        <Spin />
      ) : datas === 2 && !data ? (
        <span>No hay datos</span>
      ) : (
        <>
          <Collapse defaultActiveKey={[1]} onChange={callback}>
            {dataSoure.map((item) => (
              <Panel header={item.name} key={item.id}>
                <Row>
                  <Col span={24}>
                    <h3>
                      Dimension: <span>{item.dimension}</span>
                    </h3>
                    <h3>
                      Tipo: <span>{item.type}</span>
                    </h3>
                    <hr />
                    <h3>Residentes:</h3>
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="div-collapse">
                    {item.residents.map((items) => (
                      <Img src={items.image} />
                    ))}
                  </Col>
                </Row>
              </Panel>
            ))}
          </Collapse>
        </>
      )}

      {/* <Row>
        <ColPagination span={24}>
          <Paginations
            dataSource={data}
            pagination={pagination}
            setPagination={setPagination}
          />
        </ColPagination>
      </Row> */}
    </LayoutApp>
  );
}

export default Places;
