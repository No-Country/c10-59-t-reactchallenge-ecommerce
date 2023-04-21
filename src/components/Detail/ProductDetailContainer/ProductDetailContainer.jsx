import { db } from "../../../utils/firebase";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import Loading from "../../helpers/Loading";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { type, productId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const typeDoc = doc(db, "types", type);
        const typeSnapshot = await getDoc(typeDoc);
        const productDoc = doc(typeSnapshot.ref, "products", productId);
        const productSnapshot = await getDoc(productDoc);
        const data = {
          ...productSnapshot.data(),
          id: productSnapshot.id,
        };

        setProduct(data);
        setLoading(true)
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [type, productId]);

  return loading ? <ProductDetail product={product}/> : <Loading/>;
};

export default ProductDetailContainer;
