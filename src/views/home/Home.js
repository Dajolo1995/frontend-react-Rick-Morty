import React, { useState, useEffect } from "react";
import LayoutApp from "../../components/layout/LayoutApp";
import Spin from "../../components/tools/Spin";
import Contents from "./contents/Contents";

function Home() {
  let datos = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },

    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
  ];

  const [data, setData] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!datos) setData(2);
      else setData(1);
    }, 5000);
  }, []);

  return (
    <LayoutApp>
      {data === 0 ? (
        <Spin />
      ) : data === 1 ? (
        <>
          <Contents datos={datos} />
        </>
      ) : (
        <span>No hay datos</span>
      )}
    </LayoutApp>
  );
}

export default Home;
