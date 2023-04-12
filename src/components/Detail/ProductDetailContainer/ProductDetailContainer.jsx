import { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = () => {

    const [product, setProduct] = useState({});

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
                    id: productSnapshot.id
                }

                setProduct(data);
            } catch (err) {
                console.log(err)
            }
        }

        getData();

    }, [type, productId])

  return (
    <ProductDetail product={product}/>
  )
}

export default ProductDetailContainer;