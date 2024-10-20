import ProductSearch from "../components/product/ProductSearch";
import Navigation from "../components/styles/navigation";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navigation></Navigation>
      <ProductSearch></ProductSearch>
    </div>
  );
};

export default HomePage;
