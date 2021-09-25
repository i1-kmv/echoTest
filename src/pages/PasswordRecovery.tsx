import React from "react"
import {Input} from "../components/Input"
import {Button} from "../components/Button"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {Redirect} from "react-router-dom";
import {setPasswordRecoveryModeAC, setRegisterModeAC} from "../store/auth-reducer"
import {setAuthModeAC} from "../store/registration-reducer"
import {confirmPhoneTC, setPhoneConfirmAC} from "../store/recovery-reducer"
import {useFormik} from "formik";
import {FormikErrorType} from "./Auth";
import {ErrorSnackbar} from "../utils/ErrorSnackbar";


export const PasswordRecovery = () => {

    const formik = useFormik({
        initialValues: {
            confirmPhone: '',
            sms: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.confirmPhone) {
                errors.confirmPhone = 'Обязательное поле!';
            }
            if (!values.sms) {
                errors.password = 'Обязательное поле!';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(confirmPhoneTC(values))
            console.log(values)
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

    const passwordRecoveryModeHandler = () => {
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

    return (
            <form className='recovery-form form' onSubmit={formik.handleSubmit}>
                {isInitialized && <ErrorSnackbar/>}
                <div className='recovery-form__inputs inputs'>
                    {
                        !phoneConfirm ?
                            <div className="formik-input">
                                {formik.errors.confirmPhone ? <div className="formik">{formik.errors.confirmPhone}</div> : null}
                                <Input
                                    className='recovery-form__inputs-item'
                                    type="text"
                                    placeholder="Введите ваш номер телефона"
                                    name="confirmPhone"
                                    formikProps={{...formik.getFieldProps('phone')}}
                                />
                            </div>
                            :
                           <div>
                               {formik.errors.sms ? <div className="formik">{formik.errors.sms}</div> : null}
                               <Input
                                   className='recovery-form__inputs-item'
                                   type="text"
                                   placeholder="Введите код из СМС"
                                   name="sms"
                                   formikProps={{...formik.getFieldProps('sms')}}
                               />
                           </div>
                    }
                </div>
                    <Button className='recovery-form__button button'  title={!phoneConfirm ? 'Запросить пароль' : 'Отправить код'}/>
                <div className='recovery-form__links links'>
                    <a className='links-item' onClick={passwordRecoveryModeHandler}>Вспомнить пароль?</a>
                    <a className='links-item' onClick={registerModeHandler}>Регистрация</a>
                </div>
            </form>
    )
}