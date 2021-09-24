import React from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {AppRootStateType} from "../store/store"
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom"
import {setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {formApi} from "../api/form-api";

export const Auth = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const passwordRecoveryMode = useSelector<AppRootStateType, boolean>(state => state.auth.passwordRecoveryMode)

    console.log(formApi.getUser())

    const dispatch = useDispatch()

    const registerModeHandler = () => {
        dispatch(setRegisterModeAC(true))
    }

    const passwordRecoveryModeHandler = () => {
        dispatch(setPasswordRecoveryModeAC(true))
    }

    if (isLoggedIn) {
        return <Redirect to={'/cabinet'}/>
    }

    if (registerMode) {
        return <Redirect to={'/registration'}/>
    }

    if (passwordRecoveryMode) {
        return <Redirect to={'/recovery'}/>
    }

    return (
        <form className='auth-form form'>
            <div className='auth-form__inputs inputs'>
                <Input className='auth-form__inputs-item input' type="text" placeholder="Введите ваш номер телефона"/>
                <Input className='auth-form__inputs-item input' type="text" placeholder="Введите ваш пароль"/>
            </div>
            <div className='auth-form__save'>
                <input type="checkbox"/>
                <span>Запомнить меня</span>
            </div>
            <Button className='auth-form__button button' title='Войти'/>
            <div className='auth-form__links links'>
                <a className="links-item" onClick={passwordRecoveryModeHandler}>Забыли пароль?</a>
                <a className="links-item" onClick={registerModeHandler}>Регистрация</a>
            </div>
        </form>
    )
}