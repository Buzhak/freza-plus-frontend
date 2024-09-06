import "./footer.scss";

import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__address">
                    <h3 className="footer__services-title">Адрес и телефоны</h3>
                    <p>Фреза +7 926 342 88 55 Frezaplus@yandex.ru</p>
                    <p>Лазер +7 916 472 5005 vozmislovo@yandex.ru</p>
                    <p>ПН-СБ, с 10:00 до 19:00</p>
                </div>
                <div className="footer__services">
                    <div className="footer__service">
                        <h3 className="footer__services-title">
                            Фрезерная резка
                        </h3>
                        <ul className="footer__services-item">
                            <li className="footer__services-item">Композит</li>
                            <li className="footer__services-item">ПВХ</li>
                            <li className="footer__services-item">МДФ</li>
                            <li className="footer__services-item">Фанера</li>
                            <li className="footer__services-item">Акрил</li>
                            <li className="footer__services-item">Поликарбонат</li>
                            <li className="footer__services-item">Полистирол</li>
                            <li className="footer__services-item">Капролон</li>
                        </ul>
                    </div>
                    <div className="footer__service">
                         <h3 className="footer__services-title">
                            Лазерная резка
                        </h3>
                        <ul className="footer__services-list">
                            <li className="footer__services-item">Лазерная резка ПЭТ-А</li>
                            <li className="footer__services-item">Лазерная резка акрила</li>
                            <li className="footer__services-item">Лазерная резка фанеры</li>
                            <li className="footer__services-item">Лазерная резка ХДФ</li>
                            <li className="footer__services-item">Трафареты</li>
                            <li className="footer__services-item">Изготовление коробок на заказ</li>
                            <li className="footer__services-item">Лазерная гравировка</li>
                            <li className="footer__services-item">Топперы для тортов и букетов</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__end">
                <p className="footer__c">Петя лох 2024©</p>
            </div>
        </footer>
    )
}

export default Footer;
