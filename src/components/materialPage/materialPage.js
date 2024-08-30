import "./materialPage.scss";

import React from "react";
import acrilImg from "./img/akril.jpg";

const MaterialPage = () => {
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
                    <h2 className="container__title">Фрезеровка акрила</h2>
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
                <p>
                    Фрезерование акрила широко используется в изготовлении рекламных объектов: лайтбоксов, стендов, щитов, объёмных букв, всевозможных карманов, табличек, дипломов.<br/><br/>
                    Наиболее востребованная услуга — резка букв для инкрустации в композит с выборкой четверти, а также резка лиц для объемных букв с четвертью под борт.<br/><br/>
                    Мы также оказываем услуги по гравировке оргстекла — обработке материала специальными граверами. Этот способ обработки используется, например, в изготовлении акрилайтов — световых панелей с торцевой подсветкой.<br/><br/>
                    Для просчета стоимости присылайте Ваши чертежи, по возможности уже с раскладкой в листах.<br/><br/>
                    Если Вам нужны буквы для инкрустации в композит, обязательно указывайте это в файле, так как в этом случае мы дорабатываем макет как композита, так и акрила.
                </p>
            </div>
        </div>
    )
}

export default MaterialPage;