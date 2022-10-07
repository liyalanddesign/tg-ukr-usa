const TG = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        TG.close()
    }
    const onToggleButton = () => {
        if(TG.MainButton.inVisible){
            TG.MainButton.hide();
        } else {
            TG.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        TG,
        user: TG.initDataUnsaefe?.user,
    }
}