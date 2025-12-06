import styles from './Product.module.css'
import Image from "next/image";
import {ProductImage} from "@/widgets/Product/assets";
import {PrimaryBtn, TransparentBtn} from "@/shared/ui";
export const Product = () => {
    return (
        <section className={styles.product}>
            <Image className={styles.productImage} src={ProductImage} alt={styles.productImage}/>
            <div className={styles.productInfo}>
                <TransparentBtn type={'btn'} className={styles.productInfoOpenAll}>Все варианты агрегации</TransparentBtn>
                <ul className={styles.productInfoList}>
                    <li className={styles.productInfoItem}>
                        <h2 className={styles.productInfoTitle}>Тип товара:</h2>
                        <p className={styles.productInfoValue}>Дрель-шуруповерт</p>
                    </li>
                    <li className={styles.productInfoItem}>
                        <h2 className={styles.productInfoTitle}>Бренд:</h2>
                        <p className={styles.productInfoValue}>MAKITA</p>
                    </li>
                    <li className={styles.productInfoItem}>
                        <h2 className={styles.productInfoTitle}>Назначение инструмента:</h2>
                        <p className={styles.productInfoValue}>профессиональный</p>
                    </li>
                </ul>
            </div>
            <div className={styles.productControls}>
                <PrimaryBtn className={`${styles.productControlsBtn} ${styles.productControlsEdit}`} type={'btn'}>Изменить агрегацию</PrimaryBtn>
                <PrimaryBtn className={`${styles.productControlsBtn} ${styles.productControlsDelete}`} type={'btn'}>Удалить из агрегации</PrimaryBtn>
            </div>

        </section>
    );
}
