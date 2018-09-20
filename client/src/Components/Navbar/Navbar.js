import React, { Component } from "react";
import './Navbar.css';


class Navbar extends Component {
    state = {
        target: ''
    }
       
    handleChange = (event) => {
        this.setState({
          target: event.target.name
        });
        this.closeNav();
    }

    componentDidUpdate = () => {
        const element = document.getElementById(this.state.target);
        element.scrollIntoView({block:'start',behavior: 'smooth'});
    }
    openNav = () => {
        document.getElementById("slideNav").style.width = "250px";
        document.getElementById('slideNav').style.display = "block";
        document.getElementById('slideNav').style.transition = "1s";

    }
    closeNav = () => {
        document.getElementById("slideNav").style.width = "0"
        document.getElementById('slideNav').style.display = "none";

    }

    render () {
        return (
            <div>
                <div className="hero-image">
                    <div className="hero-text">
                        <span onClick={this.openNav}>&#9776; Menu</span>
                        <div id='slideNav'>
                            <a className='closeNav'onClick={this.closeNav}>&times;</a>
                            <a name='about' onClick={this.handleChange}>About</a>
                            <a name='projects' onClick={this.handleChange}>Projects</a>
                            <a name='skills' onClick={this.handleChange}>Skills</a>
                            <a name='contact' onClick={this.handleChange}>Contact</a>
                            <ul id='social'>
                    <li id='linkedIn'>
                        <a href ='https://www.linkedin.com/in/albertakim' target ='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li id='github'>
                        <a href='https://github.com/MikTrebla' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a>
                    </li>
                </ul>
                        </div>
                        <ul className='animated fadeInDown' id='navbar'>
                            <li className='navbarLi'>
                                <a name ='about'className='navbarLink' onClick={this.handleChange}
                                >About</a>
                            </li>
                            <li className='navbarLi'>
                                <a  name ='projects'className='navbarLink' onClick={this.handleChange}
                                >Projects</a>
                            </li>
                            <li className='navbarLi'>
                                <a name='skills' className='navbarLink' onClick={this.handleChange}>
                                Skills</a>
                            </li>
                            <li className='navbarLi'>
                                <a name ='contact' className='navbarLink'onClick={this.handleChange}>
                                Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='hero-text'>
                        <h1 id='websiteHead'>
                            Albert Kim
                            <br></br>
                            Web Developer
                        </h1>
                    </div>
                    <div id='resume'>
                        <button>
                            <a href={require('./Assets/Resume(PDF).pdf')} target='_blank'>Resume(PDF)
                            </a>
                        </button>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Navbar;