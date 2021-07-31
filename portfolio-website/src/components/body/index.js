import React from 'react'
import About from './about'
import './body.css'
import Contact from './contact'
import Education from './Education'
import Projects from './projects'
import Skills from './skills'

function Body() {
    return (
        <div className='body'>
            <section id='about'>
                <About />
            </section>
            <section id='contact'>
                <Contact />
            </section>
            <section id='projects'>
                <Projects />
            </section>
            <section id='education'>
                <Education />
            </section>
            <section id='skills'>
                <Skills />
            </section>
        </div>
    )
}

export default Body
