import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import { SocialData } from '../../data/social'
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
             <div className='download'>
                 <a download href={require('../../../assets/resume.txt').default}>
                 <i class="ri-file-download-line download-icon"></i>
                     Download Resume
                 </a>
             </div>

         </div>
        </div>
    )
}

export default Contact
