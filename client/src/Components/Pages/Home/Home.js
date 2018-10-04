import React, { Component } from "react";
import './home.css';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Skills from '../Skills';
class Home extends Component {
    scrollToTop = () => {
        const top = document.getElementsByClassName('hero-image');
        top[0].scrollIntoView({block:'start', behavior:'smooth'});
    }
    render () {
        
        return (
            <div id='body-container'>
                <div id='content'>
                        <div id='about'>
                            <div>
                                <h3>About</h3>
                                <p>
                                    Hello, my name is Albert Kim and I am a Web Developer based in the Los Angeles area. Currently, I am using  a MERN stack to build my applications. I am passionate about web development and learning new languages and technolgies.
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

                        <hr></hr>

                        <i onClick={this.scrollToTop} className="fas fa-chevron-circle-up">
                        </i>

                    </div>
            </div>
        )
    }
}

export default Home;