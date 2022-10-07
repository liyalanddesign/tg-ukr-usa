import React from "react";

const Button = (props) => {
    return (
        <button {...props} className={'button' + props.className}>
            Привет, я то же кнопка!
        </button>
    )
}

export default Button;