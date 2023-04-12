import React, { useState, useEffect } from "react";
import './descripcion.css'
import { useParams } from "react-router-dom";
import Img from "../../assets/Img/Tipos/apa-ipa.jpg";
import { CartItemCounter } from "../Cart/CartItemCounter/CartItemCounter";
import { Button } from "react-bootstrap";

const ProductDetail = () => {

  const [dataDescripcion, setDataDescripcion] = useState({});
  const { id } = useParams();
  /*
  useEffect( () => {
    if (id) {
    fetch(`http://localhost:8080/api/v1/product/${id}`, {
    mode: 'cors',
    method: "GET",
    headers: {
        "content-Type" : "application/Json",
    }})
    .then((res)=>res.json())
    .then((res) => {
    
        setDataDescripcion(res.response);
    })
  }
  }, [id])
*/  

 return (
    <>
        <h2>Cerveza IPA</h2>
        <div className="descripcion">         
            <p className="texto-descripcion">IPA (Indian Pale Ale) es una cerveza inglesa de color ámbar con elevado amargor y espesa, aportando una complejidad con el agregado de lúpulos y el buen aporte a malta caramelizada de la pale ale. </p>
            <img src={Img} alt="#"/>
            <div className="desc-detalle">
                <p>Detalles</p>
            </div>
            <div className="desc-precio">
                <p>Precio:</p>
                <p>$1500</p>
            </div>
            <div>
                <CartItemCounter />
            </div>
            <div>
                <Button className="desc-compra">
                    Comprar
                </Button>
            </div>
        </div>
    </>
  )
 }
export default ProductDetail;
