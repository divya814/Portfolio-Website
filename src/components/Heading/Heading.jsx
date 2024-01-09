import React from 'react';
import './Heading.css';

const Heading=({heading,details})=>{
    return (
        <div className="header-container">
            <h1>{heading}</h1>
            <p>{details}</p>
        </div>
    )
}
export default Heading