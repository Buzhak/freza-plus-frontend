import "./footer.scss";

import Address from "./addresses";
import ApiService from "../../services/service";
import React from "react";
import Services from "./services";

const Footer = () => {
    const service = new ApiService();
    const getMainMenu = () => service.getMainMenu();
    const getAdresses = () => service.getAdresses();

    return (
        <footer className="footer">
            <div className="footer__container">
                <Address service={getAdresses}/>
                <Services service={getMainMenu}/>
            </div>
            <div className="footer__end">
                <p className="footer__c">FrezaPlus 2024©</p>
            </div>
        </footer>
    )
}

export default Footer;
