import "../pages.scss";

import Address from "./addresses";
import ApiService from "../../../services/service";
import GetPage from "../../base/getPage";
import React from "react";

export default class OrderPage extends GetPage{
    render() {
        const { loading, error, data} = this.state;
        const service = new ApiService();
        const contacts = service.getAdresses;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        
        return (
            <div className="main-content">
                <div className="main-content__container">
                    <h2 className="main-content__container-title-main">{ data.content_main_title }</h2>
                    <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_description }}/>
                    <Address service={contacts}/>
                    <h3 className="main-content__container-title-sec">{ data.content_extended_title }</h3>
                    <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_extended_description }}/>
                </div>
            </div>
        )
    }
}