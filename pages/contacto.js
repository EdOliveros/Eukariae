import React from 'react'
import Image from 'next/image'
import img from '../public/assets/portada.jpg'

const contacto = () => {
  return (
    <div>
      <div>
        <section className='info-container'>
          <div>
            <figure>
              <Image ></Image>
            </figure>
            <div>
              <h1>DISTANTSOUND IS NOW REAL</h1>
              <p>--- DECEMBER 3, 2020 ---</p>
              <p>
              The standard chunk of Lorem Ipsum used since the 1500s
              
              reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              </p>
            </div>
          </div>
          <figure>
            <Image width={300} height={300} src={img}></Image>
          </figure>
          <div>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>
          </div>
        </section>
        <section>
          <form>
            <p>MESSAGE:</p>
            <input type="text" name="" id=""></input>
            <p>NAME:</p>
            <input type="text" name="" id=""></input>
            <p>E-MAIL:</p>
            <input type="text" name="" id=""></input>
            <p>SUBJECT:</p>
            <input type="text" name="" id=""></input>
          </form>
        </section>
      </div>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}

export default contacto