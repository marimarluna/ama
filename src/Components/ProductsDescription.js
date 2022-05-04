import React from 'react'
import '../styles/ProductsDescription.scss'

function ProductsDescription({ data }) {
    const { title, price, brand, color, estilo, garantia, descripcion } = data
    return (
        <div className='container'>
            <div className='title'>
                <h1>{title}</h1>
                <p>
                    marca: {brand}
                </p>
            </div>
            <hr className='divider' />
            <div className='price'>
                <p>
                    precio: {price}
                </p>
                <p>
                    {garantia}
                </p>
                <p>
                    {color}
                </p>
                <p>
                    estilo: {estilo}
                </p>
            </div>

            <hr className='divider' />

            <div className='description'>
                <h5>Acerca de este artículo</h5>
                <p>
                    {descripcion}
                </p>
            </div>
        </div>
    )
}

export default ProductsDescription