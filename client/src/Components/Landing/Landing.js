import React, {Component} from 'react';
import './Landing.css';


class Landing extends Component {
    render () {
        return (
            <div  style={{ textAlign:"center", width:"100vw", height:"100vh"}}>
                <div id ='landing' >
                    <h1 className='animated zoomIn'>
                        Hello,
                    </h1>
                    <h1 className='animated zoomInRight'>I'm Albert, a Web Developer based in LA.</h1>
                    <h1 className='animated zoomInLeft'>Scroll down to learn more about me.
                    </h1>
                    <p className='animated fadeInDownBig arrow'>
                        <i className="animated bounce fas fa-arrow-down"></i>
                    </p>
                </div>
              
            </div>
        )
    }
}

export default Landing;