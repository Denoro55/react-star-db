import React, {Component} from "react";
import './style.css';
import icon from './death-star.png'

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className="error-indicator">
                <img className="mb-3" src={icon} alt=""/>
                <div className="h4">BOOM!</div>
                <div>Something has gone wrong!</div>
                <div>But we have already sent drons to fix it</div>
            </div>
        )
    }
}
