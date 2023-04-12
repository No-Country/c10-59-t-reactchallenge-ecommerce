import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { getDocs, collection } from "firebase/firestore";

export const ListContainer = () => {   

    const [types, setTypes] = useState([]);

    useEffect(() => {
        try {
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

                    console.log(data);
                } catch (error) {
                    console.log(`Error al intentar conectar con el servidor: ${error}`);
                }
            }
            getData();   
        } catch (error) {
            
        }
    }, []);


    return
}