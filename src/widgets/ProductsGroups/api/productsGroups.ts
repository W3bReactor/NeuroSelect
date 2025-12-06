import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "@/shared/api/customFetchBase";
import {setGroups} from "@/views/ProductsPage/model/slice";

interface IProductsGroups {
    id: string;
    products: string[];
}

interface IGroupsResponse {
    groups: IProductsGroups[]
    pages: number;
}
interface IProductsResponse {
    products: IProductsGroups[]

}


export const productsGroupsApi = createApi({
    reducerPath: 'productsGroupsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        // getProductsGroups: builder.query<
        //     IGroupsResponse,
        //     { limit?: number }
        // >({
        //     query: ({ limit }) => ({
        //         url: 'aggregations/groups',
        //         method: 'GET',
        //         params: {
        //             limit: limit,
        //         },
        //
        //     }),
        //     // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //     //     try {
        //     //         const { data } = await queryFulfilled;
        //     //
        //     //         const mapped = data.groups.map(group => ({
        //     //             id: group.id,
        //     //             products: group.products,
        //     //             checked: false
        //     //         }));
        //     //
        //     //         // dispatch(setGroups(mapped));
        //     //
        //     //     } catch (e) {
        //     //         console.error("Ошибка загрузки агрегаций:", e);
        //     //     }
        //     // }
        // }),
        // getProductById: builder.query<IProductsResponse, string>({
        //     query: (id) => ({
        //         url: `products/${id}`,
        //         method: 'GET',
        //     }),
        // })
    }),
})

