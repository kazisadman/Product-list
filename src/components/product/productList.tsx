import { useEffect, useState } from "react";
import {
  useGetAllProductsQuery,
  useGetSearchedProductsQuery,
} from "../../redux/api/productApi";
import ProductCard from "../styles/productCard";
import SkeletonLoading from "../styles/skeletonLoading";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProductList = () => {
  const [productAmount, setProductAmount] = useState(8);

  const { data, isLoading } = useGetAllProductsQuery(productAmount);

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchTerm
  );
  console.log(searchQuery);

  const { data: productData } = useGetSearchedProductsQuery();

  const searchedProduct = productData?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterProduct = searchQuery ? searchedProduct : data;

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setProductAmount((prev) => prev + 4);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 md:px-0">
      {isLoading &&
        Array(8)
          .fill(0)
          .map((_, index) => <SkeletonLoading key={index}></SkeletonLoading>)}

      {filterProduct?.map((item) => (
        <ProductCard key={item.id} data={item}></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
