import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TeamTCP from "./pages/teamTcp/TeamTcp";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import PrizeTcp from "./pages/prizeTcp/PrizeTcp";
import EventTcp from "./pages/eventTcp/EventTcp";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import CodeofConduct from "./pages/coc/CodeofConduct";
import Assets from "./pages/assets/Assets";
import Register from "./pages/register/Register";
import Evengelist from "./pages/evangelist/Evengelist";
import Partner from "./pages/cp/cp";
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
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="tnc" element={<Terms />} />
          <Route path="coc" element={<CodeofConduct />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/register" element={<Register />} />
          <Route path="/evangelist" element={<Evengelist />} />
          <Route path="/cp" element={<Partner />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
