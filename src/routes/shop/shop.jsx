import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";
import ProductCard from "../../components/productCard/ProductCard";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
