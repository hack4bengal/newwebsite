import React, {Component} from "react";
import "./HomePage.css";
import "../../App.css";

import Navbar from "../../components/navbar/Navbar";
import WelcomeSection from "../../sections/WelcomeSection/WelcomeSection.jsx";
import InfiniteCarousel from "../../components/InfiniteCarouselSection/InfiniteCarousel.jsx";
import HackathonCountdownSection from "../../sections/HackathonCountdownSection/HackathonCountdownSection.jsx";
import AboutUsSection from "../../sections/AboutUsSection/AboutUsSection.jsx";
import TimelineSection from "../../sections/TimelineSection/TimelineSection.jsx";
import OfflineEventsSection from "../../sections/OfflineEventsSection/OfflineEventsSection.jsx";
import ThemesSection from "../../sections/ThemesSection/ThemesSection.jsx";
import PrizesSection2 from "../../sections/PrizesSection/PrizesSection2.jsx";
import PastSpeakersSection from "../../sections/PastSpeakersSection/PastSpeakersSection.jsx";
import PartnersAndSponsorsSection from "../../sections/PartnersAndSponsorsSection/PartnersAndSponsorsSection.jsx";
import FAQSection from "../../sections/FAQSection/FAQSection.jsx";
import MeetOurTeamSection from "../../sections/MeetOurTeamSection/MeetOurTeamSection.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className=" hack4bengal__navbar-container">
          <Navbar />
        </div>

        <div className=" mx-auto">
          <WelcomeSection />
        </div>

        <InfiniteCarousel />

        <div className="hack4bengal_container hack4bengal_container_vertical">
          <HackathonCountdownSection />
          <AboutUsSection />
          <TimelineSection />
          <OfflineEventsSection />
          <ThemesSection />
          <PrizesSection2 />
          <PastSpeakersSection />
          <PartnersAndSponsorsSection />
          <FAQSection />
          <MeetOurTeamSection />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
