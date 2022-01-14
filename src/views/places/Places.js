import React, { useState, useEffect } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Table } from "antd";
import Spin from "../../components/tools/Spin";

function Places() {
  let datos = [
    {
      id: 1,
      name: "Earth (C-137)",
      type: "Planet",
      dimension: "Dimension C-137",
    },
    {
      id: 2,
      name: "Abadango",
      type: "Cluster",
      dimension: "unknown",
    },
    {
      id: 3,
      name: "Citadel of Ricks",
      type: "Space station",
      dimension: "unknown",
    },
    {
      id: 4,
      name: "Worldender's lair",
      type: "Planet",
      dimension: "unknown",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Dimesion",
      dataIndex: "dimension",
      key: "dimension",
    },
  ];

  const [data, setData] = useState(0);
  const [dataSource, setDataSource] = useState();

  const TableData = (datos) => {
    let tableData = [];
    datos.forEach((i) => {
      tableData.push({
        name: i.name,
        dimension:i.dimension,
        type: i.type
      });
    });

    return tableData;
  };

  useEffect(() => {
    setTimeout(() => {
      if (!datos) setData(2);
      else setData(1);
    }, 5000);
  }, []);

  useEffect(() => {
    setDataSource(TableData(datos));
  }, []);

  console.log(dataSource);

  return (
    <LayoutApp>
      {data === 0 ? (
        <Spin />
      ) : data === 1 ? (
        <>
          <Table columns={columns} dataSource={dataSource} />
        </>
      ) : (
        <span>No hay datos</span>
      )}
    </LayoutApp>
  );
}

export default Places;
