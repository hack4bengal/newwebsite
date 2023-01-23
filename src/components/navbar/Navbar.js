import React, { Component } from 'react'
import './Navbar.css';
import logo from "../../assets/images/logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <div className='codeutsava__navbar'>
        <div className='codeutsava__navbar-body'>
            <div className='codeutsava__navbar-logo'>
              <img src={logo} className='codeutsava__navbar-logo'/>
            </div>
            <div className='codeutsava__navbar-menu'>
            <a><div className='codeutsava__navbar-menu-heading'>
                    Home
                </div></a>
            <a href='#aboutus'><div className='codeutsava__navbar-menu-heading'>
                    About Us
                </div></a>  
            <a href='#events'><div className='codeutsava__navbar-menu-heading'>
                    Events
                </div></a>  
                <div className='codeutsava__navbar-menu-heading'>
                    Sponsors
                </div>
                <div className='codeutsava__navbar-menu-heading'>
                    Team
                </div>
                <div className='codeutsava__navbar-menu-heading'>
                    Contact Us
                </div>

            </div>
        </div>

      </div>
    )
  }
}
