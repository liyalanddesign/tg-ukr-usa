import React, {useState, useEffect} from "react";
import './Form.css';
import { useTelegram  } from "../../hooks/useTelegram";

const Form = () => {

    const [country, setCountry] = useState();
    const [street, setStreet] = useState();
    const [subject, setSubject] = useState();
    const {TG} = useTelegram();

    useEffect( ()=>{
        TG.MainButton.setParams({
            text: 'Отправить данные'
        }) 
    }, []);

    useEffect( ()=>{
        if(!street || !country){
            TG.MainButton.hide()
        } else{
            TG.MainButton.show()
        }
    }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
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