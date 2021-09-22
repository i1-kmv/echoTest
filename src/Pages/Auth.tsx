import React from "react";
import {Input} from "../Components/Input";
import {Button} from "../Components/Button";

export const Auth = () => {
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
                <a className="links-item">Забыли пароль?</a>
                <a className="links-item">Регистрация</a>
            </div>
        </form>
    )
}