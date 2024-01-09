import React from 'react'
// react router
import {HashRouter,Route} from "react-router-dom"

import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

import "./App.css"
import Navbar from '../Navbar/Navbar';
import Gohome from '../Gohome/Gohome';

const App=()=> {
    return (
        <div>            
            <HashRouter>            
            <div>
                <Navbar></Navbar>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/projects" exact component={Projects}></Route>
                <Route path="/skills" exact component={Skills}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Gohome></Gohome>
            </div>
            </HashRouter>
        </div>
    )
}
export default App;