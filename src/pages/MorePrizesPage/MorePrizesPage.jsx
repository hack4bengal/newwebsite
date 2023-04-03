import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import redbtn from "../../assets/themes/redbtn.png";
import themedata from "../../sections/ThemesSection/ThemeData";
import "./MorePrizesPage.css";
import solana from "../../assets/images/sponsers/solana.png"
import shardeum from "../../assets/images/sponsers/shardeum.png"
import fvm from "../../assets/images/sponsers/fvm.png"
import fcf from "../../assets/images/sponsers/fcf.png"
import { Link, useNavigate } from "react-router-dom";
import Postman from "../../assets/images/sponsers/Postman.png";
import CCD from "../../assets/images/sponsers/CCD.png";
import girlsteam from "../../assets/images/sponsers/girlsteam.png";

const MorePrizesPage = () => {

  const navigate = useNavigate();
  let element;

  const gotoId = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    } else {
      window.location.href = "#" + id;
    }
  };


  return (
    <>
      <div className="hack4bengal__navbar-container">
        <Navbar />
      </div>
      <div className="prizepage_container_main">
        <>
          <div className="moreprizesection_god">
            <div className="moreprizesection_parent" id="themes">
              <h1 className="moreprizesection_title">Track prizes, swags <br /> & more !</h1>
              <hr style={{ marginBottom: "70px" }} />

              <div className="moreprizesbox-container">

                {/* SOLANA */}
                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={solana} alt="" className="flip-moreprizesbox-icon" />
                        <h3 className="flip-moreprizesbox-header">
                          Best use of <br /> Solana
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">
                        <p>1st team - ₹40,000</p>
                        <br />
                        <p>2nd team - ₹20,000</p>
                        <br />
                        <p>3rd team - ₹8,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SHARDEUM */}
                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={shardeum} alt="" className="flip-moreprizesbox-icon" />
                        <h3 className="flip-moreprizesbox-header">
                          Best use of <br /> Shardeum
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">
                        <p>1st Team - ₹24,000</p>
                        <p>  2nd Team - ₹16,000</p>
                        <p>Rest of the Prize Pool of ₹24,000 for the Best Projects build on Shardeum.</p>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Filecoin, FVM */}
                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={fvm} alt="" className="flip-moreprizesbox-icon" />

                        <h3 className="flip-moreprizesbox-header">
                          Best use of <br /> Filecoin/FVM
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">
                        <p>2 teams <br /> ₹10,000 each</p>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Postman */}
                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={Postman} alt="" className="flip-moreprizesbox-icon" />

                        <h3 className="flip-moreprizesbox-header">
                          Best use of <br /> API by Postman
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>The winning team members receive a Postman Student Swag Kit <br /> <br /> (Premium Diary, Thermos with Temperature Display, Sticker Sheet, Mobile Pop-up Holder, and Premium Pen)</p>

                      </div>
                    </div>
                  </div>
                </div>


                {/* GIRLS TEAM GDG */}
                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={girlsteam} alt="" className="flip-moreprizesbox-icon" />

                        <h3 className="flip-moreprizesbox-header">
                          Best Girls Team <br /> (GDG Cloud Kolkata)
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">
                        <p>  Best Girls Team of the hackathon to get <br /> <br /> $60 from Google Developer Group Cloud, Kolkata.</p>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="moreprizesbox-item" >
                  <div className="flip-prizebox" onClick={() => { }}>
                    <div
                      className="flip-moreprizesbox-front text-center"

                    >
                      <div className="inner color-white">
                        <img src={CCD} alt="" className="flip-moreprizesbox-icon" style={{ width: "60%", height: "74px" }} />

                        <h3 className="flip-moreprizesbox-header">
                          Hackday <br /> Best Use of Cloud
                        </h3>

                        <img src={redbtn} alt="" className="flip-moreprizesbox-img" />
                      </div>
                    </div>
                    <div
                      className="flip-moreprizesbox-back "

                    >
                      <div className="inner color-white text-center">

                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }} >  1st  - $85 in cash, GCP Credits, along with free tickets to Google Cloud Community Days, Kolkata
                        </p>

                        {window.innerWidth > 800 && <>
                          <br />
                          <br />
                        </>}

                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }} > 2nd & 3rd - Win GCP Credits, along with free tickets to GCCD, Kolkata</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="prizes_btndiv">
            <button
              class="hack4bengal__section10-button"
              onClick={() => {
                gotoId("prizes")
              }}
            >
              Back to home
            </button>
          </div>
        </>
      </div>
      <div className="hack4bengal__footer-container">
        <Footer />
      </div>
    </>
  )
}

export default MorePrizesPage