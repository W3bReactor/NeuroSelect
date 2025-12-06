import styles from './Footer.module.css'
import Image from "next/image";
import {LogoIcon} from "@/shared/assets";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerTop}>
                    <Image src={LogoIcon} alt={'Логотип'} className={styles.footerLogo}/>
                </div>
                <div className={styles.footerColumns}>
                    <div className={styles.footerColumn}>
                        <h2 className={styles.footerColumnTitle}>Информация</h2>
                        <ul className={styles.footerList}>
                            <li className={styles.footerItem}>
                                <Link href={'/'} className={styles.footerItemLink}>
                                    <p className={styles.footerColumnText}>Главная</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
