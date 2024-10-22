import { useState } from "react";
import ProductCard from "../styles/productCard";
import SkeletonLoading from "../styles/skeletonLoading";
import "react-loading-skeleton/dist/skeleton.css";
import { useProducts } from "../../hooks/useProducts";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const ProductList = () => {
  const [productAmount, setProductAmount] = useState(8);

  const { product, isLoading } = useProducts(productAmount);

  useInfiniteScroll(() => setProductAmount((prev) => prev + 4));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 md:px-0">
      {isLoading &&
        Array(8)
          .fill(0)
          .map((_, index) => <SkeletonLoading key={index}></SkeletonLoading>)}

      {product?.map((item) => (
        <ProductCard key={item.id} data={item}></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
