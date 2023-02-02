import React from 'react'
import ranita from '@public/assets/ranita.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className="about-container">
      <div className="info-container">
          <h2>Quienes Somos?</h2>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima illo iusto laboriosam vitae voluptas minus eveniet! Officiis, tempora tempore consectetur quas eveniet voluptatum iusto sint nesciunt omnis quam suscipit.
          </p>
      </div>
      <figure className="ranita-container">
          <Image style={{
            width: '100%',
            height: '100%',
            objectFit: 'scale-down',
            objectPosition: 'top',
          }} src={ranita} alt="galeria"></Image>
      </figure>

      <style jsx>{`
      .about-container {
        width: 100%;
        display: flex;
        padding: 30px 0 20px;
        padding: 20px;
        background-color:  #CAC2B5;
        color: rgb(0, 0, 0);
      }
      .info-container {
          width: 50vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
      }
      .info-container  h2 {
          margin-bottom: 15px;
      }
      .ranita-container {
          height: auto;
          width: 50vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
      }
      @media (max-width: 500px) {
        .ranita-container {
            width: 100vw;
            height: auto;   
            padding: 20px;
            margin: 0;
        }
        .about-container {
            flex-direction: column-reverse;
            padding: 0;
        }
        .info-container {
            width: 100vw;
        }
      }
      `}</style>
    </div>
  )
}

export { About }