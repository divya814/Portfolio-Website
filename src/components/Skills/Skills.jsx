import React from 'react'
import "./Skills.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import skillsVector from "./../../assets/bg1.png"
import {skillList} from './../../assets/skillsData'
import Skillcard from './Skillcard'

const Skills=()=> {
    return (
        <div className="section-container">
            <Heading
            heading="My Skills"
            details="Here's the tech stack I have worked with"
            ></Heading>

            <div className="skills-card-container">
            {skillList.map(({skillName,skillUrl})=>{
                return <Skillcard skillName={skillName} skillUrl={skillUrl}></Skillcard>
            })}
            </div>

            <div className="skills-vector-frame">
                <img
                src={skillsVector}
                alt="Skills"
                className="skills-vector"
                >
                </img>
            </div>
            
            <Footer
            phrase="Get in "
            link="touch!"
            address="/contact"
            ></Footer>
        </div>
    )
}
export default Skills;