'use client';
import styles from './AccountMain.module.css'
import Link from "next/link";
import {PrimaryBtn} from "@/shared/ui";


interface IAccountMain {
    className?: string;
}

export const AccountMain = ({className}: IAccountMain) => {

    return (
        <section className={`${styles.accountSection} ${className ? className : ""}`}>
            <h1 className={styles.accountTitle}>Ваш аккаунт</h1>
            <div className={styles.accountContent}>
                <h2 className={styles.accountMainTitle}>123@example.com</h2>
            </div>
        </section>
    );
}
