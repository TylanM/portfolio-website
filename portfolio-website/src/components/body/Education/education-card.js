import React from 'react'
import './education-card.css'

function EducationCard({item}) {
    return (
        <div className='education-card'>
            <img src={item.companyLogo} className='education-logo' alt=''/>
            <div className='education-info'>
                <label className='school-name'>{item.school}</label>
                <div className="education-dates">
                    <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
                </div>
                <div className='education-desc'>
                    <p>{item.degree}</p>
                    <p>{item.desc}</p>
                </div>
                

            </div>
            
        </div>
    )
}

export default EducationCard
