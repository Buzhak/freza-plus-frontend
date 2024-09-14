import "../pages.scss";

import { Address } from "../../сontacts";
import ApiService from "../../../services/service";
import GetPage from "../../base/getPage";
import React from "react";
import YandexMapConstructor from "../../map/map";

export default class ContactPage extends GetPage{

    render() {
        const { loading, error, data} = this.state;
        const service = new ApiService();
        const getAdresses = service.getAdresses;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        
        return (
            <div className="main-content">
                <div className="main-content__container">
                    <div className="main-content__map-container">
                        <YandexMapConstructor />
                        <Address service={getAdresses}/>
                    </div>
                </div>
            </div>
            
        )
    }
}