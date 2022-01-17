import React from "react";
import AuthLogin from "../views/login/AuthLogin";
import Register from "../views/register/Register";
import CodAuth from "../views/codAut/CodAuth";
import Home from "../views/home/Home";
import Places from "../views/places/Places";
import Episodes from "../views/episodes/Episodes";
import EpisodesId from "../views/episodesId/EpisodesId";

import { Route, Routes } from "react-router-dom";
import { PrivateApp } from "./PrivateApp";
const index = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLogin />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/authetication" element={<CodAuth />}></Route>

      <Route
        path="/"
        element={
          <PrivateApp>
            <Home />
          </PrivateApp>
        }
      ></Route>

      <Route
        path="/lugares"
        element={
          <PrivateApp>
            <Places />
          </PrivateApp>
        }
      ></Route>
      <Route
        path="/episodes"
        element={
          <PrivateApp>
            <Episodes />
          </PrivateApp>
        }
      ></Route>
      <Route
        path="/episodes/:id"
        element={
          <PrivateApp>
            <EpisodesId />
          </PrivateApp>
        }
      ></Route>
    </Routes>
  );
};

export default index;
