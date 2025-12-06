import styles from './BreadCrumbs.module.css'
import Link from "next/link";
import React from "react";
interface IBreadCrumbs {
    items: {
        label: string;
        path: string;
    }[]
}
export const BreadCrumbs = ({items}: IBreadCrumbs) => {
    return (
        <ul className={styles.breadCrumbs}>
            <li className={styles.breadCrumb}>
                <Link href={'/'} className={styles.breadCrumbsItem}>
                    Главная
                </Link>
            </li>
            {items.map((el, id) => {
                if(items.length - 1 != id) {
                    return (
                        <li className={styles.breadCrumb} key={id}>
                            <p className={styles.breadCrumbsSeparator}>/</p>
                            <Link href={el.path} className={styles.breadCrumbsItem}>{el.label}</Link>
                        </li>
                    )
                } else {
                    return (
                        <li className={styles.breadCrumb} key={id}>
                            <p className={`${styles.breadCrumbsSeparator} ${styles.breadCrumbsSeparatorLast}`}>/</p>
                            <p className={`${styles.breadCrumbsItem} ${styles.breadCrumbsItemLast}`}>{el.label}</p>
                        </li>
                    )
                }

            })}

        </ul>
    );
}
