import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Star DB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/people/">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets/">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships/">Starships</Link>
                        </li>
                    </ul>
                </div>
                <button onClick={this.props.onToggleService} className="btn btn-primary">Change Service</button>
            </nav>
        )
    }
}
