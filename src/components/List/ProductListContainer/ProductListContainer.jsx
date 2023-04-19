import { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
import ProductList from "../ProductList/ProductList";
import CartNav from "../../Cart/CartNav/CartNav";

const ProductListContainer = ({ isHome }) => {   
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const typesCollection = collection(db,"types");
                const typesSnapshot  = await getDocs(typesCollection);
                const typesDocs = typesSnapshot.docs;
                
                const data = [];

                const homeData = [
                    {name: "PARA VOS", id: "paravos", products: []},
                    {name: "OFERTAS", id: "ofertas", products: []}
                ];

                for (const typeDoc of typesDocs) {
                    const productsCollection = collection(typeDoc.ref, "products");
                    const productsSnapshot = await getDocs(productsCollection);

                    if (isHome) {     
                        const queryProducts = await getDocs(query(productsCollection, limit(2)));                             
                        const queryPromo = query(productsCollection, where("isPromo", "==", true));
                        const queryPromoSnapshot = await getDocs(queryPromo);

                        queryProducts.forEach(productDoc => {
                            homeData[0].products.push({...productDoc.data(), id: productDoc.id});
                        });

                        queryPromoSnapshot.forEach(productDoc => {
                            homeData[1].products.push({...productDoc.data(), id: productDoc.id});
                        });
                    } else {
                        const productsData = [];

                        productsSnapshot.forEach(productDoc => {
                            productsData.push({...productDoc.data(), id: productDoc.id});
                        });

                        data.push({
                            ...typeDoc.data(),
                            id: typeDoc.id,
                            products: productsData
                        });
                    }
   
                }
      
                isHome ? setTypes(homeData) : setTypes(data);
                
            } catch (err) {
                console.log(err);
            }
        }

        getData(); 
        
    }, []);

    return(
        types.length === 0 ? <p>Sin productos</p> :
        <>
            {
                types.map(type => {
                    return <ProductList key={type.id} type={type} isHome={isHome}/>
                }) 
            } 
            <CartNav/>
        </>
    );
}

export default ProductListContainer;
