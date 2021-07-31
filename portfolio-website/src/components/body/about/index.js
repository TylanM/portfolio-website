import React from 'react'
import "./about.css"

function About() {
    return (
        <div className='about'> About Section
            <div className='about-top'>
                <div className='about-info'>
                 Hiya! <br />
                 My name is <br />
                 <span className='info-name'>Tylan Bayley-McPherson</span>  
                </div>
                <div className="about-image">
                    <img src={require('../../../assets/programmer.png').default} alt='' className='about-image' />
                </div>
            </div>
            <div className='about-bottom'>
                
            </div>
        </div>
    )
}

export default About
