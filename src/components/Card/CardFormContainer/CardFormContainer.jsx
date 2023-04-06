import "./CardFormContainer.css";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css'

export const CardFormContainer = () => {
    const [cardValues, setCardValues] = useState({
        number: "",
        expiry: "",
        cvc: "",
        userName: "",
        focus: "",
      });

      const handleChange = (e) => {
        const {name, value} = e.target;

        setCardValues({...cardValues, [name]: value});
      }

      const handleFocus = (e) => {
        const {name} = e.target;

        setCardValues({...cardValues, focus: name});
      }

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Sending...')
      }

    return (
    <>
        <Cards
            number={cardValues.number}
            expiry={cardValues.expiry}
            cvc={cardValues.cvc}
            name={cardValues.name}
            focused={cardValues.focus}
        />    
        <form className="card-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Número de tarjeta</label>
              <input name="number" type="tel" placeholder="Ingrese el número de tarjeta" maxLength={16} onChange={handleChange}  onFocus={handleFocus}/>
            </div>
            <div className="form-group">
              <label htmlFor="userName">Nombre</label>
              <input name="name" type="text" placeholder="Ingrese su nombre" maxLength={20} onChange={handleChange}  onFocus={handleFocus}/>
            </div>
            <div className="form-groups-container">
              <div className="form-group">
                <label htmlFor="cvc">Expiración</label>
                <input name="expiry" type="tel" placeholder="Fecha" maxLength={4} onChange={handleChange} onFocus={handleFocus}/>
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input name="cvc" type="tel" placeholder="CVC" maxLength={3}  onChange={handleChange} onFocus={handleFocus}/>
              </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </>
  );
}
