import "./header.scss";

import React, { Component } from "react";

import logo from "./logo.png"

export default class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="header__top">
                    <img className="header__logo" src={logo} alt="logo"/>
                    <div className="header__contact contact">
                        <div className="contact__item">
                            <p className="contact__title">Фрезерная резка</p>
                            <p className="contact__phone">+7 926 342 88 55</p>
                            <a className="contact__email" href="mailto:Frezaplus@yandex.ru">Frezaplus@yandex.ru</a>
                        </div>
                        <div className="contact__item">
                            <p className="contact__title">Лазерная резка</p>
                            <p className="contact__phone">+7 916 472 5005</p>
                            <a className="contact__email" href="mailto:vozmislovo@yandex.ru">vozmislovo@yandex.ru</a>
                        </div>
                    </div>
                </div>
                <nav className="header__navbar navbar">
                    <p className="navbar__item">Главная</p>
                    <p className="navbar__item">Фрезерная резка</p>
                    <p className="navbar__item">Лазеная резка</p>
                    <p className="navbar__item">Цены</p>
                    <p className="navbar__item">Заказать</p>
                    <p className="navbar__item">Контакты</p>
                </nav>
            </header>
        )
    }
}
