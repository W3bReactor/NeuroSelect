import styles from './FilterItem.module.css'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Checkbox, PrimaryBtn} from "@/shared/ui";
import {AcceptIcon, EyeIcon} from "@/shared/assets";

interface IFilterItem {
    className?: string;
    id: string;
    text: string;
}

export const FilterItem = ({text, id, className}:IFilterItem) => {
    const [isChecked, setIsChecked] = useState(false);
    const onClickChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <li className={`${styles.productItem} ${className ? className : ''}`}>
            <Checkbox checked={isChecked} onChange={onClickChecked} text={text}/>
        </li>
    );
}
