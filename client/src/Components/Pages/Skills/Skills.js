import React, { Component } from "react";
import './Skills.css';


class Skills extends Component {
    render () {
        return (
            <div>
                <h3 id='skills-header'> Skills </h3>
                <div>
                    <ul id='skills-list'>
                        <li><img className='logo' alt='js-es6' src={require('./TechLogos/jes-es6.jpg')}></img></li>
                        <li><img className='logo' alt='jQuery' src={require('./TechLogos/jquery.png')}></img></li>
                        <li><img className='logo' alt='reactjs' src={require('./TechLogos/react.png')}></img></li>
                        <li><img className='logo' alt='nodejs' src={require('./TechLogos/nodejs.png')}></img></li>
                        <li><img className='logo' alt='expressjs' src={require('./TechLogos/expressjs.png')}></img></li>
                        <li><img className='logo' alt='mongodb' src={require('./TechLogos/mongodb.png')}></img></li>
                        <li><img className='logo' alt='mysql' src={require('./TechLogos/mysql.png')}></img></li>
                        <li><img className='logo' alt='restAPI' src={require('./TechLogos/rest-api.png')}></img></li>
                        <li><img className='logo' alt='handlebarsjs' src={require('./TechLogos/handlebars.png')}></img></li>
                        <li><img className='logo' alt='bootstrap' src={require('./TechLogos/twitterbootstrap.png')}></img></li>
                        <li><img className='logo' alt='css' src={require('./TechLogos/css.png')}></img></li>
                        <li><img className='logo' alt='html' src={require('./TechLogos/html.png')}></img></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;