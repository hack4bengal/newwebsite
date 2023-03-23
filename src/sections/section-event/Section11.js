import React from "react";
import "./Section11.css";
import events from "../../assets/data/events.js";
import SpeakerCard from "../../components/speakerCard/SpeakerCard";
import NewEventCard from "./NewEventCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";

const Section11 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: false }}
            className="hack4bengal__section3"
            id="speakers"
        >
            <div className="hack4bengal__section3-title">Events</div>
            <hr />
            <div className="hack4bengal__section3-events-container">
                <Slider {...sliderSettings} className="slider">
                    {events.map((speaker, key) => (
                        <NewEventCard
                            index={key}
                            img={speaker.img}
                            name={speaker.name}
                            position={speaker.position}
                            description={speaker.description}
                            facebook={speaker.facebook}
                            twitter={speaker.twitter}
                            linkedin={speaker.linkedin}
                            github={speaker.github}
                            youtube={speaker.youtube}
                        />
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default Section11;
