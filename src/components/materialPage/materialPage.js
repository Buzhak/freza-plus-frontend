import "./materialPage.scss";

import ApiService from "../../services/service";
import Base from "../base/base";
import React from "react";
import Table from "./table";
import acrilImg from "./img/akril.jpg";
import { useParams } from "react-router-dom";

const MaterialPageWraper = () => {
    const {id} = useParams();

    return <MaterialPage id={id}/>;
}

class MaterialPage extends Base {
    
    loadData = () => {
        if (typeof this.service === 'function') {
            this.service(this.props.id)
                .then(this.onDataLoaded)
                .catch(this.onError);
        } else {
            console.error("Service is not a function");
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.loadData();
        }   
    }
    
    componentDidMount = () => {
        const service = new ApiService();
        this.service = service.getMaterial;
        this.loadData();
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading menu. Please try again later.</p>;
        }

        let table,
            description,
            warning;
            
        if (data.table) {
            table = <>
                    <Table table={data.table}/>
                <div className="container__warning-info">
                    Каждый заказ рассчитывается индивидуально, после того, как мы увидим Ваш файл.
                </div>
            </>
        }

        if (data.warning) {
            warning = <p className="container__warning-text" dangerouslySetInnerHTML={{ __html: data.warning }} />
        }

        const description_template = <>
            <p className="container__description-info"  dangerouslySetInnerHTML={{ __html: data.description }} />
            {warning}
        </>
        
        if (!data.table && data.description) {
            table = description_template;
        } else {
            description = <div className="container__description">
                {description_template}
            </div>
        }

        return (
            <div className="container">
                <div className="container__body">
                    <div className="container__image-box">
                        <div className="container__image-placeholder">
                            <img className="container__image" src={acrilImg} alt="acril-img"/>
                        </div>
                        <div className="container__image-description">
                            <h3 className="container__image-title">Буквы из акрила с четвертью</h3>
                        </div>
                    </div>
                    <div className="container__info-box">
                        <h2 className="container__title">{data.title}</h2>
                        {table}
                    </div>
                </div>
                {description}
            </div>
        )
    }
}

export default MaterialPageWraper; 