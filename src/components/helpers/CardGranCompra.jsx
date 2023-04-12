import React from 'react'
import '../helpers/helper.css'
const CardGranCompra = () => {
  return (
    <div className='Card__done'>
        <div className="verified"></div>
        <p className='card__p'><span>¡Gran Compra!</span> <br /> Tu Pedido esta en camino</p>
<button className='btn__card'>INICIO</button>
    </div>
  )
}

export default CardGranCompra