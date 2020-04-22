import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetail from "../item-detail";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";

export default class App extends Component {
    state = {
        show: true,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    toggleShow = () => {
        this.setState(({show}) => ({
            show: !show
        }))
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="container pt-5">
                    <ErrorIndicator />
                </div>
            )
        }

        return (
            <div>
                <Header />
                <div className="container pt-5 pb-5">
                    { this.state.show ? <RandomPlanet /> : null }
                    <div className="pt-4">
                        <div onClick={this.toggleShow} className="mr-3 btn btn-primary">toggle planet</div>
                        <ErrorButton />
                    </div>
                    <PeoplePage />
                    <PeoplePage />
                </div>
            </div>
        )
    }
}
