import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Redirect} from "react-router-dom"
import {setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {setAuthModeAC} from "../store/registration-reducer"
import { setSmsConfirmAC} from "../store/recovery-reducer"


export const Password = () => {

    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)
    const dispatch = useDispatch()


    const passwordAuthModeHandler = () => {
        dispatch(setAuthModeAC(true))
        dispatch(setRegisterModeAC(false))
        dispatch(setPasswordRecoveryModeAC(false))
        dispatch(setSmsConfirmAC(false))
    }

    if (registerMode) {
        return <Redirect to={'/registration'}/>
    }

    if (authMode) {
        return <Redirect to={'/'}/>
    }


    return (
        <form className='form'>
            <div className="form-confirm"> Уважаемый пользователь, Ваш пароль: <b>1234567890</b></div>
            <div className='links'>
                <a className='links-item' onClick={passwordAuthModeHandler}>Авторизация</a>
            </div>
        </form>
    )
}