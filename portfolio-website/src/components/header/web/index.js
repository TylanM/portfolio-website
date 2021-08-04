import React from 'react';
import './web.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href='#projects'>
                    <i class="ri-pencil-ruler-2-line option-icon"></i> PROJECTS
                </a>
            </div>  
            <div className="web-option">
                <a href='#education'>
                    <i class="ri-book-mark-line option-icon"></i> EDUCATION
                </a>
            </div>  
            <div className="web-option">
                <a href='#skills'>
                    <i class="ri-tools-line option-icon"></i> SKILLS
                </a>
            </div>  
            <div className="web-option">
                <a href='#contact'>
                    <i class="ri-user-3-line option-icon"></i> CONTACT
                </a>
            </div>    
        </div>
    )
}

export default Web;
