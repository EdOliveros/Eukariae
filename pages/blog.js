import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imgUrl from '@public/assets/ranita.png'

const Blog = () => {
 
  return (
      <div className='container-fluid'>
       <div className="row">
        <div className="col-12 text-center">
            <h1 className='my-4'>Blog</h1>
        </div>
        <div className="col-12 col-md-6 my-5 mi-col">
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
                    <p className="gris fecha">Categoria 1 |</p>
                    <p className="fecha">| 01.20.2023</p>
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
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
        <div className="col-12 col-md-6 my-5">
            
            <Link style={
              {
              textDecoration: 'none',
              color: 'black',
          }
            } className="anchor" href="#">
                <div className="entrada-right">
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
                        <p className="gris fecha">Categoria 1 |</p>
                        <p className="fecha">| 01.20.2023</p>
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
                    <p className="gris fecha">Categoria 1 |</p>
                    <p className="fecha">| 01.20.2023</p>
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
            .mi-col {
                margin-top: 60px !important;
            }
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
                margin: 0 0 40px 0;
            }
            .anchor p {
                text-decoration: none;
                color: black;
            }

            @media(max-width: 770px) {
                .entrada-right {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    border-bottom: 1px solid black;
                    margin-top: 15px !important;
                }
                .entrada-left {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    border-right: 0;
                    padding: 0;
                    border-bottom: 1px solid black;
                    margin-top: 15px !important;
                }
                .cir {
                    display: none;
                }
            }
      `}</style>
    </div>

    </div>
  )
}

export default Blog
