import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Logina } from '../../redux/auth-reducer';




const Login = () => {
    const [toggleState, setToggleState] = useState(0)

    const dispatch = useDispatch()

    const login = () => {
        dispatch(Logina())
    }

    return (
        <div className="login">
            <div className="login__body">
                <div className="login__header">
                    <h1 className={toggleState === 0
                        ? "login__title active"
                        : "login__title"}
                        onClick={() => setToggleState(0)}
                    >Регистрация</h1>
                    <h1 className={toggleState === 1
                        ? "login__title active"
                        : "login__title"}
                        onClick={() => setToggleState(1)}
                    >Авторизация</h1>
                </div>
                {toggleState === 0 && <>
                    <form action="" className="login__form">
                        <h3 className="login__lable">Логин</h3>
                        <input type="text" className="login__input" placeholder='Логин' />
                        <h3 className="login__lable">Почта</h3>
                        <input type="text" className="login__input" placeholder='Почта' />
                        <h3 className="login__lable">Пароль</h3>
                        <input type="text" className="login__input" placeholder='Пароль' />
                        <button className="login__btn">Зарегистрироваться</button>
                    </form> </>}
                {toggleState === 1 && <>
                    <form action="" className="login__form">
                        <h3 className="login__lable">Почта</h3>
                        <input type="text" className="login__input" placeholder='Почта' />
                        <h3 className="login__lable">Пароль</h3>
                        <input type="text" className="login__input" placeholder='Пароль' />
                        <div className="login__row">
                            <input type="checkbox" className="login__checkbox" />
                            <h3 className="login__lable row">Запоминть</h3>
                        </div>
                        <button className="login__btn" onClick={() => login()} >Войти</button>
                    </form> </>}

            </div>
        </div>
    );
}

export default Login;
