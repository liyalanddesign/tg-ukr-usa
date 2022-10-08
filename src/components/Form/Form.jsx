import React, {useState} from "react";
import './Form.css';

const Form = () => {

    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState();

    const onChangeCountry = (e) => {
        setCountry(e.target.alue)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.alue)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.alue)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={"input"} type="text" placeholder={'Страна'} value={country} onChange={onChangeCountry}></input>
            <input className={"input"} type="text" placeholder={'Улица'} value={street} onChange={onChangeStreet}></input>
            <select className="select" value={subject} onChange={onChangeSubject}>
                <option value={"legal"}>Юр. лицо</option>
                <option value={"phisical "}>Физ. лицо</option>
            </select>
        </div>
    )
}

export default Form;