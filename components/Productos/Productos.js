import React from 'react';
import Image from 'next/image';
import portada from '@public/assets/ranita.png'
import img from '@public/assets/01.jpg'

const Productos = (props) => {

    const products = [
        {
          title: "BOLSO",
          img: portada,
          price: 123.00,
        },
        {
          title: "CHAQUETA",
          img: img,
          price: 123.00,
        },
        {
          title: "CUADERNO",
          img: img,
          price: 123.00,
        },
        {
          title: "ZAPATOS",
          img: img,
          price: 123.00,
        },
        {
          title: "RELOJ",
          img: img,
          price: 123.00,
        },
        {
          title: "RELOJ",
          img: img,
          price: 123.00,
        },
      ]

     const result = []

    for(let i = 0; i < props.cantidad; i++) {
        result.push(products[i])
    }

    const estilo = {
        width: '300px',
        height: 'auto',
      }
    const estiloImg = {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
    }

  return (
    <>
    <div className='content-fluid d-flex flex-wrap justify-content-center '>
        {
          result.map((item) => (
            item.innerHTML = 

            <>
            <div className="card m-5" style={estilo}>
                <Image style={estiloImg} src={item.img} className="card-img-top" alt="..."></Image>
                <div className="card-body">
                    <h5 className="card-title">{ item.title }</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target={`#${item.title}`} >
                        Ver detalle
                    </button>
                </div>
            </div>


            <div class="modal fade" id={item.title} tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel">Detalles del producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-row flex-wrap justify-content-center">
                        <div class="p-2">
                            <Image style={estiloImg} src={item.img} alt="Product image" class="img-fluid" />
                        </div>
                        <div class="p-2 flex-fill">
                            <h3>{item.title}</h3>
                            <p>Descripción corta del producto</p>
                            <hr />
                            <h4>Detalles</h4>
                            <ul>
                            <li>Detalle 1</li>
                            <li>Detalle 2</li>
                            <li>Detalle 3</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn ">Agregar al carrito</button>
                    </div>
                    </div>
                </div>
            </div>
            </>
          ))
        }
    </div>
    </>
  )
}

export { Productos }