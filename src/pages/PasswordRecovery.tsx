import React, {useState} from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Redirect} from "react-router-dom";
import {setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"


export const PasswordRecovery = () => {

    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const passwordRecoveryMode = useSelector<AppRootStateType, boolean>(state => state.auth.passwordRecoveryMode)

    const dispatch = useDispatch()

    const [phoneConfirm, setPhoneConfirm] = useState(false)

    const onClickhandler= (phoneConfirm: boolean) => {
        if (!phoneConfirm) {
            return setPhoneConfirm(true)
        }
    }

    const registerModeHandler = () => {
        dispatch(setRegisterModeAC(true))
    }

    const passwordRecoveryModeHandler = () => {
        dispatch(setPasswordRecoveryModeAC(true))
    }


    if (registerMode) {
        return <Redirect to={'/registration'}/>
    }

    if (passwordRecoveryMode) {
        return <Redirect to={'/recovery'}/>
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
                    <a className='links-item' onClick={passwordRecoveryModeHandler}>Вспомнить пароль?</a>
                    <a className='links-item' onClick={registerModeHandler}>Регистрация</a>
                </div>
            </form>
    )
}