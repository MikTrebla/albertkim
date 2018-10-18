import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {
    
    scrollToTop = () => {
        const top = document.getElementById('about');
        top.scrollIntoView({block:'start', behavior:'smooth'});
    }
    render () {
        return (
            <div>
                <hr></hr>
                <ul id='footer'>
                    <li>
                        <i id='toTop'onClick={this.scrollToTop} className='fas fa-chevron-circle-up'></i>
                    </li>
                </ul>
            </div>
          
        )
    }
}

export default Footer;