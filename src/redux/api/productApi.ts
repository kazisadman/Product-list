import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../../types/product.type";


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<TProduct[],number>({
      query: (productAmount) => `products?limit=${productAmount}`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
