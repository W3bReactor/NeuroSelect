import styles from './Regenerate.module.css'
import {PrimaryBtn} from "@/shared/ui";

interface IRegenerate {
    className?: string;
}


export const Regenerate = ({className}: IRegenerate) => {
    return (
        <section className={`${styles.regenerate} ${className ? className : ""}`}>
            <h1 className={styles.regenerateTitle}>Агрегация</h1>
            <p className={styles.regenerateDesc}>
                Перегенерация агрегации: На основе ваших оценок мы перегенерируем агрегацию.
                Вы также сможете вернуться к изначальной версии, если ни одна из генераций не понравиться
            </p>
            <PrimaryBtn className={styles.introBtn} type={'btn'}>Перегенерировать</PrimaryBtn>
        </section>
    );
}
