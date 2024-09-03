import "./materialPage.scss";

import ApiService from "../../services/service";
import Base from "../base/base";
import React from "react";
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
        const {data} = this.state;
        
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
                        <table className="container__info-table info-table">
                            <tbody>
                                <tr>
                                    <th>Толщина материала, мм.</th>
                                    <th>Стоимость резки за 1 м.п., руб.</th>
                                </tr>
                                <tr>
                                    <td>1 — 2</td>
                                    <td>От 10</td>
                                </tr>
                                <tr>
                                    <td>3 — 4</td>
                                    <td>От 20</td>
                                </tr>
                                <tr>
                                    <td>5 — 6</td>
                                    <td>От 35</td>
                                </tr>
                                <tr>
                                    <td>8 — 10</td>
                                    <td>От 60</td>
                                </tr>
                                <tr>
                                    <td>12 — 15</td>
                                    <td>От 90</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>От 110</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="container__warning-info">
                            Каждый заказ рассчитывается индивидуально, после того, как мы увидим Ваш файл.
                        </div>
                    </div>
                </div>
                <div className="container__description">
                    <p dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
            </div>
        )
    }
}

export default MaterialPageWraper; 