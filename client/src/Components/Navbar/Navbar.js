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
    }

    componentDidUpdate = () => {
        const element = document.getElementById(this.state.target);
        element.scrollIntoView({block:'start',behavior: 'smooth'});
    }
    
    render () {
        return (
            <div>
                <div className="hero-image">
                    <div className="hero-text">
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
                        {/* <button>
                            <a href='./Assets/Resume.docx' download='Resume.docx'>Resume(docx)
                            </a>
                        </button> */}
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Navbar;