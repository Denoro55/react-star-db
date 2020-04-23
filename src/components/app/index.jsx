import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import SwapiService from "../../services/swapi";
import Row from "../row";
import ItemList from "../item-list";
import ItemInfo from "../item-info";
import ErrorBoundry from "../error-boundry";
import {Field} from "../item-info";

export default class App extends Component {
    swapiService = new SwapiService();

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

        const itemList =  <ItemList renderItem={({name, gender}) => `${name} (${gender})`}
                                    getData={this.swapiService.getPeopleAll}
                                    selectedPersonId={this.state.selectedItemId}
                                    onItemSelected={this.onItemSelected} />;

        const personInfo = (
            <ItemInfo getImageUrl={this.swapiService.getPersonImage}
                      getData={this.swapiService.getPeopleById}
                      itemId={3}>
                <Field name="gender" label="Gender" />
                <Field name="birthYear" label="Birth Year" />
                <Field name="eyeColor" label="Eye Color" />
            </ItemInfo>
        );

        const starshipInfo = (
            <ItemInfo getImageUrl={this.swapiService.getStarshipImage}
                      getData={this.swapiService.getStarshipById}
                      itemId={5}>
                <Field name="model" label="Model" />
                <Field name="length" label="Length" />
                <Field name="costInCredits" label="Cost In Credits" />
            </ItemInfo>
        );

        return (
            <div>
                <Header />
                <div className="container pt-5 pb-5">

                    { this.state.show ? <RandomPlanet /> : null }

                    <ErrorBoundry>
                        <div className="pt-4">
                            <div onClick={this.toggleShow} className="mr-3 btn btn-primary">toggle planet</div>
                            <ErrorButton />
                        </div>
                    </ErrorBoundry>

                    <Row left={personInfo} right={starshipInfo} />

                    {/*<div className="row">*/}
                    {/*    <div className="col-12 col-xl-6 pt-4">*/}
                    {/*        <ItemList renderItem={({name, gender}) => `${name} (${gender})`} getData={this.swapiService.getPeopleAll} selectedPersonId={this.state.selectedPersonId} onPersonSelected={this.onPersonSelected} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col-12 col-xl-6 pt-4">*/}
                    {/*        <ItemList renderItem={({name, population}) => `${name} (${population})`} getData={this.swapiService.getPlanetsAll} selectedPersonId={null} onPersonSelected={this.onPersonSelected} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col-12 col-xl-6 pt-4">*/}
                    {/*        <ItemList renderItem={({name, model}) => `${name} (${model})`} getData={this.swapiService.getStarshipsAll} selectedPersonId={null} onPersonSelected={this.onPersonSelected} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }
}
