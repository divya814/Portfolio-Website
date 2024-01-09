import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import homeIconWhite from "./../../assets/home_white.png"
import homeIconBlack from "./../../assets/home_black.png"
import './Gohome.css';

// we are doing this just to get the concept of history object 
//based on location of pages

class Gohome extends Component {
    navigateToHome=()=>{
        const {history}=this.props;
        history.push('/');
    }
    render() {
        const {location}=this.props;
        // variable for home page's location
        const whiteBtn=location.pathname==="/";

        return (
            <button className={`go-home-btn ${
                whiteBtn? 'white-bg': 'gradient-bg'
                }`}
                onClick={this.navigateToHome}
                >
                <img className='home-icon'
                src={whiteBtn? homeIconBlack:homeIconWhite}
                alt="home-icon"></img>
            </button>
        )
    }
}
export default withRouter(Gohome)