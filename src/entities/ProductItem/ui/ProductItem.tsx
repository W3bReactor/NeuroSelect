"use client";
import styles from './ProductItem.module.css'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Checkbox, PrimaryBtn, StandardBtn} from "@/shared/ui";
import {EyeIcon} from "@/shared/assets";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {setCheckedAll, setCheckedItem} from "@/views/ProductsPage/model/slice";

interface IProductItem {
    title: string;
    className?: string;
    image: string;
    id: string;
    checked: boolean;
    groupId: string
}

export const ProductItem = ({ groupId, title, className, id, image, checked}: IProductItem) => {
    const dispatch = useAppDispatch()
    const onClickChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCheckedItem({groupId, id, checked: e.currentTarget.checked}))
    }

    return (
        <li className={`${styles.productItem} ${className ? className : ''}`}>
            <div className={styles.productItemLeft}>
                <Checkbox onChange={onClickChecked} checked={checked}/>
                <div className={styles.productItemImageWrapper}>
                    <Link href={`/product/${id}`} className={styles.productItemImageLink}>
                        <Image width={152} height={103} src={image} alt={title} className={styles.productItemImage}/>
                    </Link>
                </div>
                <Link className={styles.productItemTitleLink} href={`/product/${id}`}>
                    <h2 className={styles.productItemTitle}>{title}</h2>
                </Link>
            </div>
            <div className={styles.productItemRight}>
                <StandardBtn href={`/product/${id}`} className={styles.productItemLink} type={'site-link'}>
                    <Image className={styles.productItemLinkIcon} src={EyeIcon} alt={"Глаз"}/>
                    <p className={styles.productItemLinkText}>Посмотреть</p>
                </StandardBtn>
            </div>
        </li>
    );
}
