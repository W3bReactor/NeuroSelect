"use client";
import styles from './FiltersList.module.css'
import {FilterItem} from "@/entities/FilterItem";
import Image from "next/image";
import {DropdownIcon} from "@/shared/assets";
import {useEffect, useRef, useState} from "react";

interface IFiltersList {
    id: string;
    name: string;
    characteristics: IChar[];
}
interface IChar {
    id: string;
    title: string;
}



export const FiltersList = ({characteristics, name, id}: IFiltersList) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<null | HTMLUListElement>(null)
    useEffect(() => {
        if(ref.current) {
            if(isOpen) {
                ref.current.style.height = `0`
            } else {
                ref.current.style.height = `${ref.current.scrollHeight}px`
            }
        }
    }, [isOpen]);
    return (
        <li className={styles.filtersSidebar}>
            <div onClick={() => setIsOpen(!isOpen)} className={styles.filtersListTop}>
                <h2 className={styles.filtersListTitle}>{name}</h2>
                <Image className={`${styles.filtersListIcon} ${!isOpen ? styles.filtersListIconActive : ""}`} src={DropdownIcon} alt={'Открыть'}/>
            </div>
            <ul ref={ref} className={styles.filtersListFilter}>
                {/*  Список характеристик  */}
                {characteristics.length > 0 ? characteristics.map(char =>
                    <FilterItem className={styles.filtersListItem} key={char.id} id={char.id} text={char.title}/>
                ) : <li></li>}
            </ul>
        </li>
    );
}
