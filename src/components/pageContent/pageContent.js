import "./pageContent.scss";

import ApiService from "../../services/service";
import Base from "../base/base";
import React from "react";

export default class PageContent extends Base {
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.loadData();
        }   
    }

    loadData = () => {
        if (typeof this.service === 'function') {
            this.service(this.props.id)
                .then(this.onDataLoaded)
                .catch(this.onError);
        } else {
            console.error("Service is not a function");
        }
    }

    componentDidMount = () => {
        const service = new ApiService();
        this.service = service.getPage;
        this.loadData();
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }

        return (
            <div className="main-content">
                    <div className="main-content__container">
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.description }}/>
                    </div>
            </div>
        )
    }
}