import "./Store.css";
import ProductListContainer from "../../components/List/ProductListContainer/ProductListContainer";
import CartNav from "../../components/Cart/CartNav/CartNav";
import NavSection from "../../components/NavSection/NavSection";

const Store = () => {
  return (
    <>
      <NavSection title="Tienda" />
      <div className="store-container">
        <ProductListContainer />
      </div>
      <CartNav />
    </>
  );
};

export default Store;
