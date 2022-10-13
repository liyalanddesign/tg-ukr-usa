import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import './ButtonIcon.css'

const ButtonIcon = ({value, type, icon}) => {

    console.log(icon)

    let faIcon;
    if(icon == 'faAddressCard'){
        faIcon = faAddressCard
    }

    return (
        <div className="button-icon__container">
            <FontAwesomeIcon icon={faAddressCard} />
            <div className={'button__icon ' + type}>{value}</div>
        </div>
    )
}

export default ButtonIcon;