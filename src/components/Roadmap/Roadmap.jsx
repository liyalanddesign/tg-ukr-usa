import('./Roadmap.css')
import ButtonCategories from '../ButtonCategories'

const Roadmap = () => (
    <div className='roadmap__container'>
        <div className={'roadmap__head'}>
            <h2>Вопросы на которые можно получить ответы.</h2>
            <p>Ниже приведены текущие вопросы на которые уже готовятся ответы.</p>
        </div>

        <div className="roadmap__item">
            <h2>Документы</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Здоровье</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Транспорт</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Жилье</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Работа</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Дети</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Религия</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Досуг</h2>
            <ButtonCategories />
        </div>

        <div className="roadmap__item">
            <h2>Другое</h2>
            <ButtonCategories />
        </div>
    </div>



)

export default Roadmap;