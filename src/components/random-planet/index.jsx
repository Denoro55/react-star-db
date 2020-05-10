import React, {Component} from "react";
import SwapiService from "../../services/swapi";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types';

import './style.css'

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval: 3000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;
        // const id = 222;
        this.swapiService.getPlanetById(id)
            .then(planet => {
                this.onPlanetLoaded(planet);
        })
            .catch(this.onError)
    };

    render() {
        const { planet, loading, error} = this.state;

        const errorIndicator = error ? <ErrorIndicator/>: null;
        const loader = loading ? <Spinner /> : null;
        const hasLoaded = !loading && !error;
        const content = hasLoaded ? <PlanetContent planet={planet} /> : null;

        return (
            <div className="item-detail">
                {errorIndicator}
                {loader}
                {content}
            </div>
        )
    }
}

const PlanetContent = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <>
            <div className="item-detail__left">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>
            <div className="item-detail__right">
                <div className="item-detail__name">{name}</div>
                <div className="item-detail__params">
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Population:</div>
                        <div className="item-detail__param-value">{population}</div>
                    </div>
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Rotation period:</div>
                        <div className="item-detail__param-value">{rotationPeriod}</div>
                    </div>
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Diameter:</div>
                        <div className="item-detail__param-value">{diameter}</div>
                    </div>
                </div>
            </div>
        </>
    )
};
