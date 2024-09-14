import Base from "../../base/base";
import React from "react";
import { renderContacts } from "../../сontacts"

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

        return (
            <ul className="main-content__address-list">{contacts}</ul>
        )
    }
}
