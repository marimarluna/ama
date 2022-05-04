import { PlayArrow, ShoppingCart,  } from '@mui/icons-material'
import React from 'react'
import '../styles/ProductPriceAdd.scss'

function ProductPriceAdd({ data }) {
    const { title, price, brand, color, estilo, garantia, descripcion } = data
  return (
    <div className='contentPriceAdd'>
        <div className='priceDisplay'>
            <h2>
                ${price}
            </h2>
            <p>envio</p>
            <p>Llega:</p>
            <p>puede que lo recibas despues de navidad</p>
        </div>
        <div className='buttonsContainer'>
            <button className='buttonWithIcon'>
                <PlayArrow/>
                <p>Agregar al carrito</p>
            </button>
            <button className='buttonWithIcon2'>
                <ShoppingCart/>
                <p>Comprar ahora</p>
            </button>
            <p>transacción segura</p>
        </div>
    </div>
    
  )
}

export default ProductPriceAdd