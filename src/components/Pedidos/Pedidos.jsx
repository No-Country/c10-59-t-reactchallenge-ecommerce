import React from 'react'
import "../Pedidos/Pedidos.css"


const Pedidos = () => {
  return (
   <div className="pedidos__container">
    <div className="input">
        <h2 className="input__title">Direcion de entrega</h2>
        <input type="text" placeholder='Dirección de entrega' />
    </div>

    <div className="input">
        <h2 className="input__title">Horario estimado</h2>
        <input type="tel" placeholder='Horario' />
    </div>

    <div className="input">
        <h2 className="input__title">Metodo de pago</h2>
        <input type="text" placeholder='Metodo de pago' />
    </div>

    <div className="pedidos__detalles">
        <h2 className="pedidos__detalles-title">Detalle</h2>
        <div className='line'/>
        <div className="detalle--span">
        <span className='detalles__span'>2 cervezas Ipa</span>
        <span className='total__span-detalles'>100$</span>
        </div>
        <div className="detalle--span">
        <span className='detalles__span'>Envio</span>
        <span className='total__span-detalles'>100$</span>
        </div>
        <div className="detalle--span">
        <span className='detalles__span'>Propina</span>
        <span className='total__span-detalles'>100$</span>
        </div>
        <div className='line'/>
        <div className="total">
            <span className='total__title'>Total</span>
            <span className='total__monto'>$1150</span>
        </div>
    </div>
        <button className='pedidos__btn'>PEDIR</button>
   </div>
  )
}

export default Pedidos