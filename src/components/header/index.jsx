import React, {Component} from "react";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Star DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">People <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Starships</a>
                        </li>
                    </ul>
                </div>
                <button onClick={this.props.onToggleService} className="btn btn-primary">Change Service</button>
            </nav>
        )
    }
}
