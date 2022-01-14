import React, { useState } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import { Collapse, Image } from "antd";

const { Panel } = Collapse;

function EpisodesId() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
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

  function callback(key) {
    console.log(key);
  }
  return (
    <LayoutApp>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Info" key="1">
          <h3>
            Name of cap:
            <span>{dataSource[0].nameCap}</span>
          </h3>
          <h4>
            Fecha:
            <span>{dataSource[0].air_date}</span>
          </h4>
          <h4>
            Episodio:
            <span>{dataSource[0].episode}</span>
          </h4>
          {dataSource[0].location.map((item) => (
            <>
              <h4> Location: {item.location}</h4>
              <h4> Location: {item.dimension}</h4>
            </>
          ))}
        </Panel>
        <Panel header="Personjes" key="2">
          {dataSource[0].character.map((item) => (
            <>
              <Image src={item.image} />
              <h4>Personaje: {item.name}</h4>
            </>
          ))}
        </Panel>
      </Collapse>
    </LayoutApp>
  );
}

export default EpisodesId;
