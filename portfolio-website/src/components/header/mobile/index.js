import React from 'react'
import './mobile.css'


function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <i class="ri-close-line"></i>
            </div>
            <div className='mobile-options'>
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href='#projects'>
                        <i class="ri-pencil-ruler-2-line option-icon"></i> Projects
                    </a>
                </div>  
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href='#education'>
                        <i class="ri-book-mark-line option-icon"></i> Education
                    </a>
                </div>  
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href='#skills'>
                        <i class="ri-tools-line option-icon"></i> Skills
                    </a>
                </div>  
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href='#contact'>
                        <i class="ri-user-3-line option-icon"></i> Contact
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default Mobile
