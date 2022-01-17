import React, { useState, useContext, useEffect } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Collapse, Image } from "antd";
import { useParams } from "react-router-dom";
import EpisodeContext from "../../context/episode/episodeContext";

const { Panel } = Collapse;

function EpisodesId() {
  const episodeContext = useContext(EpisodeContext);
  const { getEpisodeId, episodeId } = episodeContext;

  let { id } = useParams();



  useEffect(() => {
    getEpisodeId(id);
  }, []);

  useEffect(() => {}, [episodeId]);

  let dataSource = [episodeId];

  // console.log(dataSource[0].episode);

  function callback(key) {
    console.log(key);
  }
  return (
    <LayoutApp>
      {!episodeId ? (
        <span>Cargando...</span>
      ) : (
        <>
          <Collapse defaultActiveKey={["1"]} onChange={callback}>
            <Panel header="Info" key="1">
              <h3>
                Name of cap:{" "}
                {dataSource[0].episode.nameChapter===undefined ? (
                  <span></span>
                ) : (
                  <span>{dataSource[0].episode.nameChapter}</span>
                )}
              </h3>
              <h4>Fecha:</h4>
              <h4>Episodio:</h4>
            </Panel>
            <Panel header="Personjes" key="2"></Panel>
          </Collapse>
        </>
      )}
    </LayoutApp>
  );
}

export default EpisodesId;
