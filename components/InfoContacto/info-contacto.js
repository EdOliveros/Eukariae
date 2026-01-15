import React from 'react'
import Image from 'next/image'
import img from '../../public/assets/101.jpg'

const InfoContacto = () => {
  return (
    <div>
        <div className='info-container'>
            <p className='icon-container'>
              X
            </p>
            <div className='info-title-container'>
              <h1>DISTANTSOUND IS NOW REAL</h1>
              <p className='fecha'>--- DECEMBER 3, 2020 ---</p>
              <p>
              The standard chunk of Lorem Ipsum used since the 1500s
              
              reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              </p>
            </div>
          <figure className='img-container'>
            <Image width={300} height={300} src={img}></Image>
          </figure>
          <div className='info'>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>
          </div>
        </div>

        <style jsx>{`

            .info-container {
                display: flex;
                width: 100%;
                height: 100%;
                padding: 30px;
                justify-content: center;
                align-items: flex-start;
                margin: 30px 0;
            }
            .icon-container {
                width: 5vw;
                height: 225px;
                display: flex;
                justify-content: center;
                font-weight: bold;
                font-size: 18px
            }
            .info-title-container {
                width: 30vw;
                max-width: 500px;
                padding: 10px;
                text-justify: newspaper;
            }
            .info-title-container h1 {
                text-align: center;
                font-size: 25px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .info-title-container .fecha {
                font-size: 12px;
                text-align: center;
            }
            .img-container {
                width: 35vw;
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 500px;
                padding: 10px;

            }
            .info {
                width: 30vw;
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 500px;
                padding: 10px;

            }

            @media(max-width: 800px) {
                .info-container {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 30px 0 0 0 ;
                }
                .icon-container {
                    display: none;
                }
                .info {
                    display: none;
                }
                .info-title-container {
                    width: 300px;
                    padding: 0;
                }
            }

        `}</style>
    </div>
  )
}

export { InfoContacto }
