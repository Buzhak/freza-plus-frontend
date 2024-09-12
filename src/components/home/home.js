import "./home.scss";

import React from "react";
import contectsLogo from "./img/contacts_logo.jpg";
import filesLogo from "./img/files_logo.jpg";
import frezaLogo from "./img/freza_logo.jpg";
import laserLogo from "./img/laser_logo.jpg";

const Home = () => {
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
        </>
    )
}

export default Home;