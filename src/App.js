import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import {
  Home,
  Calendar,
  NewInventory,
  Inventory,
  Connect,
  Barn,
  Profile,
  EditProfile,
  HeatMap,
} from "./pages/index";

const App = () => {
  const user_token = localStorage.getItem("loggedIn");
  let my_routes = null;

  {
    user_token != null
      ? (my_routes = (
          <Router>
            <Routes>
              <Route path="/" element={<EditProfile />}></Route>
            </Routes>
          </Router>
        ))
      : (my_routes = (
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/inventory" element={<Inventory />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/newinventory" element={<NewInventory />}></Route>
              <Route path="/connect" element={<Connect />}></Route>
              <Route path="/barn" element={<Barn />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/edit-profile" element={<EditProfile />}></Route>
              <Route path="/heatmap" element={<HeatMap />}></Route>
            </Routes>
          </Router>
        ));
  }
  return <div>{my_routes}</div>;
};

export default App;
