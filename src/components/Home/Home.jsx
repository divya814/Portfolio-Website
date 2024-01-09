import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Modal from '../Modal/Modal';
import homeAnime from './../../assets/home_anime.gif'
import "./Home.css"

class Home extends Component{
    // maintain the state of the modal component
    // state={showModal:false};

    // Modal should be visible every time we load the home page
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({showModal:true});
    //     },1000
    //     );
    // }
    // close model 
    // closeModal=()=>{
    //     this.setState({showModal:false});
    // }

    render(){
        return (
            <div className="home-container">
                {/* if Show modal is true then call Modal */}
                {/* {this.state.showModal && <Modal closeModal={this.closeModal}/>} */}
                <div className="header-text">
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Divya Maheshwari, a Software Developer!</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
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
