import styles from "./AccountGroupsPage.module.css";
import {Header, Footer, AccountSidebar, AccountGroups} from "@/widgets";
import {PageTitle} from "@/shared/ui";

export const AccountGroupsPage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <PageTitle className={styles.pageTitle}>Личный кабинет</PageTitle>
                <div className={styles.accountContent}>
                    <AccountSidebar currentActive={1} className={styles.accountSidebar}/>
                    <AccountGroups className={styles.accountItem}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

