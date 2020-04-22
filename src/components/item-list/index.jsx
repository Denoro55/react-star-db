import React, {Component} from "react";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi";
import cn from 'classnames';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService.getPeopleAll()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(list) {
        return list.map(item => {
            const clazz = cn({
                'list-group-item': true,
                'active': item.id === this.props.selectedPersonId
            });
            return <li key={item.id} onClick={() => this.props.onPersonSelected(item.id)} className={clazz}>{item.name}</li>
        })
    }

    render() {
        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="list-group">
                { items }
            </ul>
        )
    }
}
