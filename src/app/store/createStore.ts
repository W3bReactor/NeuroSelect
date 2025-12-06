import { configureStore } from '@reduxjs/toolkit';
import {productsSlice} from "@/views/ProductsPage/model/slice";
import {categoryApi} from "@/widgets/CategoryList/api/category";
import {productsGroupsApi} from "@/widgets/ProductsGroups/api/productsGroups";

export function createStore() {
    return configureStore({
        reducer: {
            products: productsSlice.reducer,
            // user: userReducer,
            // loginForm: loginFormReducer,
            [categoryApi.reducerPath]: categoryApi.reducer,
            [productsGroupsApi.reducerPath]: productsGroupsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(categoryApi.middleware)
                .concat(productsGroupsApi.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });
}
