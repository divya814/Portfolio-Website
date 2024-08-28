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
                details="Software Developer || Python || Front-End Development"
            ></Heading>

            {/* <div className="vector-image">
                <img src={aboutVector} alt="About-bg" className="about-image" />
            </div> */}

            <div className="about-section">
                <div className="left-container">
                    <p>I am a passionate Software Developer with around 2 years of experience in the world of Python with a love for the art of Frontend.</p>
                    <p>Here I'm an artist painting with HTML, CSS, and JavaScript where pixels dance to the rhythm of user experience. Responsive design, seamless interactions, and captivating interfaces are my brushstrokes, creating an immersive experience for every user. I choreograph the dance with React and Git is my wand.</p>
                    <p>Currently working as a Frontend Angular Developer in Reliance Industries and have worked as a Software Developer in CSG International. I've also done a few internships and freelancing projects in the past to enhance my development skills.</p>
                    <button type="button" class="btn btn2 text-uppercase">
                        <a href="https://drive.google.com/file/d/1_UZF2XtEgJ1ahCjTLDWl0JrSUHCVT8XI/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
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
