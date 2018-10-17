import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {
    
    scrollToTop = () => {
        const top = document.getElementsByClassName('hero-image');
        top[0].scrollIntoView({block:'start', behavior:'smooth'});
    }
    render () {
        return (
            <div>
                <ul id='social'>
                    <li id='linkedIn'>
                        <a href ='https://www.linkedin.com/in/albertakim' title='LinkedIn'target ='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li id='github'>
                        <a href='https://github.com/MikTrebla' title='Github' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square"></i></a>
                    </li>
                    <li>
                    <i id='toTop'onClick={this.scrollToTop} className='fas fa-chevron-circle-up'>
                </i>
                    </li>
                </ul>
                
            </div>
          
        )
    }
}

export default Footer;