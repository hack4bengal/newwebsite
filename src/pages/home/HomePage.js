import React, {Component} from "react";
import "./HomePage.css";
import "../../App.css";

// NavbarSection
import Navbar from "../../components/navbar/Navbar";
// Section1
import WelcomeSection from "../../sections/WelcomeSection/WelcomeSection.jsx";
// Section2
import InfiniteCarouselSection from "../../components/InfiniteCarouselSection/InfiniteCarouselSection.jsx";
// Section3
import HackathonCountdownSection from "../../sections/HackathonCountdownSection/HackathonCountdownSection.jsx";
// Section
import AboutUsSection from "../../sections/AboutUsSection/AboutUsSection.jsx";
// Section5
import TimelineSection from "../../sections/TimelineSection/TimelineSection.jsx";
// Section6
import OfflineEventsSection from "../../sections/OfflineEventsSection/OfflineEventsSection.jsx";
// Section7
import ThemesSection from "../../sections/ThemesSection/ThemesSection.jsx";
// Section8
import PrizesSection from "../../sections/PrizesSection/PrizesSection.jsx";
// Section9
import PastSpeakersSection from "../../sections/PastSpeakersSection/PastSpeakersSection.jsx";
// Section10
import PartnersAndSponsorsSection from "../../sections/PartnersAndSponsorsSection/PartnersAndSponsorsSection.jsx";
// Section11
import FAQSection from "../../sections/FAQSection/FAQSection.jsx";
// Section12
import MeetOurTeamSection from "../../sections/MeetOurTeamSection/MeetOurTeamSection.jsx";
//FooterSection
import Footer from "../../components/footer/Footer.jsx";

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
          <MeetOurTeamSection />
        </div>

        <div className="hack4bengal__footer-container">
          <Footer />
        </div>
      </>
    );
  }
}
