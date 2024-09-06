import Base from "../base/base";
import React from "react";

export default class Addresses extends Base {
    renderAdresses(adresses) {
        return adresses.map(({id, title, phone, email}) => {
            return (
                <div key={id} className="contact__item">
                    <p className="contact__title">{title}</p>
                    <a className="contact__phone" href={`tel:${phone}`}>{phone}</a>
                    <a className="contact__email" href={`mailto:${email}`}>{email}</a>
                </div> 
            )
        });
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        const contacts = this.renderAdresses(data)
        return (
                <>
                    {contacts}
                </>  
            )
        }
}