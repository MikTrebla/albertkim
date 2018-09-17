import React, { Component } from "react";
import './Wrapper.css';
class Wrapper extends Component {
    render () {
        return (
            <div id='wrapper'>

                <div>{this.props.children}</div>

            </div>
        )
    }
}

export default Wrapper;