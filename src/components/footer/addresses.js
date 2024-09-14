import Base from "../base/base";
import React from "react";
import renderContacts from "../renderContatcts"

export default class Address extends Base {
    render () {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        
        const contacts = renderContacts(data)
        const address = data[0].address,
              workTime = data[0].workTime;

        return (
            <div className="footer__address">
                <h3 className="footer__services-title">Контакты</h3>
                <ul className="footer__services-list">{contacts}</ul>
                <h3 className="footer__services-title">Адрес</h3>
                <p className="footer__services-info">{address}</p>
                <h3 className="footer__services-title">График работы</h3>
                <p className="footer__services-info">{workTime}</p>
            </div> 
        )
    }
}
