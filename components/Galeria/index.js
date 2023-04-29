import React from 'react'
import imageGaleri from '@public/assets/galeria.png'
import Image from 'next/image'
// You can specify which plugins you need

const Galeria = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={imageGaleri} className="d-block w-100 img-fluid" alt="..."></Image>
        </div>
        <div className="carousel-item">
          <Image src={imageGaleri} className="d-block w-100 img-fluid" alt="..."></Image>
        </div>
        <div className="carousel-item">
          <Image src={imageGaleri} className="d-block w-100 img-fluid" alt="..."></Image>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export { Galeria };


// <div className="galeria-container">      
// <figure className="imagen">
//   <Image style={{
//     width: '100%',
//     height: 'auto',
//   }} src={imageGaleri} alt="Logo">
//   </Image>
// </figure>

// <style jsx>{`
//   .galeria-container {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color:  #CAC2B5;
//     color: rgb(0, 0, 0);
//     padding: 0 0 20px;
//   }
//   .imagen {
//       margin-bottom: 10px;
//       width: 100%;
//   }
// `}</style>
// </div>