'use client'
import styles from './ProductsSort.module.css'
import Image from "next/image";
import React, { useState} from "react";
import {DropdownIcon} from "@/shared/assets";

const sorting: { [key: string]: { sortBy: string; order: string } } = {
    'Новые': {
        sortBy: 'layoutDate',
        order: 'desc'
    },
    'Лучшее': {
        sortBy: 'title',
        order: 'asc'
    },
    'Популярное': {
        sortBy: 'id',
        order: 'asc'
    }
}



export const ProductsSort = () => {
    const [selected, setSelected] = useState('Новые')
    const [openDropdown, setOpenDropdown] = useState(false)


    const onClickOption = (e: React.MouseEvent<HTMLElement>) => {

        setSelected(e.currentTarget.innerText)
        setOpenDropdown(false)
    }

    return (
        <div className={styles.productsSort}>
            <p className={styles.productsSortText}>Сортировка:</p>
            <div className={styles.productsSortWrapper}>
                <div onClick={() => setOpenDropdown(!openDropdown)} className={styles.productsSortSelected}>
                    <p className={styles.productsSortSelectedText}>{selected}</p>
                    <Image className={`${styles.productsSortDropdown} ${openDropdown ? styles.productsSortDropdownActive : ""}`} src={DropdownIcon} alt={'Ещё'}/>
                </div>
                {openDropdown &&
                    <ul className={styles.productsSortOptions}>
                        <li className={styles.productsSortOption} onClick={onClickOption}>Новые</li>
                        <li className={styles.productsSortOption} onClick={onClickOption}>Лучшее</li>
                        <li className={styles.productsSortOption} onClick={onClickOption}>Популярное</li>
                    </ul>

                }
            </div>
        </div>
    );
}
