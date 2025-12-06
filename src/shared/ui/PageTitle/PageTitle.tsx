import styles from './PageTitle.module.css'
import React from "react";
import Link from "next/link";
interface IPageTitle {
    children: React.ReactNode
    className?: string;
}

export const PageTitle = ({children, className}: IPageTitle) => {
    return (
        <h1 className={`${styles.pageTitle} ${className ? className : ""}`}>{children}</h1>
    );
}