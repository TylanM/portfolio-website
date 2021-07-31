import React from 'react'
import "./about.css"
import SocialContact from '../../common/social-contact'

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                 <span className="about-greeting">Hello!</span> <br /> <br />
                 My name is <br /> 
                 <span className='info-name'>Tylan Bayley-McPherson</span>  
                </div>
                <div className="about-image">
                    <img src={require('../../../assets/programmer.png').default} alt='' className='about-image' />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
