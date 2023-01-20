import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Register } from '../../redux/auth-reducer';



const Registration = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange'
    })

    const onSubmit = (values) => {
        dispatch(Register(values.fullName, values.email, values.password))
    }


    return (
        <div className="login">
            <div className="login__body">
                <div className="login__header">
                    <Link to='/register' className={"login__title active"}>Регистрация</Link>
                    <Link to='/login' className={"login__title"}>Авторизация</Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <TextField
                        style={{ marginBottom: 20 }}
                        label="Полное имя"
                        fullWidth
                        error={Boolean(errors.fullName?.message)}
                        helperText={errors.fullName?.message}
                        {...register('fullName', { required: 'Укажите имя' })}
                    />
                    <TextField
                        style={{ marginBottom: 20 }}
                        label="Почта"
                        fullWidth
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
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
                    <Button type='submit' size="large" variant="contained" fullWidth>
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Registration;

