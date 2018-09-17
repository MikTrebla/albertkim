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
                    <ul id='portfolioGrid'>
                        <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>
                                    <div>
                                    <img className = 'portfolioImg'
                                            // onMouseOver={(event) => {this.onMouseEnter(event,require(`./Images/LnC(gif).gif`))}} 
                                            // onMouseOut={(event)=> {this.onMouseLeave(event,require(`./Images/lookncook.png`))}}
                                        src={require(`./Images/LnC(gif).gif`)} 
                                        alt='lookncook'>
                                    </img>
                                    </div>
                                    
                                </div>
                                <div className='description'>
                                    {/* <h3>Look & Cook</h3>   */}
                                    <container>
                                        <img src={require(`./Images/lookncook.png`)} alt='lookncook'></img>
                                    </container>
                                   
                                    <p>A recipe web application that allows users to search, save, view, and share their own personal recipes. Features interactive timers that are detected through the recipe instructions.</p>
                                    <a className='extLink' href='https://lookncook.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Live Website
                                    </a>
                                    <a className='extLink' href='https://github.com/bnsnchz/lookncook' target = '_blank' rel='noopener noreferrer'>Github</a>
                                </div>
                            </li>
                        </div>
                        <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>
                                    <div>
                                        <img className = 'portfolioImg' 
                                                // onMouseOver={(event)=>{this.onMouseEnter(event,require(`./Images/ETHR(gif).gif`))}} 
                                                // onMouseOut={(event)=>{this.onMouseLeave(event,require(`./Images/logo.png`))}} 
                                            src={require(`./Images/ETHR(gif).gif`)} 
                                            alt='ethr'>
                                        </img>
                                    </div>
                                </div>
                                <div className='description'>
                                    {/* <h3>ETHR</h3> */}
                                    <container>
                                        <img src={require(`./Images/logo.ethr.new.jpg`)}  alt='ethr'></img>
                                    </container>
                                    <p>Utilizes a game database API which allows users to search and post reviews on specific game titles.</p>
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