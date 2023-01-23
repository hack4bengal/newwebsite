import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './HomePage.css';
import '../../App.css';
import Section1 from '../../sections/section1/Section1';
import Section2 from '../../sections/section2/Section2';
import Section3 from '../../sections/section3/Section3';
export default class HomePage extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
    )
  }
}
