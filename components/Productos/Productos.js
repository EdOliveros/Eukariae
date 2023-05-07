import React from 'react';
import Image from 'next/image';
import portada from '@public/assets/ranita.png'
import img from '@public/assets/Wall-papers-4K_Epitome.jpg'

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
          title: "Maleta",
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

            <div key={item.title}>
            <div className="card m-5" style={estilo} >
                <Image style={estiloImg} src={item.img} className="card-img-top" alt="..."></Image>
                <div className="card-body">
                    <h5 className="card-title">{ item.title }</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#${item.title}`} >
                        Ver detalle
                    </button>
                </div>
            </div>


            <div className="modal fade" id={item.title} tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="productModalLabel">Detalles del producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="p-2">
                            <Image style={estiloImg} src={item.img} alt="Product image" className="img-fluid" />
                        </div>
                        <div className="p-2 flex-fill">
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn ">Agregar al carrito</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
          ))
        }
    </div>
    </>
  )
}

export { Productos }