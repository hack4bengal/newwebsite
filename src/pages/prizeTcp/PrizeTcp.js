import React, { Component } from "react";
import "./PrizeTcp.css";
import "../../App.css";
import Team from "../../sections/team/Team";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Prize from "../../sections/prize/Prize";
export default class PrizeTcp extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbarTeam-container">
          <NavbarTeam />
        </div>
        <div className="container mx-auto">
          <Prize />
        </div>
      </>
    );
  }
}
