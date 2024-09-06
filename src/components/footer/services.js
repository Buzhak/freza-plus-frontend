import Base from "../base/base";
import { Link } from 'react-router-dom';
import React from "react";

export default class Services extends Base {
    renderServiceItems = (serviceItems) => {
        return serviceItems.map((item) => {
            if (item.services && item.services.length !== 0) {
                return (
                    <div className="footer__service" key={item.id}>
                        <h3 className="footer__services-title">
                            {item.title}
                        </h3>
                        <ul>
                            {item.services.map((service) => (
                                <li className="footer__services-item" key={service.id}>
                                    <Link to={`${item.url}${service.id}`} className="footer__services-item-link">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            return null;
        });
    };

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading menu. Please try again later.</p>;
        }

        const serviceItems = this.renderServiceItems(data);
        return (
            <div className="footer__services">
                {serviceItems}
            </div>
        );
    }
}
