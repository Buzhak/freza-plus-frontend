import Base from "../base/base";
import {Link} from 'react-router-dom';
import React from "react";

export default class MainMenu extends Base {
    renderNavMainMenu(menuItems) {
        return menuItems.map((item) => {
            let dropMenu = null;
            if (item.services && item.services.length !== 0) {
                dropMenu = (
                    <div className="navbar__dropdown">
                        {item.services.map((service) => (
                            <Link to={`${item.url}${service.id}`} className="navbar__link" key={service.id}>
                                <p key={service.id} className="navbar__dropdown-item">{service.title}</p>
                            </Link>
                        ))}
                    </div>
                );
            }
            return (
                <div className="navbar__item" key={item.id}>
                    <Link to={item.url} className="navbar__link">{item.title}</Link>
                    {dropMenu}
                </div>    
            );
        });
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading menu. Please try again later.</p>;
        }
        const mainMenuItems = this.renderNavMainMenu(data)
        return (
                <>
                    {mainMenuItems}
                </>
            )
        }
}