import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
         <Separator />
         <label className='section-title'>Contact</label>
         <div className='contact-container'>
             <div className='contact-left'>
                <p>Want to get in touch? Click an option below.</p>
                <SocialContact />
             </div>

         </div>
        </div>
    )
}

export default Contact
