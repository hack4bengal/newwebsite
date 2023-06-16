import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Venue.css"

const Venue = () => {
    return (
        <>
            <div className="hack4bengal__navbar-container">
                <Navbar />
            </div>

            <div className='venue_parent'>

                <h1>Landing Zone</h1>
                <hr />
                <iframe src="https://snuniv.ac.in/assets/virtual-tour/index.html"

                ></iframe >
            </div>

        </>
    )
}

export default Venue