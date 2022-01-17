import React, { useState, useEffect, useContext } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import Spin from "../../components/tools/Spin";
import Contents from "./contents/Contents";
import ApiContext from "../../context/api/apiContext";

function Home() {
  const apiContext = useContext(ApiContext);
  const { character, getCharacter } = apiContext;
  const [data, setData] = useState(0);
  const [dataSource, setDataSource] = useState();
  const [pagination, setPagination] = useState(1);



  useEffect(() => {
    getCharacter(pagination);
  }, [pagination]);

  useEffect(() => {
    setDataSource(character);
  }, [character]);

  useEffect(() => {
    if (dataSource) {
      setData(1);
    } else {
      setTimeout(() => {
        if (!dataSource) setData(2);
        setData(1);
      }, 2000);
    }
  }, []);

  return (
    <LayoutApp>
      {data === 0 ? (
        <Spin />
      ) : data === 1 ? (
        <>
          {
            <Contents
              dataSource={dataSource}
              pagination={pagination}
              setPagination={setPagination}
            />
          }
        </>
      ) : (
        <span>No hay datos</span>
      )}
    </LayoutApp>
  );
}

export default Home;
