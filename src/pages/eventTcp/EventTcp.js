import React, { Component } from "react";
import "../../App.css";
import Event from "../../sections/event/Event.js";

import NavbarTeam from "../../components/navbarTeam/NavbarTeam";

export default class EventTcp extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbarTeam-container">
          <NavbarTeam />
        </div>
        <div className="container mx-auto">
          <Event />
        </div>
      </>
    );
  }
}
