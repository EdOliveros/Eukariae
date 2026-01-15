import React from 'react'
import Image from 'next/image'
import img from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import { Productos } from '@components/Productos/Productos.js'
import { products as pro } from '@components/Database/products.js'

const productos = () => {

  return (
    <div>
      <div className='hero position-relative'>
        <div className='img-container'>
          <Image
            src={img}
            alt="Hero Image"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className='overlay'></div>
          <div className='title-container'>
            <h1 className='title'>COMPRA AHORA!</h1>
          </div>
        </div>
      </div>
      <Productos cantidad={pro.length} />
      <style jsx>{`
        .hero {
          width: 100%;
          height: 60vh;
          min-height: 400px;
          margin-bottom: 2rem;
        }
        .img-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.2);
        }
        .title-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          z-index: 2;
        }
        .title {
          font-weight: 500;
          font-size: 1.5rem;
          margin: 0;
          letter-spacing: 2px;
          color: var(--text-color);
        }
      `}</style>
    </div>
  )
}

export default productos