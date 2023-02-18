import React from 'react'
import Image from 'next/image'
import img from '@public/assets/01.jpg'

const productos = () => {

  const products = [
    {
      title: "BOLSO",
      img: img,
      price: 123.00,
    },
    {
      title: "CHAQUETA",
      img: img,
      price: 123.00,
    },
    {
      title: "CUADERNO",
      img: img,
      price: 123.00,
    },
    {
      title: "ZAPATOS",
      img: img,
      price: 123.00,
    },
    {
      title: "RELOJ",
      img: img,
      price: 123.00,
    },
    {
      title: "RELOJ",
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
        <figure className='img-container'>
          <Image style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }} src={img} alt=""></Image>
          <span className='title-container'>
            <p className='title'>COMPRA AHORA!</p>
          </span>
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
                  <p className='name'>{item.title}</p>
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
          margin-bottom: 10px;
        }
        .img-container {
          width: 100%;
          height: 100%;
          padding: 30px 60px 0 60px;
        }
        .title-container {
          position: absolute;
          top: 500px;
          right: 50%;
          transform: translateX(+50%);
          background-color: white;
        }
        .title {
          font-weight: 400;
          font-size: 20px;
        }
        .products-container {
          margin-top: 10px;
          height: auto;
          padding: 20px 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .product-container {
          width: 230px;
          height: 330px;
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
        .name {
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