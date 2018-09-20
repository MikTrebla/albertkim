import React, { Component } from "react";
import './Contact.css';
// import axios from 'axios';
// import swal from 'sweetalert';

class Contact extends Component {
    state = {
        email:'',
        name:'',
        subject:''
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    copyToClipboard = (event) => {
        event.preventDefault();
        const copiedText = document.createElement('textarea');
        copiedText.value='AlbertKim0722@gmail.com'
        document.body.appendChild(copiedText);
        copiedText.select();
        document.execCommand("copy");
        alert(`Copied ${copiedText.value} to the clipboard.`)
        document.body.removeChild(copiedText);
    }
 
    // handleFormSubmit = (event) => {
    //     event.preventDefault();
         
    //     const email = {
    //         address: this.state.email,
    //         name: this.state.name,
    //         subject: this.state.subject
    //     }
    //     axios.post('/sendMail', email)
    //     .then( (response) => {
    //         if (response.data.msg === 'success') {
    //             swal('Successfully sent message.');
    //             this.resetForm();
    //         } else if ( response.data.msg === 'fail') {
    //             swal('Failed to send message.');
    //         }
    //     })
        
    // }
    
    resetForm = () => {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let subject = document.getElementById('subject');

        name.value = '';
        email.value = '';
        subject.value ='';

    }
    render () {
        return (
            <div id = "formContainer">
                <h3 id='contactHeader'>Contact</h3>
                <div>
                    <div id="contact-me-header">
                        <p className='contactInfo'>
                            If you wish to contact me, please use the form below or contact me at 
                            { 
                                <button id ='myEmail' onClick={this.copyToClipboard}>
                                    my email address.
                                </button>
                            }
                        </p>
                    </div>
                    <form action="https://formspree.io/albertkim0722@gmail.com" method="POST" className='contact-form'>
                        <div className='form-group'>
                            <label htmlFor="email" >E-Mail</label>
                            <input id='email' onChange={this.handleInputChange} type = "text" name="email" placeholder="Your Email Address"></input>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor="name" >Name</label>
                            <input id='name' onChange={this.handleInputChange} type = "text" name="name" placeholder="Your Name"></input>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor="subject" >Subject</label>
                            <textarea id='subject' onChange={this.handleInputChange} cols='70' rows='5' type = 'text' name="subject" placeholder="Your Message" ></textarea>
                        </div>
                        
                        
                        <button id='submit-form-button' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;