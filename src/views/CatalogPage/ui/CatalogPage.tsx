import styles from "./CatalogPage.module.css";
import {Header, Footer, CategoryList} from "@/widgets";

export const CatalogPage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <CategoryList/>
            </main>
            <Footer/>
        </div>
    );
};

