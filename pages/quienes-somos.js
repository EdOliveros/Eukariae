import React from 'react'
import Image from 'next/image'
import img from '../public/assets/01.jpg'

const estilo = {
  width: '100%',
  height: '230px',
  objectFit: 'cover',
}

const quienesSomos = () => {
  return (
    <div>
      <div>
        <div className='title-container'>
          <h1 className='title'>ACERCA DE NOSOTROS</h1>
        </div>
        <div className='info-container'>
          <span className='text-container'>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </span>
          <figure className='img-container'>
              <Image style={estilo} src={img}></Image>
          </figure>
        </div>
        <div className='final-section-container'>
          <div className='div-container'>
              <p className='title'>1. DIVULGACION</p>
              <p className='texto'>you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </div>
          <div className='div-container'>
              <p className='title'>2. COMPROMISO</p>
              <p className='texto'>you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </div>
          <div className='div-container'>
              <p className='title'>3. EMPATIA</p>
              <p className='texto'>you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .title-container {
          background-color:  rgb(228, 228, 228);
          padding: 10px 50px;
          margin: 45px 0;
        }
        .title {
          font-size: 17px;
          font-weight: 700;
        }
        .info-container {
          display: flex;
          padding: 0 80px;
          margin-bottom: 45px
        }
        .text-container {
          width: 50vw;
          margin: 0 10px;  
        }
        text-container p {
          font-size: 14px;
        }
        .img-container {
          width: 50vw;
          margin: 0 10px; 
        }
        .final-section-container {
          background-color:  rgb(228, 228, 228);
          padding: 10px 50px;
          margin: 0 0 45px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .div-container {
          padding: 10px 20px;
          margin: 0 30px
        }
        .texto {
          margin-top: 10px;
          font-size: 13px;
        }
        @media (max-width: 800px) {
          .info-container {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
          .img-container {
            margin-bottom: 30px;
            width: 80vw;
          }
          .text-container {
            width: 80vw;
            margin: 0 10px;  
          }
          .final-section-container {
            flex-direction: column;
          }
          .div-container {
            padding: 10px;
            width: 300px;
            margin-bottom: 30px;
          }
          .texto {
            margin-top: 10px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}

export default quienesSomos