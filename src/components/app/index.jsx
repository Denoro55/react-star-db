import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from "../context";
import SwapiService from "../../services/swapi";
import DummySwapiService from "../../services/dummySwapi";
import {PeoplePage, StarshipPage, PlanetPage} from "../pages";

import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from "react-router-dom";
import ItemInfo from "../item-info";
import {PersonDetail} from "../sw-components";

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
        const realApi = this.state.swapiService instanceof SwapiService;

        return (
            <div>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router basename={process.env.PUBLIC_URL} >
                        <Header realApi={realApi} onToggleService={this.onToggleService} />
                        <div className="container pt-5 pb-5">
                            <ErrorBoundry>
                                { this.state.show ? <RandomPlanet /> : null }
                                    {/*<div className="pt-4">*/}
                                    {/*    <div onClick={this.toggleShow} className="mr-3 btn btn-primary">Toggle planet</div>*/}
                                    {/*    <ErrorButton />*/}
                                    {/*</div>*/}
                                <div className="pt-4">
                                    <Switch>
                                        <Route path="/" exact render={() => <h2 className="pt-4">Welcome to Star DB</h2>}/>
                                        <Route path="/people" exact component={PeoplePage}/>
                                        <Route path="/people/:id" render={({match}) => {
                                            const {id} = match.params;
                                            return <PersonDetail itemId={id} />
                                        }}/>
                                        <Route path="/planets" component={PlanetPage}/>
                                        <Route path="/starships/:id?" component={StarshipPage}/>
                                        <Redirect to="/" />
                                    </Switch>
                                </div>
                            </ErrorBoundry>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}
