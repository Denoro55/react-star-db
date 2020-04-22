import React, {Component} from "react";
import './style.css';
import SwapiService from "../../services/swapi";
import Spinner from "../spinner";

export default class ItemDetail extends Component {
    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true,
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) return;

        this.setState({
            loading: true
        });

        this.swapiService.getPeopleById(personId)
            .then(person => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }

    render() {
        const {person, loading} = this.state;

        const loader = loading ? <Spinner /> : null;
        const content = !loading ? <DetailContent person={person}/> : null;

        return (
            <div className="item-detail">
                {loader}
                {content}
            </div>
        )
    }
}

const DetailContent = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;
    return (
        <>
            <div className="item-detail__left">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>
            <div className="item-detail__right">
                <div className="item-detail__name">{name}</div>
                <div className="item-detail__params">
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Gender:</div>
                        <div className="item-detail__param-value">{gender}</div>
                    </div>
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Birth year:</div>
                        <div className="item-detail__param-value">{birthYear}</div>
                    </div>
                    <div className="item-detail__param">
                        <div className="item-detail__param-key">Eye color:</div>
                        <div className="item-detail__param-value">{eyeColor}</div>
                    </div>
                </div>
            </div>
        </>
    )
};
