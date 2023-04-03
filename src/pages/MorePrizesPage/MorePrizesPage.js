import React, {Component} from "react";
import "../../App.css";

import Prize from "../../sections/MorePrizesSection/MorePrizesSection";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default class MorePrizesPage extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbar-container">
          <Navbar />
        </div>
        <div className="teampage_container_main">
          <Prize />
        </div>
        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
