import styles from './TransparentBtn.module.css'
import React from "react";
import Link from "next/link";
interface ITransparentBtn {
    children: React.ReactNode
    className?: string;
    type: 'site-link' | 'btn' | 'link'
    href?: string;
    target?: string
    btnType?: "submit" | "reset" | "button"
    onClick?: () => void;
    active?: boolean;
}

export const TransparentBtn = ({children, active = false, className, type, href, target, btnType, onClick}: ITransparentBtn) => {
    return (
        <>
            {type === 'btn' &&
                <button onClick={onClick} type={btnType} className={`${styles.btn} ${active ? styles.btnActive : ""} ${className ? className : ''}`}>
                    {children}
                </button>
            }
            {type === 'site-link' &&
                <Link href={href ? href : ''} className={`${styles.btn} ${active ? styles.btnActive : ""} ${className ? className : ''}`}>
                    {children}
                </Link>
            }
            { type === 'link' &&
                <a onClick={onClick} target={target} href={href ? href : ''}  className={`${styles.btn} ${active ? styles.btnActive : ""} ${className ? className : ''}`}>
                    {children}
                </a>
            }
        </>

    );
}