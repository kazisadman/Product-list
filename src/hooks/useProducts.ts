import { useSelector } from "react-redux";
import {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
} from "../redux/api/productApi";
import { RootState } from "../redux/store";

export const useProducts = (productAmount: number) => {
  const { data: allProductData } = useGetSearchedProductsQuery();

  const { data, isLoading } = useGetAllProductsQuery(productAmount);

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchTerm
  );

  // checks if search keyword match with any word in the title
  const searchedProduct = allProductData?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterProduct = searchQuery ? searchedProduct : data;

  return { product: filterProduct, isLoading };
};
