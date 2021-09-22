import React from "react";
import {Input} from "../Components/Input";


export const Registration = () => {
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
                <a className="links-item">Авторизация</a>
            </div>
        </form>
    )
}