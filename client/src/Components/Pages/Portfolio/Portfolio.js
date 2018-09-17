import React, { Component } from "react";
import './Portfolio.css';

class Portfolio extends Component {

    onMouseEnter = (event, img) => {
        event.preventDefault(); 
        event.target.src=img;
        
    }

    onMouseLeave = (event, img) => {
        event.preventDefault();
        event.target.src = img
    }

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
                                            onMouseOver={(event) => {this.onMouseEnter(event,require(`./Images/LnC(gif).gif`))}} 
                                            onMouseOut={(event)=> {this.onMouseLeave(event,require(`./Images/lookncook.png`))}} 
                                        src={require(`./Images/lookncook.png`)} 
                                        alt='lookncook'>
                                    </img>
                                    </div>
                                    
                                </div>
                                <div className='description'>
                                    <h3>Look & Cook</h3>  
                                    <p>A recipe web application that allows users to search, save, view, and share their own personal recipes. Features interactive timers that are detected through the recipe instructions.</p>
                                    <a className='extLink' href='https://lookncook.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Project Link
                                    </a>
                                </div>
                            </li>
                        </div>
                        <div className='projectContainer'>
                            <li className='portfolioLi'>
                                <div className='image'>
                                    <div>
                                        <img className = 'portfolioImg' 
                                                onMouseOver={(event)=>{this.onMouseEnter(event,require(`./Images/ETHR(gif).gif`))}} 
                                                onMouseOut={(event)=>{this.onMouseLeave(event,require(`./Images/logo.png`))}} 
                                            src={require(`./Images/logo.png`)} 
                                            alt='ethr'>
                                        </img>
                                    </div>
                                </div>
                                <div className='description'>
                                    <h3>ETHR</h3>
                                    <p>Utilizes a game database API which allows users to search and post reviews on specific game titles.</p>
                                    <a className='extLink' href='https://ethr.herokuapp.com/' target='_blank' rel='noopener noreferrer'> Project Link
                                    </a>
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