import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import "./Venue.css"

const Venue = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: false }}
                className="hack4bengal__section2"
            >


                <div className="h4b_about_main">
                    <div id="venue">
                        <div >
                            <h1>Venue</h1>
                            <hr />

                            <div className="venue_description">
                                Sister Nivedita University (SNU), DG 1/2 New Town, Action Area 1, Kolkata - 700156

                                <div className='venue_buttondiv'>
                                    <Link to="/venue" className='venue_button' >
                                        <button className="meetourteam_section-button">
                                            See venue in 360°
                                        </button>
                                    </Link>
                                    <Link to="/venue" className='venue_button' >
                                        <button className="meetourteam_section-button">
                                            View in Google Maps
                                        </button>
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Venue