import React, {Component, useState} from "react";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";

import notFound from './not-found.jpg';

const Field = ({item, name, label}) => {
    return (
        <div className="item-detail__param">
            <div className="item-detail__param-key">{label}:</div>
            <div className="item-detail__param-value">{item[name]}</div>
        </div>
    )
};

export {
    Field
}

export default class ItemInfo extends Component {
    state = {
        item: null,
        imageUrl: null,
        loading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) return;

        this.setState({loading: true});

        getData(itemId)
            .then(item => {
                this.setState({
                    item,
                    loading: false,
                    imageUrl: getImageUrl(item)
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData) {
            this.updatePerson();
        }
    }

    render() {
        const {item, loading, imageUrl} = this.state;

        const loader = loading ? <Spinner /> : null;
        const content = !loading && item ? <ItemContent children={this.props.children} item={item} imageUrl={imageUrl} />: null;
        const empty = !loading && !item ? <span>Select an item from list</span> : null;

        return (
            <div className="item-detail">
                <ErrorBoundry>
                    {loader}
                    {content}
                    {empty}
                </ErrorBoundry>
            </div>
        )
    }
}

const ItemContent = ({item, imageUrl, children}) => {
    const {name} = item;

    const [imageSrc, setImageSrc] = useState(imageUrl);

    const onImageError = () => {
        setImageSrc(notFound);
    };

    return (
        <>
            <div className="item-detail__left">
                <img onError={onImageError} src={imageSrc} alt=""/>
            </div>
            <div className="item-detail__right">
                <div className="item-detail__name">{name}</div>
                <div className="item-detail__params">
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, { item })
                    })}
                </div>
                <div className="pt-3">
                    <ErrorButton />
                </div>
            </div>
        </>
    )
};
