import styles from './Form.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { LoginInterface } from './types.ts';
import { schema } from './schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const LogForm = () => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginInterface>({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data: LoginInterface) => {
        const testCredentials = {
            email: "test@mail.com",
            password: "123456",
        };

        if (data.email === testCredentials.email && data.password === testCredentials.password) {
            localStorage.setItem("token", "fake-token");
            window.location.href = "/landing";
        } else {
            alert("Неправильный email или пароль");
        }

        reset();
    };

    console.log(errors);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submitForm)}>
                <span>"test@mail.com", "123456"</span>
                <h3 className={styles.register}>Вход</h3>

                <div className={styles.formWrapper}>

                    <div className={styles.inputWrapper}>
                        <label>Электронная почта</label>
                        <input {...register('email')} type='email' placeholder='Введите email' />
                        <p className={styles.error}>{errors.email?.message}</p>
                    </div>

                    <div className={styles.inputWrapper}>
                        <label>Пароль</label>
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => <input {...field} type='password' placeholder='Введите пароль' />}
                        />
                        <p className={styles.error}>{errors.password?.message}</p>
                    </div>
                </div>

                <button type='button' onClick={handleSubmit(submitForm)}>Войти</button>
                <div className={styles.signIn}>
                    <span className={styles.signTitle}>
                        вы не зарегестрированы?
                        <Link to='/' className={styles.signLink}>
                            зарегистрироваться
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export { LogForm };
