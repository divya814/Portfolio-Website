import React from 'react'
import "./Skills.css"

const Skillcard=({skillName,skillUrl})=> {
    return (
        <div className="skill">
            <img src={skillUrl} alt="skill" />
            <p>{skillName}</p>
            
        </div>
    )
}
export default Skillcard;