import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imgUrl from '@public/assets/ranita.png'

const Blog = () => {
 
  return (
      <>
       <div className="row">
        <div className="col-12 text-center">
            <h1 className='my-4'>Blog</h1>
        </div>
        <div className="col-6 my-5">
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor text-end" href="#">
                <div className="text-end cir">
                    .
                </div>
                <div className="entrada-left">
                    <div className="col-12 d-flex flex-row justify-content-end">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure >
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor text-end" href="#">
                <div className="text-end cir">
                    .
                </div>
                <div className="entrada-left">
                    <div className="col-12 d-flex flex-row justify-content-end">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure >
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor text-end" href="#">
                <div className="text-end cir">
                    .
                </div>
                <div className="entrada-left">
                    <div className="col-12 d-flex flex-row justify-content-end">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure >
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor text-end" href="#">
                <div className="text-end cir">
                    .
                </div>
                <div className="entrada-left">
                    <div className="col-12 d-flex flex-row justify-content-end">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure >
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            
            
        </div>
        <div className="col-6 my">
            
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor" href="#">
                <div className="entrada-right">
                    <div className="col-12 d-flex flex-row justify-content-start">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure>
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor" href="#">
                <div className="entrada-right">
                    <div className="col-12 d-flex flex-row justify-content-start">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure>
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor" href="#">
                <div className="entrada-right">
                    <div className="col-12 d-flex flex-row justify-content-start">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure>
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor" href="#">
                <div className="entrada-right">
                    <div className="col-12 d-flex flex-row justify-content-start">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
                    </div>
                    <figure>
                        <Image style={{
      width: '250px',
      height: '250px'
  }} src={imgUrl} alt="img-entrada"></Image>
                    </figure>
                    <h3>Titulo</h3>
                    <p className="gris">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit
                    </p>
                </div>
            </Link>
            
            
        </div>
    
      <style jsx>{`
         .entrada-left {
          border-right: 1px solid rgb(0, 0, 0);
          padding: 0 20px 0 0;
          }
          .cir {
              font-size: 40px;
          }
          .gris {
              color: rgb(90, 90, 90);
          }
          .fecha {
              font-size: 13px;
          }
          .entrada-right {

          }
          .anchor p {
              text-decoration: none;
              color: black;
          }
      `}</style>
    </div>

    </>
  )
}

export default Blog
