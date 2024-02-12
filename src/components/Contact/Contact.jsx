import React from 'react'
import "./Contact.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import contactVector from './../../assets/bg2.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';

const Contact=()=> {
    return (
        <div className="section-container">
            <Heading
            heading="Get in touch"
            details="Feel free to contact me">
            </Heading>

            {/* E-Mail */}

            <div className="contact-form-container">
                <form 
                action="https://formspree.io/f/xyyljnen"
                method="POST"
                className="contact-form"
                >
                    <input 
                    name="_replyto"
                    type="email" placeholder="Enter your email"
                    className="input-box email-input" 
                    />
                    <textarea type="text" placeholder="Enter your message"
                    name="message" className="input-box body-input">
                        
                    </textarea>
                
                    <button type="submit" className="contact-btn">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/divya814' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/divya-maheshwari814/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://instagram.com/divya.maheshwari.814/'
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>
                
            </div>
        
            <Footer
            phrase="Read more "
            link="about me!"
            address="/about"
            ></Footer>

            <div className="vector-image">
                <img
                className="contact-image"
                src={contactVector}
                alt="contact"
                ></img>

            </div>

        </div>
    )
}
export default Contact;