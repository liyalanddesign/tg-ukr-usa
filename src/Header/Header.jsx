import React from "react";

const Header = () => {
    
    const TG = window.Telegram.WebApp;

    const onClose = () => {
        TG.close()
        console.log("Window supposed to be closed")
    }

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {TG.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header;