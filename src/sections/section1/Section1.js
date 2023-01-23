import React, { Component } from 'react'
import './Section1.css';
import file0 from '../../assets/images/file0.png';
import file1 from '../../assets/images/file1.png';
import file2 from '../../assets/images/file2.png';
import file3 from '../../assets/images/file3.png';

export default class Section1 extends Component {
  render() {
    return (
      <div className='codeutsava__section1'>
        <div className='codeutsava__section1-body'>
            <div className='codeutsava__section1-menu'>
                <div className='codeutsava__section1-heading'>
                Welcome to CodeUtsava 6.0
                </div>
                <div className='codeutsava__section1-subheading'>
                    Code. Innovate. Celebrate.
                </div>
            </div>
            <div className='codeutsava__section1-image'>
            <img className='codeutsava__section1-image-element' src={file0}></img>
            <img className='codeutsava__section1-image-element-1' src={file1}></img>
                
            <img className='codeutsava__section1-image-element-2' src={file2}></img>                
                
            </div>        
        </div>
      </div>
    )
  }
}
