import React from 'react'
import '../styles/RelatedProducts.scss'
import Product from './Product'
function RelatedProducts() {
    const data = {
        title: "goalgoalgoa lgoalgoalgoa lgoalgoa algoalgoagoalgoalgoa lgoalgoalgoal",
        brand: "canon",
        color: "Negro",
        estilo: "24-105mn",
        garantia: "garantia",
        image: "asd",
        descripcion: "asdasdasdasdasdasdasdasdasdasdav sdasdasda sdasdasda sdasdasda sdasdasda sdasdasda ",
        price: 10210,
        rating: 3,
        images: [
            "camera/1.png",
            "camera/2.png",
            "camera/3.png",
        ]
    }

    return (
        <div className='relatedContainer'>
            <h2>Productos relacionados con este artículo</h2>
            
            <div className='row'>
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
            </div>
            <div className='relatedContainer'>
                <h2>Inspirado por tu historial de búsqueda</h2>
            <div className='row'>
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
                <Product
                    id="49538094"
                    title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
                />
            </div>
            </div>
        </div>
    )
}

export default RelatedProducts