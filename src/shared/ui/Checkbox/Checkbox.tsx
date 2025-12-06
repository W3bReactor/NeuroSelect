"use client";
import styles from './Checkbox.module.css'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {AcceptIcon} from "@/shared/assets";
interface ICheckbox {
    text?: string;
    isAfter?: boolean
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean
}

export const Checkbox = ({text, checked = false, className, isAfter = true, onChange}: ICheckbox) => {

    return (
        <>
            {isAfter
                ?
                <label className={`${styles.labelCheckbox} ${className ? className : ""}`}>
                    <input onChange={onChange} checked={checked} className={styles.checkbox} type="checkbox"/>
                    <span><Image className={styles.checkboxIcon} src={AcceptIcon} alt={"Принять"}/></span>
                    <p className={styles.checkboxText}>{text}</p>
                </label>
                :
                <label className={`${styles.labelCheckbox} ${className ? className : ""}`}>
                    <p className={`${styles.checkboxText} ${styles.checkboxTextBefore}`}>{text}</p>
                    <input onChange={onChange} checked={checked} className={styles.checkbox} type="checkbox"/>
                    <span><Image className={styles.checkboxIcon} src={AcceptIcon} alt={"Принять"}/></span>
                </label>
            }
        </>
    );
}