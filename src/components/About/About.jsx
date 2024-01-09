import React from 'react'
import "./About.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import aboutVector from "./../../assets/about_vector.png"
import aboutAnime from "./../../assets/about.gif"

const About = () => {
    return (
        <div className="section-container">
            <Heading
                heading="About Me"
                details="Software developer || Python || Front-End"
            ></Heading>

            <div className="vector-image">
                <img src={aboutVector} alt="About-bg" className="about-image" />
            </div>

            <div className="about-section">
                <div className="left-container">
                    {/* <p>I am a Software Developer working with CSG International for the last 1.8 years developing different features and enhancing existing CSG product. Other than being a passionate Python Developer, I have also worked in the field of Web development mainly Front-End development, and have done a few projects around it. 
                        I've done an internship as a React Developer in a travel-based Start-Up and single-handedly made the company's main website from scratch using ReactJS. I have explored the non-tech field as well by being a Recruitment specialist in <a classname="pa" href="https://mavinrpo.com/" target="_blank" rel="noreferrer">Mavin RPO</a> and working with a client onsite. 
                        I have worked as an Academic Outreach Expert intern and LinkedIn manager at <a classname="pa" href="https://www.indiaspark.com/" target="_blank" rel="noreferrer">IndiaSpark</a> where I have conducted national level hackathon and live talk show with Mr. Dheeraj Gyani (Director: Education & Government Engagements GitHub). 
                        Also worked as a YouTube manager at <a classname="pa" href="https://www.linkedin.com/company/girlup-she-united/" target="_blank" rel="noreferrer">GirlUp-She United</a>.</p>
                    <p>Besides these, I also love to make some creative handmade products, paintings, and crafts.</p> */}
                    <p>I am Divya, a passionate Software Developer with 1.5 years of experience in the world of Python with the love for the art of Frontend.</p>
                    <p>Here I'm an artist painting with HTML, CSS, and JavaScript where pixels dance to the rhythm of user experience. Responsive design, seamless interactions, and captivating interfaces are my brushstrokes, creating an immersive experience for every user. I choreograph the dance with React and Git is my wand.</p>
                    <p>I've done a few interships and freelancing projects to enhance my development skills and a few non-technical internships as well for personal growth and overall development.</p>
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
