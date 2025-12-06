'use client';
import styles from './CategoryList.module.css'
import Image from "next/image";
import {CatalogImage} from "@/widgets/CategoryList/assets";
import {CategoryItem} from "@/entities/CategoryItem";
import {categoryApi} from "@/widgets/CategoryList/api/category";
import {categories} from "@/widgets/CategoryList/mock/categories";




export const CategoryList = () => {

    // const { data, isLoading} = categoryApi.useGetCategoriesQuery({limit: 20});
    const data = categories;
    const isLoading = false;
    return (
        <section className={styles.categoryListSection}>
            <div className={styles.catalog}>
                <h2 className={styles.catalogTitle}>Каталог товаров</h2>
                <Image src={CatalogImage} alt={'Каталог'} className={styles.catalogImage}/>
            </div>
            <ul className={styles.categoryList}>
                {isLoading
                    ?
                    <li className={styles.categoryItemInfo}>
                        Загрузка...
                    </li>
                    :

                            categories.length > 0 ? categories.map(cat =>
                                    <CategoryItem className={styles.categoryItem} key={cat.id} title={cat.name} id={cat.id}/>
                                ) :
                                <li className={styles.categoryItemInfo}>
                                    Ничего не найдено :(
                                </li>
                }

            </ul>
        </section>
    );
}
