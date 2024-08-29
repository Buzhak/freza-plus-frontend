import "./header.scss";

import React, { Component } from "react";

import logo from "./img/logo.png"

export default class Header extends Component {
    render () {
        return (
            <header className="header">
                <div className="header__top">
                    <img className="header__logo" src={logo} alt="logo"/>
                    <div className="header__contact contact">
                        <div className="contact__item">
                            <p className="contact__title">Фрезерная резка</p>
                            <a className="contact__phone" href="tel:+79263428855">+7 926 342 88 55</a>
                            <a className="contact__email" href="mailto:Frezaplus@yandex.ru">Frezaplus@yandex.ru</a>
                        </div>
                        <div className="contact__item">
                            <p className="contact__title">Лазерная резка</p>
                            <a className="contact__phone" href="tel:+79164725005">+7 916 472 5005</a>
                            <a className="contact__email" href="mailto:vozmislovo@yandex.ru">vozmislovo@yandex.ru</a>
                        </div>
                    </div>
                </div>
                <nav className="header__navbar navbar">
                    <p className="navbar__item">Главная</p>
                    <p className="navbar__item">
                        Фрезерная резка
                        <div className="navbar__dropdown">
                            <p className="navbar__dropdown-item">Фрезеровка композита</p>
                            <p className="navbar__dropdown-item">Фрезеровка ПВХ</p>
                            <p className="navbar__dropdown-item">Фрезеровка акрила</p>
                            <p className="navbar__dropdown-item">Фрезеровка полистирола</p>
                            <p className="navbar__dropdown-item">Фрезеровка фанеры</p>
                            <p className="navbar__dropdown-item">Фрезеровка МДФ</p>
                            <p className="navbar__dropdown-item">Фрезеровка ДСП</p>
                            <p className="navbar__dropdown-item">Фрезеровка капролона</p>
                            <p className="navbar__dropdown-item">Фрезеровка литого поликарбоната</p>
                        </div>
                    </p>
                    <p className="navbar__item">
                        Лазеная резка
                        <div className="navbar__dropdown">
                            <p className="navbar__dropdown-item">Лазерная гравировка</p>
                            <p className="navbar__dropdown-item">Лазерная резка ПЭТ</p>
                            <p className="navbar__dropdown-item">Лазерная резка фанеры</p>
                            <p className="navbar__dropdown-item">Лазерная резка акрила</p>
                            <p className="navbar__dropdown-item">Лазерная резка ХДФ</p>
                            <p className="navbar__dropdown-item">Изготовление коробок на заказ</p>
                            <p className="navbar__dropdown-item">Трафареты</p>
                            <p className="navbar__dropdown-item">Топперы для тортов и букетов</p>
                        </div>
                        </p>
                    <p className="navbar__item">Цены</p>
                    <p className="navbar__item">Заказать</p>
                    <p className="navbar__item">Контакты</p>
                </nav>
            </header>
        )
    }
}
