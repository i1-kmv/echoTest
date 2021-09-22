import React, {useState} from "react";
import {Input} from "../Components/Input";
import {Button} from "../Components/Button";


export const PasswordRecovery = () => {

    const [phoneConfirm, setPhoneConfirm] = useState(false)

    const onClickhandler= (phoneConfirm: boolean) => {
        if (!phoneConfirm) {
            return setPhoneConfirm(true)
        }
    }

    return (
            <form className='recovery-form form'>
                <div className='recovery-form__inputs inputs'>
                    {
                        !phoneConfirm ?
                            <Input className='recovery-form__inputs-item input' type="text" placeholder="Введите ваш номер телефона"/>
                            :
                            <Input className='recovery-form__inputs-item input' type="text" placeholder="Введите код из СМС"/>
                    }
                </div>
                <div onClick={() => onClickhandler(phoneConfirm)}>
                    <Button className='recovery-form__button button'  title={!phoneConfirm ? 'Запросить пароль' : 'Отправить код'}></Button>
                </div>
                <div className='recovery-form__links links'>
                    <a className='links-item'>Вспомнить пароль?</a>
                    <a className='links-item'>Регистрация</a>
                </div>
            </form>
    )
}