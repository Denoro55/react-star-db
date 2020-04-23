import React, {Component} from "react";
import Spinner from "../spinner";
import cn from 'classnames';

export default class ItemList extends Component {
    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(list) {
        return list.map(item => {
            const label = this.props.renderItem(item);

            const clazz = cn({
                'list-group-item': true,
                'active': item.id === this.props.selectedPersonId
            });
            return <li key={item.id} onClick={() => this.props.onItemSelected(item.id)} className={clazz}>{label}</li>
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="list-group">
                { items }
            </ul>
        )
    }
}
