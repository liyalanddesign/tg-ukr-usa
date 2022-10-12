import React from "react";
import './ButtonIcon.css'

const ButtonIcon = (props) => {
    return (
        <button className="button__icon">{props.value}</button>
    )
}

export default ButtonIcon;