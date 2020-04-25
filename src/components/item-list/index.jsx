import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    const {data, selectedItemId, onItemSelected, children: renderLabel} = props;

    const items = data.map(item => {
        const label = renderLabel(item);

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

ItemList.defaulProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func.isRequired
};

export default ItemList;
