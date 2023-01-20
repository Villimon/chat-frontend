import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginThunk } from '../../redux/auth-reducer';




const Login = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: 'admin@admin.ru',
            password: 'admin',
        },
        mode: 'onChange'
    })


    const onSubmit = (values) => {
        dispatch(LoginThunk(values.email, values.password))
    }



    return (
        <div className="login">
            <div className="login__body">
                <div className="login__header">
                    <Link to={'/register'} className={"login__title"}>Регистрация</Link>
                    <Link to={'/login'} className={"login__title active"}>Авторизация</Link>
                </div>
                <form className="login__form" onSubmit={handleSubmit(onSubmit)} >
                    <TextField
                        style={{ marginBottom: 20 }}
                        label="Почта"
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        fullWidth
                        type="email"
                        {...register('email', { required: 'Укажите почту' })}
                    />
                    <TextField
                        style={{ marginBottom: 20 }}
                        label="Пароль"
                        fullWidth
                        type='password'
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'Укажите пароль' })}
                    />
                    <Button type="submit" size="large" variant="contained" fullWidth>
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
