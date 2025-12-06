import styles from "./AuthPage.module.css";
import {Header, Intro, Footer, Auth} from "@/widgets";
import {BreadCrumbs, PageTitle} from "@/shared/ui";
import {breadcrumbs} from "@/views/AuthPage/mock/breadcrumbs";

export const AuthPage = () => {

    return (
        <div className={styles.page}>
            <main className={styles.app}>
                <PageTitle className={styles.appTitle}>Авторизация</PageTitle>
                <Auth/>
            </main>
            <Footer/>
        </div>
    );
};

