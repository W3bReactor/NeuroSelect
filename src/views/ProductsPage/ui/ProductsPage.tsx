'use client';

import styles from "./ProductsPage.module.css";
import {Header, Footer, FiltersSidebar} from "@/widgets";
import {BreadCrumbs, Checkbox, Pagination} from "@/shared/ui";
import {breadcrumbs} from "@/views/ProductsPage/mock/breadcrumbs";
import {ProductsSort} from "@/features/ProductsSort";
import {ProductsGroups} from "@/widgets/ProductsGroups";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {setCheckedAll} from "@/views/ProductsPage/model/slice";
import {selectChecked, selectGlobalChecked} from "@/views/ProductsPage/model/selectors";
import {useAppSelector} from "@/shared/hooks/useAppSelector";

export const ProductsPage = () => {
    const isActive = useAppSelector(selectChecked).length > 0;
    const globalChecked = useAppSelector(selectGlobalChecked);
    const dispatch = useAppDispatch()

    const onClickChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCheckedAll(e.currentTarget.checked))
    }
    return (
        <div className={styles.page}>
            <Header/>
            <main className={styles.app}>
                <BreadCrumbs items={breadcrumbs}/>
                <section className={styles.products}>
                    <div className={styles.productsTop}>
                        <h1 className={styles.productsTitle}>Электроинструмент</h1>
                        <p className={styles.productsCount}>3 457 товаров</p>
                    </div>
                    <div className={styles.productsMain}>
                        <FiltersSidebar className={styles.productsMainSidebar}/>
                        <div className={styles.productsMainColumn}>
                            <div className={styles.productsMainTop}>
                                <ProductsSort/>
                                <div className={styles.productsMainTopBtns}>
                                    <Checkbox checked={globalChecked} onChange={onClickChecked} isAfter={false} text={"Выбрать все:"} />
                                    {/*<button disabled={!isActive} className={`${styles.productsMainBtn} ${isActive ? styles.productsMainBtnActive : ""} ${styles.productsMainTopRegenerate}`}>Перегенерировать</button>*/}
                                    <button disabled={!isActive} className={`${styles.productsMainBtn} ${isActive ? styles.productsMainBtnActive : ""} ${styles.productsMainTopDelete}`}>Удалить товары</button>
                                    {/*<button disabled={!isActive} className={`${styles.productsMainBtn} ${isActive ? styles.productsMainBtnActive : ""} ${styles.productsMainTopAdd}`}>Добавить агрегацию</button>*/}
                                </div>

                            </div>
                            <ProductsGroups/>
                            <Pagination countPages={10} currentPage={1}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

