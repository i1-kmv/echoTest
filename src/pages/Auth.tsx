import React, {useCallback} from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {AppRootStateType} from "../store/store"
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom"
import {loginTC, setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {useFormik} from "formik";
import { ErrorSnackbar } from "../utils/ErrorSnackbar"
import {setAuthModeAC} from "../store/registration-reducer";

export const Auth = () => {
    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.phone) {
                errors.phone = 'Обязательное поле!';
            }
            if (!values.password) {
                errors.password = 'Обязательное поле!';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(loginTC(values))
        }
    })

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const passwordRecoveryMode = useSelector<AppRootStateType, boolean>(state => state.auth.passwordRecoveryMode)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized)

    const dispatch = useDispatch()

    const registerModeHandler = () => {
        dispatch(setRegisterModeAC(true))
        dispatch(setAuthModeAC(false))
        dispatch(setPasswordRecoveryModeAC(false))
    }

    const passwordRecoveryModeHandler = () => {
        dispatch(setPasswordRecoveryModeAC(true))
        dispatch(setRegisterModeAC(false))
        dispatch(setAuthModeAC(false))
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
        <form className='auth-form form' onSubmit={formik.handleSubmit}>
            {isInitialized && <ErrorSnackbar/>}
            <div className='auth-form__inputs inputs'>
                {formik.errors.phone ? <div className="formik">{formik.errors.phone}</div> : null}
                <Input
                    className='auth-form__inputs-item input'
                    type="text"
                    name="phone"
                    placeholder="Введите ваш номер телефона"
                    formikProps={{...formik.getFieldProps('phone')}}
                />
                {formik.errors.password ? <div className="formik">{formik.errors.password}</div> : null}
                <Input
                    className='auth-form__inputs-item input'
                    type="text"
                    placeholder="Введите ваш пароль"
                    formikProps={{...formik.getFieldProps('password')}}
                />

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

export type FormikErrorType = {
    phone?: string
    password?: string
    code?: string
}