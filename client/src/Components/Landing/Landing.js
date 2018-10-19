import React, {Component} from 'react';
import './Landing.css';


class Landing extends Component {
    render () {
        return (
            <div  style={{ textAlign:"center", paddingTop:"30vh", top:"50%", width:"100vw", height:"100vh"}}>
                <h1 className='animated zoomIn'>
                    Hello,
                </h1>
                <h1 className='animated zoomInRight'>I'm Albert, a Web Developer based in LA.</h1>
                <h1 className='animated zoomInLeft'>Scroll down to learn more about me.
                    <p>
                        <i className="animated bounce fas fa-arrow-down"></i>
                    </p>
                </h1>

            </div>
        )
    }
}

export default Landing;