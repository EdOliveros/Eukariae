import React from 'react'
import imageGaleri from '@public/assets/galeria.png'
import Image from 'next/image'

const Galeria = () => {
  return (
    <div className="galeria-container">      
      <figure className="imagen">
        <Image style={{
          width: '100%',
          height: 'auto',
        }} src={imageGaleri} alt="Logo">
        </Image>
      </figure>

      <style jsx>{`
        .galeria-container {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color:  #CAC2B5;
          color: rgb(0, 0, 0);
          padding: 0 0 20px;
        }
        .imagen {
            margin-bottom: 10px;
            width: 100%;
        }
      `}</style>
    </div>
  )
}

export { Galeria };