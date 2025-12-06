'use client';
import styles from './Auth.module.css'
import {useState} from "react";
import Image from "next/image";
import {PasswordEyeClosedIcon, PasswordEyeIcon} from "@/shared/assets";




export const Auth = () => {
    const [data, setData] = useState(
        {
            login: "",
            password: ""
        }
    )

    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className={styles.auth}>
            <form action="/" className={styles.authForm}>
                <label className={styles.authLabel} htmlFor="login">Email или логин <span>*</span>:</label>
                <input value={data.login} onChange={(e) => setData({...data, login: e.currentTarget.value})} className={`${styles.authInput} ${styles.authInputLogin}`} placeholder={"Введите данные для авторизации"} id={"login"} type="text"/>
                <label className={styles.authLabel} htmlFor="password">Пароль <span>*</span>:</label>
                {showPassword
                    ?
                    <div className={styles.authInputPasswordWrapper}>
                        <input value={data.password} onChange={(e) => setData({...data, password: e.currentTarget.value})} className={styles.authInput} placeholder={"Введите пароль"} id={"password"} type="text"/>
                        <Image onClick={() => setShowPassword(!showPassword)} className={styles.authInputPasswordIcon} src={PasswordEyeIcon} alt={"Пароль виден"}/>
                    </div>
                    :
                    <div className={styles.authInputPasswordWrapper}>
                        <input value={data.password} onChange={(e) => setData({...data, password: e.currentTarget.value})} className={styles.authInput} placeholder={"Введите пароль"} id={"password"} type="password"/>
                        <Image onClick={() => setShowPassword(!showPassword)} className={styles.authInputPasswordIcon} src={PasswordEyeClosedIcon} alt={"Пароль невиден"}/>
                    </div>
                }

                <input className={styles.authSubmit} value={"Авторизоваться"} type="submit"/>
            </form>
        </section>
    );
}
