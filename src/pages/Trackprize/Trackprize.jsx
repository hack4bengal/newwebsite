import React, { Component } from "react";
import "./Trackprize.css";
import "../../App.css";
import Team from "../../sections/team/Team";
// import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import flow1 from "../../assets/images/winners/trackwinner/flow1.jpg";
import flow2 from "../../assets/images/winners/trackwinner/flow2.jpg";
import flow3 from "../../assets/images/winners/trackwinner/flow3.jpg";
import flow4 from "../../assets/images/winners/trackwinner/flow4.jpg";

import fc1 from "../../assets/images/winners/trackwinner/fc1.jpg";
import fc2 from "../../assets/images/winners/trackwinner/fc2.jpg";

import gdg1 from "../../assets/images/winners/trackwinner/gdg1.jpg";
import gdg2 from "../../assets/images/winners/trackwinner/gdg2.jpg";
import gdg3 from "../../assets/images/winners/trackwinner/gdg3.jpg";

import graph1 from "../../assets/images/winners/trackwinner/graph1.jpg";

import post1 from "../../assets/images/winners/trackwinner/post1.jpg";
import post2 from "../../assets/images/winners/trackwinner/post2.jpg";

import shar1 from "../../assets/images/winners/trackwinner/shar1.jpg";
import shar2 from "../../assets/images/winners/trackwinner/shar2.jpg";

import solana1 from "../../assets/images/winners/trackwinner/solana1.jpg";
import solana2 from "../../assets/images/winners/trackwinner/solana2.jpg";

import tezos1 from "../../assets/images/winners/trackwinner/tezos1.jpg";

import zeve1 from "../../assets/images/winners/trackwinner/zeve1.jpg";
import zeve2 from "../../assets/images/winners/trackwinner/zeve2.jpg";

export default class TrackPage extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbar-container">
          <Navbar />
        </div>
        {/* flow track */}
        <div className="hack4bengal_countdown_main">
          <div>
            <h2>Best use of flow</h2>
            <hr />
            <p>Featuring Hack4Bengal's best use of flow projects</p>

            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={flow1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Finanseer</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={flow2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Who Cares</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={flow3} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team BugByte</p>
                  <p>2nd Runner Up</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={flow4} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Betters</p>
                  <p>2nd Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Filecoin</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of filecoin projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={fc1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team TechSprinters</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={fc2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Betters</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Google cloud</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of Google cloud projects</p>

            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={gdg1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team HackInTech</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={gdg3} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team daabChingri()</p>
                  <p>Winners</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={gdg2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Bug Byte</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Graph</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of Graph projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={graph1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team HexaByte</p>
                  <p>Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Postman</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of postman projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={post1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Black Hats</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={post2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Bug Byte</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Shardeum</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of shardeum projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={shar1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Black Hats</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={shar2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team High on Bugs</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Solana</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of solana projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={solana1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team PutridCookies</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={solana2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team CoderLite</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Tezos</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of Tezos projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={tezos1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Cringe.exe</p>
                  <p>Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hack4bengal_countdown_main">
          <div>
            <h1>Best use of Zeeve</h1>
            <hr />
            <p>Featuring Hack4Bengal's best use of zeeve projects</p>

            {/* <Timer /> */}
            <div className="winnercard_div">
              <div className="winnercard_parent">
                <img src={zeve1} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team Hiveez</p>
                  <p>Winner</p>
                </div>
              </div>
              <div className="winnercard_parent">
                <img src={zeve2} alt="" />

                <div className="winnercard_textdiv">
                  <p>Team HexaByte</p>
                  <p>1st Runner Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hack4bengal__footer-container">
          <Footer doge={true} />
        </div>
      </>
    );
  }
}
