import styles from './Header.module.css'
import Link from "next/link";
import Image from "next/image";
import {AccountIcon, CatalogBurgerIcon, LogoIcon, SearchIcon} from "@/shared/assets";
import {PrimaryBtn} from "@/shared/ui/PrimaryBtn/PrimaryBtn";


export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={`${styles.headerLogoLink}`}>
                <Image className={styles.headerLogo} src={LogoIcon} alt={'Логотип'}/>
            </Link>
            <PrimaryBtn type={"site-link"} className={styles.headerCatalogLink} href={'/catalog'}>
                <Image className={styles.headerCatalogIcon} src={CatalogBurgerIcon} alt={'Открыть каталог'}/>
                <p className={styles.headerCatalog}>Каталог</p>
            </PrimaryBtn>
            <form className={styles.headerSearchForm} action="">
                <input placeholder={"Найти агрегированные товары..."} className={styles.headerSearch} type="search"/>
                <div className={styles.headerSearchItem}>
                    <input value={""} className={styles.headerSearchBtn} type="submit"/>
                    <Image src={SearchIcon} alt={'Найти'} className={styles.headerSearchIcon}/>
                </div>
            </form>
            <Link href={'/auth'} className={styles.headerAccountLink} >
                <Image className={styles.headerAccountIcon} src={AccountIcon} alt={'Войти в аккаунт'}/>
                <p className={styles.headerAccount}>Войти</p>
            </Link>
        </header>
    );
}
