import React, {Component} from "react";
import cn from 'classnames';

const ItemList = (props) => {
    const {data, selectedItemId, onItemSelected} = props;

    const items = data.map(item => {
        const label = props.children(item);

        const clazz = cn({
            'list-group-item': true,
            'active': item.id === selectedItemId
        });

        return <li key={item.id} onClick={() => onItemSelected(item.id)} className={clazz}>{label}</li>
    });

    return (
        <ul className="list-group">
            { items }
        </ul>
    )
};

export default ItemList;
