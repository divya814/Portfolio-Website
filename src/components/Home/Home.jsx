import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.gif'
import "./Home.css"

class Home extends Component{

    render(){
        return (
            <div className="home-container">
                {/* if Show modal is true then call Modal */}
                {/* {this.state.showModal && <Modal closeModal={this.closeModal}/>} */}
                <div className="header-text">
                    <h3>Welcome to my Portfolio Website!!!</h3>
                    <h1>I'm <span>Divya Maheshwari✌</span></h1>
                    <h2>A Software Developer!</h2>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Want to connect?</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img
                    className="home-anime"
                    src={homeAnime}
                    alt="Anime">
                        
                    </img>
                    
                </div>
            </div>
        )
    }
}
export default Home;
