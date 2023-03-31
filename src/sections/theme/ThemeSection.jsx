import React, { useEffect } from 'react'
import "./ThemeSection.css"
import themedata from "./ThemeData"

const ThemeSection = () => {


    return (
        <>
            <div className="themesection_parent">

                <h1 className='themesection_title'>Themes</h1>
                <hr style={{ marginBottom: "70px" }} />

                <div className="box-container">

                    {themedata.map((item, index) => {

                        return (
                            <div className="box-item" key={index}>
                                <div className="flip-box">
                                    <div className="flip-box-front text-center"  >
                                        <div className="inner color-white">

                                            <img src={item.img} alt="" className="flip-box-icon" />
                                            <h3 className="flip-box-header">
                                                {item.name.split('\n').map((str, index) => (
                                                    <span key={index}>
                                                        {str}
                                                        <br />
                                                    </span>
                                                ))}
                                            </h3>

                                            <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
                                        </div>
                                    </div>
                                    <div className="flip-box-back text-center"  >
                                        <div className="inner color-white">

                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default ThemeSection
