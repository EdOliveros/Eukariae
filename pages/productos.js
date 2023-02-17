import React from 'react'
import Image from 'next/image'

const productos = () => {

  const products = [
    {
      title: "bolso",
      img: 'https://images.pexels.com/photos/15291137/pexels-photo-15291137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 123.00,
      description: "snrptgtpi isrngpintrg poigsntign"
    },
  ]

  const estilo = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  }

  return (
    <div className='products-container'>
      {
        products.map(item => (
          item.innerHTML = 
            <div className='product-container'>
              <figure>
                <Image style={estilo} src={item.img} alt=""></Image>
              </figure>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
        ))
      }
      <style jsx>{`
        .products-container {
          height: auto;
          background-color: #BC897E;
        }
        .product-container {
          widht: 300px;
          heigth: 500px;
          background-color: #47A15B;
        }
      `}</style>
    </div>
  )
}

export default productos