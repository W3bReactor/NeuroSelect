'use client';
import styles from './CategoryItem.module.css'
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {StandardBtn} from "@/shared/ui";

interface ICategoryItem {
    title: string
    className?: string
    id: string
}

export const CategoryItem = ({ title, className, id}: ICategoryItem) => {
    const pathname = usePathname();

    return (
        <li className={`${styles.categoryItem} ${className ? className : ''}`}>
            {/*<Link href={`/catalog/${pathname}/${id}`} className={styles.categoryItemLink}>*/}
            <StandardBtn href={`/products/`} type={'site-link'} className={styles.categoryItemLink}>
                <p className={styles.categoryItemText}>{title}</p>
            </StandardBtn>
            {/*<Link href={`/products/`} className={styles.categoryItemLink}>*/}
            {/*    <p className={styles.categoryItemText}>{title}</p>*/}
            {/*</Link>*/}
        </li>
    );
}
