import React from 'react'
import imageGaleri1 from '@public/assets/Wall-papers-4K_Danta.jpg'
import imageGaleri2 from '@public/assets/Wall-papers-4K_Epitome.jpg'
import imageGaleri3 from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import imageGaleri4 from '@public/assets/Wall-papers-4K_Rana.jpg'
import Image from 'next/image'

const Galeria = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={imageGaleri1} className="d-block img-fluid" alt="..."></Image>
        </div>
        <div className="carousel-item">
          <Image src={imageGaleri2} className="d-block img-fluid" alt="..."></Image>
        </div>
        <div className="carousel-item">
          <Image src={imageGaleri3} className="d-block img-fluid" alt="..."></Image>
        </div>
        <div className="carousel-item">
          <Image src={imageGaleri4} className="d-block img-fluid" alt="..."></Image>
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
    </>
  )
}

export { Galeria };