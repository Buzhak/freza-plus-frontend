import "../pages.scss";

import GetPage from "../../base/getPage";
import {Link} from 'react-router-dom';
import React from "react";

export default class ServicePage extends GetPage {
    
    renderServicesList (data) {
        return data.services.map((service) => {
            return(
                <li className="main-content__item" key={service.id}>
                    <Link to={`${service.id}`} className="main-content__link" key={service.id}>
                            {service.title}
                    </Link>
                </li> 
            )
        })
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }

        return (
            <>
                <div className="main-content">
                    <div className="main-content__container">
                        <h2 className="main-content__container-title-main">{ data.content_main_title }</h2>
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_description }}/>
                        <ul className="main-content__list">
                            {this.renderServicesList(data)}
                        </ul>
                        <h3 className="main-content__container-title-sec">{ data.content_extended_title }</h3>
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_extended_description }}/>
                        <div className="main-content__container-warning warning-text" dangerouslySetInnerHTML={{ __html: data.content_warging }}/>
                    </div>
                </div>
            </>

        )
    }
}