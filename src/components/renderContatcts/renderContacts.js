import "./renderContacts.scss";

import React from "react";

const renderContacts = (contacts) => {
    return contacts.map(({id, title, phone, email}) => {
        return (
            <li className="contact-item" key={id}>
                <p className="contact-item__title">{title}</p>
                <a className="contact-item__phone" href={`tel:${phone}`}>{phone}</a>
                <a className="contact-item__email" href={`mailto:${email}`}>{email}</a>
            </li>    
        )   
    })
}

export default renderContacts;