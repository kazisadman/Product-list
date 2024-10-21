import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import ProductCard from "../styles/productCard";
import SkeletonLoading from "../styles/skeletonLoading";
import "react-loading-skeleton/dist/skeleton.css";

const ProductList = () => {
  const [productAmount, setProductAmount] = useState(8);

  const { data, isLoading } = useGetAllProductsQuery(productAmount);

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
      {isLoading
        ? Array(8)
            .fill(0)
            .map((_, index) => <SkeletonLoading key={index}></SkeletonLoading>)
        : data?.map((item) => (
            <ProductCard key={item.id} data={item}></ProductCard>
          ))}
    </div>
  );
};

export default ProductList;
