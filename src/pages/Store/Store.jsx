import ProductListContainer from "../../components/List/ProductListContainer/ProductListContainer";
import CartNav from "../../components/Cart/CartNav/CartNav";
import NavSection from "../../components/NavSection/NavSection";

const Store = () => {
  return (
    <div className="store-container">
      <NavSection title="Tienda" />
      <ProductListContainer />
      <CartNav />
    </div>
  );
};

export default Store;
