import React, { Component } from "react";
import './Skills.css';


class Skills extends Component {
    render () {
        return (
            <div>
                <h3 id='skills-header'> Skills </h3>
                <div>
                    <ul id='skills-list'>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>REST API</li>
                        <li>AJAX</li>
                        <li>Handlebars</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>ES6</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;