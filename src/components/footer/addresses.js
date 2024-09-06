import Base from "../base/base";
import React from "react";

export default class Address extends Base {
    renderContacts = (contacts) => {
        return contacts.map(({id, title, phone, email}) => {
            return (
                <li className="footer__services-item" key={id}>
                    <p className="footer__services-item-title">{title}</p>
                    <a className="footer__services-item-phone" href={`tel:${phone}`}>{phone}</a>
                    <a className="footer__services-item-email" href={`mailto:${email}`}>{email}</a>
                </li>    
            )   
        })
    }

    render () {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        
        const contacts = this.renderContacts(data)
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
