import React, {useCallback} from "react"
import {Input} from "../components/Input"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {setAuthModeAC} from "../store/registration-reducer"
import {Redirect} from "react-router-dom";
import {setRegisterModeAC} from "../store/auth-reducer";


export const Registration = () => {


    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)

    const dispatch = useDispatch()

    const authModeHandler = useCallback(() => {
        dispatch(setAuthModeAC(true))
        dispatch(setRegisterModeAC(false))
    },[dispatch])

    if (authMode) {
        return <Redirect to={'/'}/>
    }
    return (
        <form className='registration-form form'>
            <div className='registration-form__inputs inputs'>
                <Input className='registration-form__inputs-item' type="text" placeholder='Введите ваше имя'/>
                <Input className='registration-form__inputs-item' type="tel" placeholder='Введите ваш номер телефона'/>
                <Input className='registration-form__inputs-item' type="password" placeholder='Введите пароль'/>
                <img className="registration-form__image" src="../image/look.png" alt=""/>
                <Input className='registration-form__inputs-item' type="text" placeholder='Загрузить аватар'/>
            </div>
            <button className='registration-form__button button'>Регистрация</button>
            <div className='registration-form__links links'>
                <a className="links-item" onClick={authModeHandler}>Авторизация</a>
            </div>
        </form>
    )
}