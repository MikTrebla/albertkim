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
                                    Hello, my name is Albert Kim and a Web Developer based in the Los Angeles area. In May 2018, I started my journey to train to become a full-stack web developer at the UCLA-Extension Full-Stack Web Development Boot Camp.
                                <br></br>
                                <br></br>
                                    3 Months after the program, I am able to design full-stack MERN web applications, as well as understanding basic computer science theory. Below, you will see the projects I have worked on.
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