import React from 'react'
import Image from 'next/image'
import img from '@public/assets/01.jpg'

const productos = () => {

  const products = [
    {
      title: "bolso",
      img: img,
      price: 123.00,
    },
    {
      title: "chaqueta",
      img: img,
      price: 123.00,
    },
    {
      title: "cuaderno",
      img: img,
      price: 123.00,
    },
    {
      title: "Zapatos",
      img: img,
      price: 123.00,
    },
    {
      title: "Reloj",
      img: img,
      price: 123.00,
    },
  ]

  const estilo = {
    width: '200px',
    height: '250px',
    objectFit: 'cover',
  }

  return (
    <div>
      <div className='hero'>
        <figure>
          <Image style={estilo} src={""} alt=""></Image>
        </figure>
      </div>
      <div className='products-container'>
        {
          products.map(item => (
            item.innerHTML = 
              <div className='product-container'>
                <figure>
                  <Image style={estilo} src={item.img} alt="imagen"></Image>
                </figure>
                <div className='info-container'>
                  <p className='title'>{item.title}</p>
                  <p className='price'>{item.price}</p>
                </div>
              </div>
          ))
        }
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          height: 500px;
        }
        .products-container {
          height: auto;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .product-container {
          width: 200px;
          height: 300px;
          margin: 10px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .info-container {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-weight: 400;
          font-size: 14px;
        }
        .price {
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}

export default productos