"use client";
import styles from './Products.module.css'
import {ProductItem} from "@/entities/ProductItem/ui/ProductItem";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import React from "react";
import {setCheckedGroup} from "@/views/ProductsPage/model/slice";

interface IProduct {
    id: string;
    productName: string;
    imageUrl: string
    group_id: string[]
    checked: boolean;
}


interface IProducts {
    groupId: string
    products: IProduct[]
}

export const Products = ({products, groupId}: IProducts) => {

    return (
        <ul className={styles.products}>
            {products.length > 0 ? products.map(product =>
                <ProductItem groupId={groupId}  checked={product.checked} className={styles.productsItem} key={product.id} title={product.productName} image={product.imageUrl} id={product.id} />
            )
            :
            <li>Товары не найдены :(</li>
            }
        </ul>
    );
}
