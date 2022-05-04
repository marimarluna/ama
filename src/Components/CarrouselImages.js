import React, { useState } from 'react'
import "../styles/CarrouselImages.scss"

function CarrouselImages({ images = [] }) {
    const [imageSelect, setImageSelect] = useState(0)
    const handleSelectImage = (index) => {
        setImageSelect(index)
    }
    return (
        <div className='content'>
            <div className='contentThumbnails'>
                {images.map((image, index) => (
                    <img className={imageSelect === index ? "active" : ""} onMouseOver={() => handleSelectImage(index)} src={require(`../assets/${image}`)} key={index} />
                ))}
            </div>
            <div className='contentActive'>
                    <img src={require(`../assets/${images[imageSelect]}`)} />
            </div>
        </div>
    )
}

export default CarrouselImages