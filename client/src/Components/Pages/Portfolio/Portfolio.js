import React, { Component } from "react";
import './Portfolio.css';

class Portfolio extends Component {

    // onMouseEnter = (event, img) => {
    //     event.preventDefault(); 
    //     event.target.src=img;
        
    // }

    // onMouseLeave = (event, img) => {
    //     event.preventDefault();
    //     event.target.src = img
    // }

    render () {
        return (
            <div id='portfolioContainer'>
                <h3 id='portfolioHeader'> Projects </h3>
                <div>
                    <ul id='portfolioGrid'> <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>

                                    <img className = 'portfolioImg'
                                            
                                        
                                        alt='fiction-jeans'>
                                    </img>
                                    
                                </div>
                                <div className='description'>
                                    {/* <h3>Look & Cook</h3>   */}
                                    <div>
                                        <img  alt='fiction-jeans'></img>
                                    </div>
                                    <h3>Work in progress.</h3>
                                    <p>
                                      A fictional fashion store which will allow the admin to add items and allow consumers to purchase items from the web page.
                                    </p>
                                        <p>
                                            This app was built with the following technologies: 
                                        </p>
                                        <ul id='app-techs'>
                                            <li>Javascript</li>
                                            <li>Express.js</li>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>MongoDB</li>
                                            <li>REST API</li>
                                            <li>CSS</li>
                                            <li>HTML5</li>
                                            <li>ES6</li>
                                        </ul>
                                    
                                    <a className='extLink' href='https://fictionjeans.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website
                                    </a>
                                    <a className='extLink' href='https://github.com/MikTrebla/fiction-jeans' target = '_blank' rel='noopener noreferrer'>Github</a>
                                </div>
                            </li>
                        </div>
                        <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>

                                    <img className = 'portfolioImg'
                                            // onMouseOver={(event) => {this.onMouseEnter(event,require(`./Images/LnC(gif).gif`))}} 
                                            // onMouseOut={(event)=> {this.onMouseLeave(event,require(`./Images/lookncook.png`))}}
                                        src={require(`./Images/LnC(gif).gif`)} 
                                        alt='lookncook'>
                                    </img>
                                    
                                </div>
                                <div className='description'>
                                    {/* <h3>Look & Cook</h3>   */}
                                    <div>
                                        <img src={require(`./Images/lookncook.png`)} alt='lookncook'></img>
                                    </div>
                                   
                                    <p>
                                        A recipe web application that allows users to search, save, view, and share their own personal recipes. Features interactive timers that are detected through the recipe instructions.
                                    </p>
                                    
                                        <p>This app was built with the following technologies: </p>
                                        <ul id='app-techs'>
                                            <li>Javascript</li>
                                            <li>Express.js</li>
                                            <li>React.js</li>
                                            <li>Node.js</li>
                                            <li>MongoDB</li>
                                            <li>REST API</li>
                                            <li>CSS</li>
                                            <li>HTML5</li>
                                            <li>ES6</li>
                                        </ul>
                                    
                                    <a className='extLink' href='https://lookncook.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website
                                    </a>
                                    <a className='extLink' href='https://github.com/bnsnchz/lookncook' target = '_blank' rel='noopener noreferrer'>Github</a>
                                </div>
                            </li>
                        </div>
                        <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>

                                        <img className = 'portfolioImg' 
                                                // onMouseOver={(event)=>{this.onMouseEnter(event,require(`./Images/ETHR(gif).gif`))}} 
                                                // onMouseOut={(event)=>{this.onMouseLeave(event,require(`./Images/logo.png`))}} 
                                            src={require(`./Images/ETHR(gif).gif`)} 
                                            alt='ethr'>
                                        </img>

                                </div>
                                <div className='description'>
                                    {/* <h3>ETHR</h3> */}
                                    <div>
                                        <img src={require(`./Images/logo.ethr.new.jpg`)}  alt='ethr'></img>
                                    </div>
                                    <p>
                                        Utilizes a game database API which allows users to search and post reviews on specific game titles.
                                    </p>
                                    
                                        <p>This app was built with the following technologies: </p>
                                        <ul id='app-techs'>
                                            <li>Javascript</li>
                                            <li>jQuery</li>
                                            <li>Express.js</li>
                                            <li>Node.js</li>
                                            <li>MySQL</li>
                                            <li>REST API</li>
                                            <li>Handlebars</li>
                                            <li>CSS</li>
                                            <li>HTML5</li>
                                            <li>ES6</li>
                                        </ul>
                                   
                                    <a className='extLink' href='https://ethr.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website
                                    </a>
                                    <a className='extLink' href='https://github.com/MikTrebla/Project-2' target = '_blank' rel='noopener noreferrer'>Github</a>
                                </div>
                            </li>
                        </div>                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Portfolio;