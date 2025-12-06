import styles from './Pagination.module.css'
import React from "react";
import {TransparentBtn} from "@/shared/ui";
import Image from "next/image";
import {ArrowIcon} from "@/shared/assets";
interface IPagination {
    className?: string;
    countPages: number;
    currentPage: number;
    onClick?: () => void;
}

export const Pagination = ({onClick, currentPage, className, countPages}: IPagination) => {

    return (
        <ul className={`${styles.pagination} ${className ? className : ''}`}>
            {countPages > 1 &&
                <li className={styles.paginationItem}>
                    <TransparentBtn className={styles.paginationLink} type={'site-link'}>
                        <Image className={styles.paginationPrevIcon} src={ArrowIcon} alt={'Стрелка влево'}/>
                        <p className={styles.paginationLinkText}>Назад</p>
                    </TransparentBtn>
                </li>
            }
            {countPages > 0 &&
                Array.from({ length: countPages > 5 ? 5 : countPages }).map((_, i) => (
                    <li key={i} className={styles.paginationItem}>
                        <TransparentBtn active={currentPage == i+1} className={`${styles.paginationLink}`} href={`products/${i+1}`} type={'site-link'}>
                            <p className={styles.paginationLinkText}>{i+1}</p>
                        </TransparentBtn>
                    </li>
                ))
            }
            {countPages > 5 &&
                <li className={styles.paginationItem}>
                    <TransparentBtn className={styles.paginationLink} type={'btn'}>
                        <p className={styles.paginationLinkText}>...</p>
                    </TransparentBtn>
                </li>
            }
            {countPages > 5 &&
                <li className={styles.paginationItem}>
                    <TransparentBtn className={styles.paginationLink} type={'site-link'}>
                        <p className={styles.paginationLinkText}>{countPages}</p>
                    </TransparentBtn>
                </li>
            }
            {countPages > 1 && currentPage != countPages &&
                <li className={styles.paginationItem}>
                    <TransparentBtn className={styles.paginationLink} type={'site-link'}>
                        <p className={styles.paginationLinkText}>Далее</p>
                        <Image className={styles.paginationNextIcon} src={ArrowIcon} alt={'Стрелка вправо'}/>
                    </TransparentBtn>
                </li>
            }

        </ul>

    );
}