import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonList, StarshipsList, PlanetsList} from "../sw-components";
import {PersonDetail, PlanetDetail, StarshipDetail} from "../sw-components";
import {SwapiServiceProvider} from "../context";
import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummySwapi";
import {PeoplePage, StarshipPage, PlanetPage} from "../pages";

export default class App extends Component {
    state = {
        show: true,
        hasError: false,
        swapiService: new SwapiService()
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    toggleShow = () => {
        this.setState(({show}) => ({
            show: !show
        }))
    };

    onToggleService = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        })
    };

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService}>
                <Header onToggleService={this.onToggleService} />
                <div className="container pt-5 pb-5">
                    <ErrorBoundry>
                        { this.state.show ? <RandomPlanet /> : null }
                            <div className="pt-4">
                                <div onClick={this.toggleShow} className="mr-3 btn btn-primary">Toggle planet</div>
                                <ErrorButton />
                            </div>
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </ErrorBoundry>
                </div>
                </SwapiServiceProvider>
            </div>
        )
    }
}
