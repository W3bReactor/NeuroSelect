import styles from "./NotFoundPage.module.css";
import {Header, Footer} from "@/widgets";
import {PageTitle, PrimaryBtn} from "@/shared/ui";
import Image from "next/image";
import {NotFoundImage} from "@/views/NotFoundPage/assets";

export const NotFoundPage = () => {

    return (
        <div className={styles.page}>
            <main className={styles.app}>
                <PageTitle className={styles.pageTitle}>Страница не найдена</PageTitle>
                <div className={styles.notFoundContent}>
                    <Image className={styles.notFoundImage} src={NotFoundImage} alt={"404"}/>
                    <p className={styles.notFoundDesc}>Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. Попробуйте воспользоваться поиском.</p>
                    <div className={styles.notFoundLinks}>
                        <PrimaryBtn type={'site-link'} href={'/'}>На главную</PrimaryBtn>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

