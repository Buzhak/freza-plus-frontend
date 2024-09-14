import Base from "../base/base";
import React from "react";
import { renderContacts } from "."

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
            <div className="address">
                <h3 className="address__title">Контакты</h3>
                <ul className="address__list">{contacts}</ul>
                <h3 className="address__title">Адрес</h3>
                <p className="address__info">{address}</p>
                <h3 className="address__title">График работы</h3>
                <p className="address__services-info">{workTime}</p>
            </div> 
        )
    }
}
