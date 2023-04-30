import React from 'react';
import logo from '../../public/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
      <div className="container-fluid">

        <div className="img-container">
          <figure>
              <Image style={{
                paddingTop: '20px',
                width: '60px',
                height: 'auto',
              }} src={logo} alt="Logo"></Image>
          </figure>
        </div>

        <button 
        className="navbar-toggler btn" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
          <Link
          className='text-end' 
          style={{
            fontSize: '17px',
            margin: '0 20px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: '500',
          }} href="/">HOME</Link>

          <Link
          className='text-end' 
          style={{
            fontSize: '17px',
            margin: '0 20px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: '500',
          }}href="/blog">BLOG</Link>

          <Link
          className='text-end' 
          style={{
            fontSize: '17px',
            margin: '0 20px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: '500',
          }}href="/productos">PRODUCTS</Link>

          <Link
          className='text-end' 
          style={{
            fontSize: '17px',
            margin: '0 20px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: '500',
          }}href="/quienes-somos">QUIENES SOMOS?</Link>

          <Link
          className='text-end' 
          style={{
            fontSize: '17px',
            margin: '0 20px',
            textDecoration: 'none',
            color: 'black',
            fontWeight: '500',
          }}href="/contacto">CONTACTO</Link>
          
          </div>
        </div>
      </div>
    </nav>

    <style jsx >{`
    
      .header {
      background-color:  #CAC2B5;
      color: rgb(0, 0, 0);
      }
      .img-container {
          width: 15vw;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .btn {
        border: none;
      }
      .btn:hover,
      .btn:active,
      .btn:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }

    `}</style>
    </>
  
  )
}

export {Header}