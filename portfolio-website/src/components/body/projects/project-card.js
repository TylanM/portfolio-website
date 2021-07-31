import React from 'react'
import './project-card.css'

function ProjectCard( {project} ) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label>{project.title}</label>
            </div>
            <img src={project.image} className="project-photo" />
        </div>
    )
}

export default ProjectCard
