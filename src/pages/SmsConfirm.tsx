import React from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Redirect} from "react-router-dom"
import {setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {setAuthModeAC} from "../store/registration-reducer"
import {confirmSmsTC, setPhoneConfirmAC, setSmsConfirmAC} from "../store/recovery-reducer"
import {useFormik} from "formik"
import {FormikErrorType} from "./Auth"
import {ErrorSnackbar} from "../utils/ErrorSnackbar"
import CustomizedSnackbars from "../utils/smsAlert"


export const SmsConfirm = () => {

    const SmsFormik = useFormik({
        initialValues: {
            sms: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.sms) {
                errors.sms = 'Обязательное поле!';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(confirmSmsTC(values))
        }
    })

    const registerMode = useSelector<AppRootStateType, boolean>(state => state.auth.registerMode)
    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)
    const smsConfirm = useSelector<AppRootStateType, boolean>(state => state.recovery.smsConfirm)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized)


    const dispatch = useDispatch()


    const registerModeHandler = () => {
        dispatch(setPasswordRecoveryModeAC(false))
        dispatch(setSmsConfirmAC(false))
        dispatch(setAuthModeAC(false))
        dispatch(setRegisterModeAC(true))
    }

    const authModeHandler = () => {
        dispatch(setPhoneConfirmAC(false))
        dispatch(setRegisterModeAC(false))
        dispatch(setPasswordRecoveryModeAC(false))
        dispatch(setSmsConfirmAC(false))
        dispatch(setAuthModeAC(true))
    }

    if (registerMode) {
        return <Redirect to={'/registration'}/>
    }

    if (authMode) {
        return <Redirect to={'/'}/>
    }

    if (smsConfirm) {
        return <Redirect to={'/password'}/>
    }

    return (
                <>
                    <form className='recovery-form form' onSubmit={SmsFormik.handleSubmit}>
                        {isInitialized && <ErrorSnackbar/>}
                        <div className='recovery-form__inputs inputs'>
                            <div className="formik-input">
                                {SmsFormik.errors.sms ? <div className="formik">{SmsFormik.errors.sms}</div> : null}
                                <Input
                                    className='recovery-form__inputs-item'
                                    type="text"
                                    placeholder="Введите код из смс"
                                    name="sms"
                                    formikProps={{...SmsFormik.getFieldProps('sms')}}
                                />
                            </div>
                        </div>
                        <Button className='recovery-form__button button'
                                title='Отправить код'/>
                        <div className='recovery-form__links links'>
                            <a className='links-item' onClick={authModeHandler}>Вспомнить пароль?</a>
                            <a className='links-item' onClick={registerModeHandler}>Регистрация</a>
                        </div>
                    </form>
                    <CustomizedSnackbars/>
                </>
    )
}