'use client';
import styles from './AccountSidebar.module.css'
import Link from "next/link";



interface IAccountSidebar {
    className?: string;
    currentActive: number
}

export const AccountSidebar = ({className, currentActive}: IAccountSidebar) => {

    return (
        <aside className={`${styles.accountSidebar} ${className ? className : ""}`}>
            <ul className={styles.accountSidebarList}>
                <li className={styles.accountSidebarItem}>
                    <Link href={"/account/main"} className={`${styles.accountSidebarLink} ${currentActive == 0 ? styles.accountSidebarLinkActive : ""}`}>Аккаунт</Link>
                </li>
                <li className={styles.accountSidebarItem}>
                    <Link href={"/account/groups"} className={`${styles.accountSidebarLink} ${currentActive == 1 ? styles.accountSidebarLinkActive : ""}`}>Агрегации</Link>
                </li>
            </ul>

        </aside>
    );
}
