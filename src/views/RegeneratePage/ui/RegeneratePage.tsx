import styles from "./RegeneratePage.module.css";
import {Header, Footer, AccountSidebar, Regenerate} from "@/widgets";
import {PageTitle} from "@/shared/ui";

export const RegeneratePage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <PageTitle className={styles.pageTitle}>Личный кабинет</PageTitle>
                <div className={styles.regenerateContent}>
                    <AccountSidebar currentActive={0} className={styles.regenerateSidebar}/>
                    <Regenerate className={styles.regenerateItem}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

