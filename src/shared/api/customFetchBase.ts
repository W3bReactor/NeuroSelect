import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8000/`,
    prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
        return headers;
    },
    credentials: 'include',
});