import React, {Component} from "react";
import './style.css';

export default class ItemDetail extends Component {
    render() {
        return (
            <div className="item-detail">
                <div className="item-detail__left">
                    image
                </div>
                <div className="item-detail__right">
                    <div className="item-detail__name">Planet name</div>
                    <div className="item-detail__params">
                        <div className="item-detail__param">
                            <div className="item-detail__param-key">Population:</div>
                            <div className="item-detail__param-value">1235221</div>
                        </div>
                        <div className="item-detail__param">
                            <div className="item-detail__param-key">Rotation period:</div>
                            <div className="item-detail__param-value">43</div>
                        </div>
                        <div className="item-detail__param">
                            <div className="item-detail__param-key">Diameter:</div>
                            <div className="item-detail__param-value">100</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
