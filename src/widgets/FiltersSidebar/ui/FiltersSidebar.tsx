import styles from './FiltersSidebar.module.css'
import {filters} from "@/widgets/FiltersSidebar/mock/filters";
import {FiltersList} from "@/widgets/FiltersSidebar/ui/FiltersList/FiltersList";


interface IFiltersSidebar {
    className?: string;
}

export const FiltersSidebar = ({className}: IFiltersSidebar) => {

    const data = filters;

    return (
        <aside className={`${styles.filtersSidebar} ${className ? className : ""}`}>
            <ul className={styles.filtersSidebarList}>
                {data.map((filter =>
                        <FiltersList id={filter.id} characteristics={filter.characteristics} name={filter.name} key={filter.id}/>
                ))}
            </ul>
        </aside>
    );
}
