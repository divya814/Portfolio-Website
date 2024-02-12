import React from 'react'
import "./About.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
// import aboutVector from "./../../assets/bg1.png"
import aboutAnime from "./../../assets/about.gif"

const About = () => {
    return (
        <div className="section-container">
            <Heading
                heading="About Me"
                details="Software developer || Python || Front-End"
            ></Heading>

            {/* <div className="vector-image">
                <img src={aboutVector} alt="About-bg" className="about-image" />
            </div> */}

            <div className="about-section">
                <div className="left-container">
                    <p>I am Divya, a passionate Software Developer with 1.5 years of experience in the world of Python with a love for the art of Frontend.</p>
                    <p>Here I'm an artist painting with HTML, CSS, and JavaScript where pixels dance to the rhythm of user experience. Responsive design, seamless interactions, and captivating interfaces are my brushstrokes, creating an immersive experience for every user. I choreograph the dance with React and Git is my wand.</p>
                    <p>I've done a few internships and freelancing projects to enhance my development skills and a few non-technical internships as well for personal growth and overall development.</p>
                    <button type="button" class="btn btn2 text-uppercase">
                        <a href="https://drive.google.com/file/d/1uVRCMx8RmAU4wEvZoQrJEhCUyeMa3teI/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </button>
                </div>
                <div className="right-container">
                    <img className="about-anime" src={aboutAnime} alt="About"></img>
                </div>


            </div>
            <Footer
                phrase="Check out my "
                link="Projects!"
                address="/projects"
            >
            </Footer>
        </div>

    )
}
export default About;
