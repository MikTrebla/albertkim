import React, { Component } from "react";
import './Portfolio.css';

class Portfolio extends Component {
    render () {
        return (
            <div>
                <h3 id='portfolioHeader'> Projects </h3>
                <div id='project-container'>   
                    <div id='project-details'>
                        <div id='project-header'>
                            <h1>Look & Cook</h1>
                        </div>
                        <p>
                            A recipe web application that allows users to search, save, view, and share their own personal recipes. Features interactive timers that are detected through the recipe instructions.
                        </p>
                        <br></br>

                        <div id='technology-list'>
                            <p>
                                Built with the following technologies:
                            </p>
                            <ul>
                                <li><img className='logo' src={require('./TechLogos/html.png')} alt='html'></img></li>
                                <li><img className='logo' src={require('./TechLogos/css.png')} alt='css'></img></li>
                                <li><img className='logo' src={require('./TechLogos/jes-es6.jpg')} alt='js-es6'></img></li>
                                <li><img className='logo' src={require('./TechLogos/expressjs.png')} alt='expressjs'></img></li>
                                <li><img className='logo' src={require('./TechLogos/react.png')} alt='reactjs'></img></li>
                                <li><img className='logo' src={require('./TechLogos/nodejs.png')} alt ='nodejs'></img></li>
                                <li><img className='logo' src={require('./TechLogos/mongodb.png')} alt='mongodb'></img></li>
                                <li><img className='logo' src={require('./TechLogos/rest-api.png')} alt='restAPI'></img></li> 
                            </ul>
                        </div>
                    </div>
                    <div id='project-image'>
                        <img src={require(`./Images/LnC(gif).gif`)} alt='new-format'></img>    
                    </div>
                    <a className='project-links' href='https://lookncook.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website</a>
                    <a className='project-links' href='https://github.com/bnsnchz/lookncook' target = '_blank' rel='noopener noreferrer'>Github</a>
                </div>
    
                <div id='project-container'>
                    <div id='project-details'>
                        <div id='project-header'>
                            <h1>ETHR</h1>
                        </div>
                        <p>
                            Utilizes a game database API which allows users to search and post reviews on specific game titles.
                        </p>
                        <br></br>
                        <div id='technology-list'>
                            <p>
                                Built with the following technologies:
                            </p>
                            <ul>
                                <li><img className='logo' alt='css' src={require('./TechLogos/css.png')}></img></li>
                                <li><img className='logo' alt='html' src={require('./TechLogos/html.png')}></img></li>
                                <li><img className='logo' alt='js-es6' src={require('./TechLogos/jes-es6.jpg')}></img></li>
                                <li><img className='logo' alt='jQuery' src={require('./TechLogos/jquery.png')}></img></li>
                                <li><img className='logo' alt='expressjs' src={require('./TechLogos/expressjs.png')}></img></li>
                                <li><img className='logo' alt='nodejs' src={require('./TechLogos/nodejs.png')}></img></li>
                                <li><img className='logo' alt='mysql' src={require('./TechLogos/mysql.png')}></img></li>
                                <li><img className='logo' alt='restAPI' src={require('./TechLogos/rest-api.png')}></img></li>
                                <li><img className='logo' alt='handlebarsjs' src={require('./TechLogos/handlebars.png')}></img></li>
                            </ul>
                        </div>
                    </div>
                    <div id='project-image'>
                        <img src={require(`./Images/ETHR(gif).gif`)} alt='ethr'></img>
                    </div> 
                    <a className='project-links' href='http://ethr.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website</a>
                    <a className='project-links' href='https://github.com/MikTrebla/Project-2' target = '_blank' rel='noopener noreferrer'>Github</a>
                </div>

                <div id='project-container'>
                    <div id='project-details'>
                        <div id='project-header'>
                            <h1>fiction-jeans</h1>
                            <h3>Work in progress.</h3>
                        </div>
                        <p>
                            A fictional fashion store which will allow the admin to add items and allow consumers to purchase items from the web page.
                        </p>
                        <br></br>
                        <div id='technology-list'>
                            <p>
                                Built with the following technologies:
                            </p>
                            <ul>
                                <li><img className='logo' alt='css' src={require('./TechLogos/css.png')}></img></li>
                                <li><img className='logo' alt='html' src={require('./TechLogos/html.png')}></img></li>
                                <li><img className='logo' alt='js-es6' src={require('./TechLogos/jes-es6.jpg')}></img></li>
                                <li><img className='logo' alt='expressjs' src={require('./TechLogos/expressjs.png')}></img></li>
                                <li><img className='logo' alt='reactjs' src={require('./TechLogos/react.png')}></img></li>
                                <li><img className='logo' alt='nodejs' src={require('./TechLogos/nodejs.png')}></img></li>
                                <li><img className='logo' alt='mongodb' src={require('./TechLogos/mongodb.png')}></img></li>
                                <li><img className='logo' alt='restAPI' src={require('./TechLogos/rest-api.png')}></img></li>
                            </ul>
                        </div>
                    </div>
                    <div id='project-image'>
                        <img src={require(`./Images/fiction-jeans.png`)} alt='fiction-jeans'></img>
                    </div>
                    <a className='project-links' href='https://fictionjeans.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website</a>
                    <a className='project-links' href='https://github.com/MikTrebla/fiction-jeans' target = '_blank' rel='noopener noreferrer'>Github</a>
                </div>
            </div>
        )
    }
}

export default Portfolio;