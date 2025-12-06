import styles from "./AccountMainPage.module.css";
import {Header, Footer, AccountSidebar, Regenerate, AccountMain} from "@/widgets";
import {PageTitle} from "@/shared/ui";

export const AccountMainPage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <PageTitle className={styles.pageTitle}>Личный кабинет</PageTitle>
                <div className={styles.accountContent}>
                    <AccountSidebar currentActive={0} className={styles.accountSidebar}/>
                    <AccountMain className={styles.accountItem}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

