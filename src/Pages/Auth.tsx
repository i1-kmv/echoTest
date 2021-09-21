export const Auth = () => {
    return (
        <div className='auth'>
            <form className='auth-form'>
                <div className='auth-form__inputs'>
                    <input className='auth-form__inputs-item' type="text"/>
                    <input className='auth-form__inputs-item' type="text"/>
                </div>
               <div className='auth-form__save'>
                   <input type="checkbox"/>
                   <span>Запомнить меня</span>
               </div>
                <button className='auth-form__button'>Войти</button>
                <div className='auth-form__links'>
                    <a>Забыли пароль?</a>
                    <a>Регистрация</a>
                </div>
            </form>
        </div>
    )
}