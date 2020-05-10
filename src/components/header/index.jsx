import React, {Component} from "react";
import {Link} from "react-router-dom";
import cn from 'classnames'

export default class Header extends Component {
    render() {
        const {realApi} = this.props;

        const btnClasses = cn({
            'btn': true,
            'btn-primary': realApi,
            'btn-secondary': !realApi
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Star DB</Link>
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
                <button onClick={this.props.onToggleService} className={btnClasses}>{realApi ? 'Switch Service (real API now)' : 'Switch Service (test API now)'}</button>
            </nav>
        )
    }
}
