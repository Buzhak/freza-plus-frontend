import "./service.scss";

import Base from "../base/base";
import React from "react";

export default class ServicePage extends Base {
    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        return (
            <main className="main">
                    <div className="main__container">
                        <h2 className="main__container-title">{data.title}</h2>
                        <div className="main__container-description" dangerouslySetInnerHTML={{ __html: data.description }}/>
                    </div>
            </main>
        )
    }
}