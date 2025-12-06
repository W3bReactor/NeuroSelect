"use client";
import styles from "./ProductsGroup.module.css"
import React, {useState} from "react";
import {Checkbox} from "@/shared/ui";
import {Products} from "@/widgets";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {setCheckedGroup} from "@/views/ProductsPage/model/slice";

interface IProduct {
    id: string;
    productName: string;
    imageUrl: string
    group_id: string[];
    checked: boolean;
}


interface IProductsGroup {
    className?: string
    id: string
    checked: boolean;
    products: IProduct[]
}

export const ProductsGroup = ({className, id, products, checked}: IProductsGroup) => {
    const dispatch = useAppDispatch()

    const onClickChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCheckedGroup({id, checked: e.currentTarget.checked}))
    }


    return (
        <li className={`${styles.productsGroup} ${className ? className : ''}`}>
            <Checkbox checked={checked} onChange={onClickChecked} className={styles.productsGroupCheckbox} text={"Выбрать все товары:"} isAfter={false}/>
            <Products groupId={id} products={products} />
        </li>
    );
}
