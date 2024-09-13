import "./pageContent.scss";

import GetPage from "../base/getPage";
import {Link} from 'react-router-dom';
import React from "react";

export default class PageContent extends GetPage {
    
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
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.description }}/>
                        <ul className="main-content__list">
                            {this.renderServicesList(data)}
                        </ul>
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.extended_description }}/>
                    </div>
                </div>
            </>

        )
    }
}