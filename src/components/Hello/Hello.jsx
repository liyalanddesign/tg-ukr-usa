import React from "react";
import ReactDOM, {Link} from 'react-router-dom'
import('./Hello.css')

const Hello = () => {

    return(
        <div className="hello__cntainer">
            <div className="hello">
                <h1>Ukrainians in USA <span>bot</span></h1>
                <p>В нашем Боте Вы сможете найти ответы на наиболее частозадаваемые вопросы.</p>
            </div>

            <ul className="roadmap__container">
                <div className="roadmap__item">
                    <div className="roadmap__header">
                        <h3>Документы</h3>
                        <div className="roadmap__description">
                            Список документов необходимых для жизни в США.
                        </div>
                    </div>
                    <div className="roadmap__body">
                        <ul className="roadmap__buttons--container">
                            <li>
                                {/* Button #1 */}
                                <div className="roadmap__button">
                                    <img src="img/address-card-regular.svg" alt="" />
                                    <div className="roadmap__text">SSN</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #2 */}
                                <div className="roadmap__button">
                                    <img src="img/screwdriver-wrench-solid.svg" alt="" />
                                    <div className="roadmap__text">Work Permit</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #3 */}
                                <div className="roadmap__button">
                                    <img src="img/car-side-solid.svg" alt="" />
                                    <div className="roadmap__text">Driver License</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #4 */}
                                <div className="roadmap__button">
                                    <img src="img/flag-usa-solid.svg" alt="" />
                                    <div className="roadmap__text">Green Card</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #5 */}
                                <div className="roadmap__button">
                                    <img src="img/house-user-solid.svg" alt="" />
                                    <div className="roadmap__text">Rent</div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="roadmap__item">
                    <div className="roadmap__header">
                        <h3>Здоровье</h3>
                        <div className="roadmap__description">
                            Всё, что касается здоровья.
                        </div>
                    </div>
                    <div className="roadmap__body">
                        <ul className="roadmap__buttons--container">
                            <li>
                                {/* Button #1 */}
                                <div className="roadmap__button">
                                    <img src="img/hospital-regular.svg" alt="" />
                                    <div className="roadmap__text">Клиники</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #2 */}
                                <div className="roadmap__button">
                                    <img src="img/user-injured-solid.svg" alt="" />
                                    <div className="roadmap__text">Страховка</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #3 */}
                                <div className="roadmap__button">
                                    <img src="img/staff-snake-solid.svg" alt="" />
                                    <div className="roadmap__text">Аптеки</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #4 */}
                                <div className="roadmap__button">
                                    <img src="img/flag-usa-solid.svg" alt="" />
                                    <div className="roadmap__text">Лекарства</div>
                                </div>
                            </li>
                            <li>
                                {/* Button #5 */}
                                <div className="roadmap__button">
                                    <img src="img/pills-solid.svg" alt="" />
                                    <div className="roadmap__text">Dantist</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Hello;