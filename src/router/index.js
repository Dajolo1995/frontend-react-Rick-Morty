import React from "react";
import AuthLogin from "../views/login/AuthLogin";
import Register from "../views/register/Register";
import CodAuth from "../views/codAut/CodAuth";
import Home from "../views/home/Home";
import Places from "../views/places/Places";
import Episodes from "../views/episodes/Episodes";
import EpisodesId from "../views/episodesId/EpisodesId";

import { Route, Routes } from "react-router-dom";
const index = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLogin />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/authetication" element={<CodAuth />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/lugares" element={<Places />}></Route>
      <Route path="/episodes" element={<Episodes />}></Route>
      <Route path="/episodes/:id" element={<EpisodesId />}></Route>
    </Routes>
  );
};

export default index;
