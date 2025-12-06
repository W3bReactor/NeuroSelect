import styles from './ProductsGroups.module.css'
import {ProductsGroup} from "@/entities/ProductsGroup";
import {useAppSelector} from "@/shared/hooks/useAppSelector";
import {selectGroups} from "@/views/ProductsPage/model/selectors";
import {productsGroupsApi} from "@/widgets/ProductsGroups/api/productsGroups";
export const ProductsGroups = () => {

    const productsGroups = useAppSelector(selectGroups)

    // const { data, isLoading } = productsGroupsApi.useGetProductsGroupsQuery({limit: 20});

    return (
        <ul className={styles.productsGroups}>
            {productsGroups.map(group => (
                <ProductsGroup id={group.id} checked={group.checked} key={group.id} className={styles.productsGroupsItem} products={group.products}/>
            )) }
        </ul>
    );
}
