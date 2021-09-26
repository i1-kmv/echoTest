import React from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Redirect} from "react-router-dom"
import {setAppIsInitializedAC, setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {setAuthModeAC} from "../store/registration-reducer"
import {confirmPhoneTC} from "../store/recovery-reducer"
import {useFormik} from "formik"
import {FormikErrorType} from "./Auth"
import {ErrorSnackbar} from "../utils/ErrorSnackbar"


export const PasswordRecovery = () => {

    const confirmPhoneFormik = useFormik({
        initialValues: {
            confirmPhone: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.confirmPhone) {
                errors.confirmPhone = 'Обязательное поле!';
            }
            return errors;
        },
        onSubmit: (value) => {
            dispatch(confirmPhoneTC(value))
        }
    })

    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)
    const phoneConfirm = useSelector<AppRootStateType, boolean>(state => state.recovery.phoneConfirm)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized)

    const dispatch = useDispatch()


    const registerModeHandler = () => {
        dispatch(setRegisterModeAC(true))
        dispatch(setPasswordRecoveryModeAC(false))
    }

    const passwordAuthModeHandler = () => {
        dispatch(setAuthModeAC(true))
        dispatch(setRegisterModeAC(false))
        dispatch(setPasswordRecoveryModeAC(false))
    }

    if (registerMode) {
        return <Redirect to={'/registration'}/>
    }

    if (authMode) {
        return <Redirect to={'/'}/>
    }

    if (phoneConfirm) {
        return <Redirect to={'/sms'}/>
    }

    return (
        <form className='recovery-form form' onSubmit={confirmPhoneFormik.handleSubmit}>
            {isInitialized && <ErrorSnackbar/>}
            <div className='recovery-form__inputs inputs'>
                <div className="formik-input">
                    {confirmPhoneFormik.errors.confirmPhone ? <div className="formik">{confirmPhoneFormik.errors.confirmPhone}</div> : null}
                    <Input
                        className='recovery-form__inputs-item'
                        type="text"
                        placeholder="Введите ваш номер телефона"
                        name="confirmPhone"
                        formikProps={{...confirmPhoneFormik.getFieldProps('confirmPhone')}}
                    />
                </div>
            </div>
            <Button className='recovery-form__button button'
                    title={'Запросить пароль'}

            />
            <div className='recovery-form__links links'>
                <a className='links-item' onClick={passwordAuthModeHandler}>Вспомнить пароль?</a>
                <a className='links-item' onClick={registerModeHandler}>Регистрация</a>
            </div>
        </form>
    )
}