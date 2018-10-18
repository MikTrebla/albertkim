import React, { Component } from "react";
import './Navbar.css';


class Navbar extends Component {
    state = {
        target: '',
        open:false
    }
   
    handleChange = (event) => {
        this.setState({
          target: event.target.name
        }, () => {
            const element = document.getElementById(this.state.target);
            element.scrollIntoView({block:'start',behavior: 'smooth'});
        });
        this.handleMenuToggle();
    }


    handleMenuToggle = () => {
        this.showMenu();
    }
    showMenu = () => {
        this.setState({
            open:!this.state.open
        })
    }
    render () {
        return (
            <div id='slide'>
                <button onClick = {this.handleMenuToggle}className={this.state.open?"menu-toggle close-toggle":"menu-toggle"}>
                        <i className="fa fa-plus"></i>
                    </button>
                <div id='menu'>
                    <div  className={this.state.open?'animate-menu visible':'animate-menu hidden'}>
                        <ul id='navbar'>
                            <li className='navbarLi'>
                                <a name ='about'className='navbarLink' onClick={this.handleChange}
                                >About</a>
                            </li>
                            <li className='navbarLi'>
                                <a name='skills' className='navbarLink' onClick={this.handleChange}>
                                Skills</a>
                            </li>
                            <li className='navbarLi'>
                                <a  name ='projects'className='navbarLink' onClick={this.handleChange}
                                >Projects</a>
                            </li>
                            <li className='navbarLi'>
                                <a name ='contact' className='navbarLink'onClick={this.handleChange}>
                                Contact
                                </a>
                            </li>
                            <ul className='socials'>
                            <li className='navbarLi socials'>
                                <a href ='https://www.linkedin.com/in/albertakim' title='LinkedIn'target ='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            </li>
                            <li className='navbarLi socials'>
                                <a href='https://github.com/MikTrebla' title='Github' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-alt"></i></a>
                            </li>
                            <li className='navbarLi socials'>
                                <a href={require('./Assets/Resume(PDF).pdf')} target='_blank'><i title='Resume(PDF)' className="fas fa-file-alt"></i>
                                </a>
                            </li>
                            </ul>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
          
        )
    }
}

export default Navbar;