import React, { Component } from "react";
import './NoMatch.css';
class NoMatch extends Component {
    render () {
        return (
            <div>
                <h3 id='error'>Could not find the page you were looking for.</h3>
                <hr></hr>
            </div>
        )
    }
}

export default NoMatch;