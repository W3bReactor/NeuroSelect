import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "@/shared/api/customFetchBase";

interface ICategory {
    id: string;
    name: string;
}

interface IResponse {
    categories: ICategory[]
    pages: number;
}

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getCategories: builder.query<
            IResponse,
            { limit?: number }
        >({
            query: ({ limit }) => ({
                url: 'categories',
                method: 'GET',
                params: {
                    limit: limit,
                },
            }),
        }),
    }),
})

