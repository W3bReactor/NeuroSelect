import styles from "./MainPage.module.css";
import {Header, Intro, Footer} from "@/widgets";

export const MainPage = () => {

    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <Intro/>
            </main>
            <Footer/>
        </div>
    );
};

