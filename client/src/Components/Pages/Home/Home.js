import React, { Component } from "react";
import './home.css';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Skills from '../Skills';
class Home extends Component {

    render () {
        return (
            <div id='body-container'>
                
                <div id='content'>
                        <div id='about'>
                            <div>
                                <h3>About</h3>
                                <p>
                                    Hello, my name is Albert Kim and I am a Web Developer based in the Los Angeles area. Currently, I am using a MERN stack to build my applications. I am passionate about web development and learning new languages and technolgies. I currently focus on front end roles, but I am always open to new opportunities.
                                </p>
                            </div>

                            <div id='skills'>
                                <Skills />  
                            </div>
                        </div>
                        <div id='projects'>
                            <Portfolio />
                        </div>
                        
                        <div name='contact' id='contact'>
                            <Contact/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home;