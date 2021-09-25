import React, {useCallback} from "react"
import {Input} from "../components/Input"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../store/store"
import {setAuthModeAC} from "../store/registration-reducer"
import {Redirect} from "react-router-dom"
import {loginTC, setIsLoggedInAC, setRegisterModeAC} from "../store/auth-reducer"
import {useFormik} from "formik";
import {FormikErrorType} from "./Auth";


export const Registration = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            password:'',
            avatar:''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Обязательное поле!';
            }
            if (!values.phone) {
                errors.phone = 'Обязательное поле!';
            }
            if (!values.password) {
                errors.password = 'Обязательное поле!';
            }
            if (!values.avatar) {
                errors.avatar = 'Обязательное поле!';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(setRegisterModeAC(false))
            dispatch(setIsLoggedInAC(true))
        }
    })

    const authMode = useSelector<AppRootStateType, boolean>(state => state.register.authMode)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    const authModeHandler = () => {
        dispatch(setAuthModeAC(true))
        dispatch(setRegisterModeAC(false))
    }

    if (authMode) {
        return <Redirect to={'/'}/>
    }

    if (isLoggedIn) {
        return <Redirect to={'/cabinet'}/>
    }
    return (
        <form className='registration-form form' onSubmit={formik.handleSubmit}>
            <div className='registration-form__inputs inputs'>
                {formik.errors.name ? <div className="formik">{formik.errors.name}</div> : null}
                <Input
                    className='registration-form__inputs-item'
                    type="text"
                    placeholder='Введите ваше имя'
                    name="name"
                    formikProps={{...formik.getFieldProps('name')}}
                />
                {formik.errors.phone ? <div className="formik">{formik.errors.phone}</div> : null}
                <Input
                    className='registration-form__inputs-item'
                    type="tel"
                    placeholder='Введите ваш номер телефона'
                    name="phone"
                    formikProps={{...formik.getFieldProps('phone')}}
                />
                {formik.errors.password ? <div className="formik">{formik.errors.password}</div> : null}
                <Input
                    className='registration-form__inputs-item'
                    type="password"
                    placeholder='Введите пароль'
                    name="password"
                    formikProps={{...formik.getFieldProps('password')}}
                />
                {formik.errors.avatar ? <div className="formik">{formik.errors.avatar}</div> : null}
                <Input
                    className='registration-form__inputs-item'
                    type="file"
                    placeholder='Загрузить аватар'
                    name="avatar"
                    formikProps={{...formik.getFieldProps('avatar')}}
                />
            </div>
            <button className='registration-form__button button'>Регистрация</button>
            <div className='registration-form__links links'>
                <a className="links-item" onClick={authModeHandler}>Авторизация</a>
            </div>
        </form>
    )
}