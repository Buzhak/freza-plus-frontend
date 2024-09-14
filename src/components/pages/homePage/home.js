import "../pages.scss";

import GetPage from "../../base/getPage";
import React from "react";
import contectsLogo from "./img/contacts_logo.jpg";
import filesLogo from "./img/files_logo.jpg";
import frezaLogo from "./img/freza_logo.jpg";
import laserLogo from "./img/laser_logo.jpg";

export default class Home extends GetPage{
    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading adresses</p>;
        }
        
        return (
            <>
                <div className="home">
                    <div className="home__bg"/>
                    <div className="home__content">
                        <h1 className="home__title">Раскрой и фрезеровка листовых материалов</h1>
                        <div className="home__items">
                            <div className="home__card card">
                                <img className="card__logo" src={frezaLogo} alt="freza-logo"/>
                                <h3 className="card__title">Фрезерная резка</h3>
                                <p className="card__description">Фрезеровка листовых материалов​</p>
                                <p className="card__link" href="#">Подробнее</p>
                            </div>
                            <div className="home__card card">
                                <img className="card__logo" src={laserLogo} alt="freza-logo"/>
                                <h3 className="card__title">Лазерная резка</h3>
                                <p className="card__description">Лазерная резка листовых материалов​</p>
                                <p className="card__link" href="#">Подробнее</p>
                            </div>
                            <div className="home__card card">
                                <img className="card__logo" src={filesLogo} alt="freza-logo"/>
                                <h3 className="card__title">Проектирование</h3>
                                <p className="card__description">Услуги по подготовке фaйлов к производству</p>
                                <p className="card__link" href="#">Подробнее</p>
                            </div>
                            <div className="home__card card">
                                <img className="card__logo" src={contectsLogo} alt="freza-logo"/>
                                <h3 className="card__title">Наши контакты</h3>
                                <p className="card__description">Ждём вас на нашем производстве​</p>
                                <p className="card__link" href="#">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="main-content__container">
                        <h2 className="main-content__container-title-main">{ data.content_main_title }</h2>
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_description }}/>
                        <h3 className="main-content__container-title-sec">{ data.content_extended_title }</h3>
                        <div className="main-content__container-description" dangerouslySetInnerHTML={{ __html: data.content_extended_description }}/>
                    </div>
                </div>
            </>
        )
    }
}