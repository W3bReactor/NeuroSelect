import styles from "./ProductPage.module.css";
import {Header, Footer, Product} from "@/widgets";
import {BreadCrumbs} from "@/shared/ui";
import {breadcrumbs} from "@/views/ProductPage/mock/breadcrumbs";
import Image from "next/image";

export const ProductPage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <BreadCrumbs items={breadcrumbs}/>
                <h2 className={styles.productTitle}>Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч</h2>
                <Product/>
            </main>
            <Footer/>
        </div>
    );
};

