import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TeamTCP from "./pages/teamTcp/TeamTcp";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import PrizeTcp from "./pages/prizeTcp/PrizeTcp";
import EventTcp from "./pages/eventTcp/EventTcp";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamTCP />} />
          <Route path="/prizes" element={<PrizeTcp />} />
          <Route path="/events" element={<EventTcp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
