import { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { getDocs, collection } from "firebase/firestore";
import ProductList from "../ProductList/ProductList";

const ProductListContainer = () => {   
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const typesCollection = collection(db,"types");
                const typesSnapshot  = await getDocs(typesCollection);
                const typesDocs = typesSnapshot.docs;
                
                const data = [];

                for (const typeDoc of typesDocs) {
                    const typeData = typeDoc.data();
                    const productsCollection = collection(typeDoc.ref, "products");
                    const productsSnapshot = await getDocs(productsCollection);

                    const productsData = [];

                    productsSnapshot.forEach(productDoc => {
                        productsData.push({...productDoc.data(), id: productDoc.id});
                    });

                    data.push({
                        ...typeData,
                        id: typeDoc.id,
                        products: productsData
                    });
                }

                setTypes(data);
                
            } catch (err) {
                console.log(err);
            }
        }
        getData(); 
        
       
    }, []);

    return(
        types.length === 0 ? <p>Sin productos</p> : types.map(type => {
            return <ProductList key={type.id} type={type}/>
        })
    )
}

export default ProductListContainer;