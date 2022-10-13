import('./Roadmap.css')
import ButtonCategories from '../ButtonCategories'


const Roadmap = () => {
    // const categories = [
        // { catName: "Документы", 
        //   catDescr: "Описание категории документы", 
        //   catItems: { 
        //     ssn: {name: "SSN", preview: "", icon: "", link: "" },
        //     gc: {name: "Green Card", preview: "", icon:"", link:"" },
        //     wp: {name: "Work Permit", preview: "", icon:"", link:"" },
        //     dl: {name: "Friver License", preview: "", icon:"", link:"" },
        //   },
        // }
        // ["Здоровье", "Описание категории здоровье", [
        //   { name: "Клиники", preview: "", icon: "", link:"" },
        //   { name: "Insurance", preview: "", icon:"", link:"" },
        //   { name: "Аптеки", preview: "", icon:"", link:""},
        //   { name: "Лекарства", preview: "", icon:"", link:""}
        // ]]
    // ];

    return(
        <div className="roadmap__container">
            <div className="text-big">
                Список тем по категориям на которые необходимо дать ответы в первую очередь:
            </div>

            <div className="item">
                <h3>Термины:</h3>
                <p className='color-light'>Список терминов, которые в Украине не используются, а в США заставляют задуматься:</p>
                <ul>
                    <li>Rent - рент</li>
                    <li>Food Banks - фудбанки</li>
                    <li>Benefits - бенефиты</li>
                    <li>Landlord - лэндлорд</li>
                    <li>Insurance - иншуренс</li>
                    <li>...</li>
                </ul>
            </div>

            <div className="item">
                <h3>Документы:</h3>
                <p className='color-light'>Какие документы нужны для начала "нормальной жизни в США" и как их получить:</p>
                <ul className='list'>
                    <li> SSN - Social Security Number</li>
                    <li> Work Permit - Разрещение на работу</li>
                    <li> Driver License - Водительское удостоверение</li>
                    <li> Green Card - Право на проживание в США</li>
                </ul>
            </div>

            <div className="item">
                <h3>Здоровье:</h3>
                <ul>
                    <li>Бесплатные клиники</li>
                    <li>Фитнесс</li>
                    <li>Спортзал - GYM</li>
                </ul>
            </div>

            <div className="item">
                <h3>Финансы:</h3>
                <ul>
                    <li>DHHS Оформление benefits</li>
                    <li>Банки</li>
                    <li>Как открыть счет в банке</li>
                </ul>
            </div>

            <div className="item">
                <h3>Жилье:</h3>
                <ul>
                    <li>Документы для аренды жилья</li>
                    <li>Районы, расположение</li>
                </ul>
            </div>

            <div className="item">
                <h3>Работа:</h3>
                <ul>
                    <li>Что нужно, что бы получить право на работу</li>
                    <li>Где найти работу</li>
                </ul>
            </div>

            <div className="item">
                <h3>Питание:</h3>
                <ul>
                    <li>Список фудбанков</li>
                    <li>Список магазинов</li>
                </ul>
            </div>

            <div className="item">
                <h3>Транспорт:</h3>
                <ul>
                    <li>Документы для покупки транспорта</li>
                    <li>Документы для его содержания</li>
                    <li>Где купить</li>
                    <li>Где починить</li>
                </ul>
            </div>

            <div className="item">
                <h3>Дети:</h3>
                <ul>
                    <li>Какую школу выбрать</li>
                    <li>Какие нужны документы</li>
                    <li>Как детям добираться до школы</li>
                </ul>
            </div>

            <div className="item">
                <h3>Досуг:</h3>
                <ul>
                    <li>Где хорошо покушать</li>
                    <li>Где недорого покушать</li>
                    <li>Кино</li>
                    <li>Куда поехать отдохнуть</li>
                </ul>
            </div>

            <div className="item">
                <h3>Другое:</h3>
                <ul>
                    <li>... Добавьте свою категорию</li>
                </ul>
            </div>
        </div>
    )
}

export default Roadmap;