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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
