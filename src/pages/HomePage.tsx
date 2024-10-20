import ProductList from "../components/product/productList";
import ProductSearch from "../components/product/ProductSearch";
import Navigation from "../components/styles/navigation";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navigation></Navigation>
      <ProductSearch></ProductSearch>
      <ProductList></ProductList>
    </div>
  );
};

export default HomePage;
