import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    state = {
        email:'',
        name:'',
        subject:''
    }

    copyToClipboard = (event) => {
        event.preventDefault();
        const copiedText = document.createElement('textarea');
        copiedText.value='AlbertKim0722@gmail.com'
        document.body.appendChild(copiedText);
        copiedText.select();
        document.execCommand("copy");
        this.clickToolTip();
        document.body.removeChild(copiedText);
    }
    showToolTip = event => {
        event.preventDefault();
        const tooltip = document.getElementsByTagName("span");
        tooltip[1].style.display = "block";
        tooltip[1].style.opacity = "1";
    }
    hideToolTip = event => {
        const tooltip = document.getElementsByTagName("span");
        tooltip[1].style.opacity ="0";
        tooltip[1].innerHTML = 'Click to Copy';
    }

    clickToolTip = () => {
        const tooltip = document.getElementsByTagName("span");
        tooltip[1].innerHTML = 'Copied';
       
    }

    render () {
        return (
            <div id = "formContainer">
                <h3 id='contactHeader'>Contact Me</h3>
                <ul id='social-links'>
                    <li id ='email' onMouseOut = {this.hideToolTip} onMouseOver = {this.showToolTip} onClick={this.copyToClipboard}>
                        <i className="far fa-envelope"></i>
                        <span>Click to Copy</span> 
                    </li>
                    <li id='linkedIn'>
                        <a href ='https://www.linkedin.com/in/albertakim' title='LinkedIn'target ='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li id='github'>
                        <a href='https://github.com/MikTrebla' title='Github' target='_blank' rel='noopener noreferrer'><i className="fab fa-github-alt"></i></a>
                    </li>
                    <li id='resume'>
                        <a href={require('./Assets/Resume(PDF).pdf')} target='_blank'><i title='Resume(PDF)' className="fas fa-file-alt"></i>
                        </a>
                    </li>

                </ul>
                
            </div>
        )
    }
}

export default Contact;