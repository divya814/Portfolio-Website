import React from 'react'
// Ham burger menu
import {slide as Menu} from "react-burger-menu";
import "./Navbar.css"
import {Link, withRouter} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        // this.props gives us everything that is mentioned in Navbar prop
        const {location}=this.props;
        const homeClass=location.pathname === '/' ?'active-item':'';       
        const aboutClass=location.pathname === '/about' ?'active-item':'';       
        const projectsClass=location.pathname === "/projects" ?"active-item":"";       
        const skillsClass=location.pathname === "/skills" ?"active-item":"";       
        const contactClass=location.pathname === "/contact" ?"active-item":"";       

        return (
            <Menu>
                <Link to="/" className={`menu-item ${homeClass}`}>Home
                </Link>
                <Link to="/about"  className={`menu-item ${aboutClass}`}>About
                </Link>
                
                <Link to="/projects" className={`menu-item ${projectsClass}`}>Projects
                </Link>
                <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills
                </Link>
                <Link to="/contact" className={`menu-item ${contactClass}`}>Contact
                </Link>
            </Menu>
        )
    }
}
// it is going to pass out all the information about router and rout along with the props to this particular object
export default withRouter(Navbar);