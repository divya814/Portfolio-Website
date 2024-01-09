import React from 'react'
import "./Projects.css"
import Heading from '../Heading/Heading'
import Footer from '../Footer/Footer'
import {projectsData} from './../../assets/projectsData'
import ProjectCard from "./ProjectCard"

const Projects=()=> {
    return (
        <div className="section-container">
            
            <Heading
            heading="My Projects"
            details="Check out some projects that I have worked on">
            </Heading>
            
            <div className="project-card-container">
                {projectsData.map(({projectName,projectDescription,imageUrl,projectUrl})=>{
                    return <ProjectCard
                    projectName={projectName}
                    projectDescription={projectDescription}
                    imageUrl={imageUrl}
                    projectUrl={projectUrl}
                    ></ProjectCard>
                })}
            </div>

            <Footer
            phrase="Check out my "
            link="skills!"
            address="/skills"
            ></Footer>
        </div>
    )
}
export default Projects;