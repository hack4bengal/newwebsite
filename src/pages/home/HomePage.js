import React, {Component} from "react";
import "./HomePage.css";
import "../../App.css";

// NavbarSection
import Navbar from "../../components/navbar/Navbar";
// Section1
import WelcomeSection from "../../sections/section1/WelcomeSection";
// Section2
import InfiniteCarouselSection from "../../components/InfiniteCarouselSection/InfiniteCarouselSection";
// Section3
import HackathonCountdownSection from "../../sections/HackathonCountdownSection/HackathonCountdownSection";
// Section
import AboutUsSection from "../../sections/AboutUsSection/AboutUsSection";
// Section5
import TimelineSection from "../../sections/TimelineSection/TimelineSection";
// Section6
import OfflineEventsSection from "../../sections/OfflineEventsSection/OfflineEventsSection";
// Section7
import ThemesSection from "../../sections/ThemesSection/ThemesSection";
// Section8
import PrizesSection from "../../sections/PrizesSection/PrizesSection";
// Section9
import PastSpeakersSection from "../../sections/PastSpeakersSection/PastSpeakersSection";
// Section10
import PartnersAndSponsorsSection from "../../sections/PartnersAndSponsorsSection/PartnersAndSponsorsSection";
// Section11
import FAQSection from "../../sections/FAQSection/FAQSection";
// Section12
import MeetOuTeamSection from "../../sections/MeetOuTeamSection/MeetOuTeamSection";
//FooterSection
import Footer from "../../components/footer/Footer";

// import Section3 from "../../sections/section3/Section3";
// import Section8 from "../../sections/section8/Section8";
// import Timeline from "../../components/timeline/TimelineOne.js";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="hack4bengal__navbar-container">
          <Navbar />
        </div>

        <div className=" mx-auto">
          <WelcomeSection />
        </div>

        <InfiniteCarouselSection />

        <div className="container mx-auto">
          <HackathonCountdownSection />
          <AboutUsSection />
          <TimelineSection />
          <OfflineEventsSection />
          <ThemesSection />
          <PrizesSection />
          <PastSpeakersSection />
          <PartnersAndSponsorsSection />
          <FAQSection />
          <MeetOuTeamSection />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
