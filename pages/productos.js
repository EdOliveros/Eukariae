import React from 'react'
import Image from 'next/image'
import img from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import { Productos } from '@components/Productos/Productos.js'
import { products as pro } from '@components/dataBase/products.js'

const productos = () => {

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
      <Productos cantidad={pro.length}/>
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
      `}</style>
    </div>
  )
}

export default productos