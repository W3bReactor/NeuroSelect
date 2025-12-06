import styles from './Intro.module.css'
import {PrimaryBtn} from "@/shared/ui";
export const Intro = () => {
    return (
        <section className={styles.intro}>
            <h1 className={styles.introTitle}>Добро пожаловать!</h1>
            <p className={styles.introDesc}>Это сервис по агрегации товаров.
                Мы агрегируем товары и выдаём их в одной карточке товара.
            </p>
            <PrimaryBtn className={styles.introBtn} type={'site-link'} href={'/catalog'}>Начать</PrimaryBtn>
        </section>
    );
}
