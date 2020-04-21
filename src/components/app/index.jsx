import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetail from "../item-detail";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container pt-5">
                    <RandomPlanet />
                    <div className="row">
                        <div className="col-12 col-xl-6 pt-4">
                            <ItemList />
                        </div>
                        <div className="col-12 col-xl-6 pt-4">
                            <ItemDetail />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
