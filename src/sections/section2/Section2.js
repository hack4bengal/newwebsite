import React from 'react'

import './Section2.css';

import file4 from '../../assets/images/file4.png';

const Section2 = () => {
  return (
    <div className='codeutsava__section2' id="aboutus">
        <div className='codeutsava__section2-body'>
            <div className='codeutsava__section2-title'>
            About Us
            </div>
            <div className='codeutsava__section2-menu'>
                <div className='codeutsava__section2-image'>
                    <img className='codeutsava__section2-image-element' src={file4}></img>
                </div>        
                <div className='codeutsava__section2-content'>
                CodeUtsava 6.0 is an event being organized by Turing Club of Programmers, the Official Coding Club of NIT Raipur. It aims to foster and nurture invigorating coding culture among the students of the Institute through its Mentorship programme, workshops, and along with several other events including the annual event CodeUtsava. Students from all over India can take part in this event, attend Workshops, participate in the Hackathon, and various other coding related activities which are organized under this event.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2