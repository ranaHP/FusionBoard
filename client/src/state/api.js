import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ['User']
        }),
        getProducts: build.query({
            query: (id) => `client/products`,
            providesTags: ['Products']

        }),
        getCustomers: build.query({
            query: (id) => `client/customers`,
            providesTags: ['Products']
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getSales: build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
        }),

    })
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetSalesQuery
} = api;