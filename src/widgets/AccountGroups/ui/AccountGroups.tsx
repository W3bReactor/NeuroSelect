'use client';
import styles from './AccountGroups.module.css'
import Link from "next/link";
import {PrimaryBtn} from "@/shared/ui";


interface IAccountGroups {
    className?: string;
}

export const AccountGroups = ({className}: IAccountGroups) => {

    return (
        <section className={`${styles.accountSection} ${className ? className : ""}`}>
            <h1 className={styles.accountTitle}>Агрегации</h1>
            <div className={styles.accountContent}>
                <h2 className={styles.accountMainTitle}>Создание/Изменение/Удаление агрегаций</h2>
                
            </div>
        </section>
    );
}
