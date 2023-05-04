import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mimg from '@public/assets/logo.png'

const Blog = () => {

    const articulosInvestigacion = [
        {
            titulo: "Cómo preparar un delicioso café",
            categoria: 'categoria',
            fecha: "2023-05-03",
            contenido: "En este artículo te enseñaremos paso a paso cómo preparar un café perfecto para disfrutar en casa o en la oficina...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v'
        },
        {
            titulo: "Los mejores ejercicios para mantenerse en forma",
            fecha: "2023-04-28",
            categoria: 'categoria',
            contenido: "¿Quieres estar en forma pero no sabes por dónde empezar? En este artículo te presentamos los mejores ejercicios para mantenerse saludable y en forma...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vyyjy'
        },
        {
            titulo: "Consejos para viajar con poco presupuesto",
            fecha: "2023-04-20",
            categoria: 'categoria',
            contenido: "¿Quieres viajar pero tienes un presupuesto limitado? En este artículo te damos algunos consejos para ahorrar dinero durante tus viajes...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vcgu'
        },
        {
            titulo: "La importancia del cuidado de la piel",
            fecha: "2023-04-15",
            categoria: 'categoria',
            contenido: "¿Quieres tener una piel radiante y saludable? En este artículo te explicamos por qué es importante cuidar tu piel y te damos algunos consejos para lograrlo...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vtrhtyn'
        },
        {
            titulo: "Consejos para mejorar tu concentración en el trabajo",
            fecha: "2023-04-10",
            categoria: 'categoria',
            contenido: "¿Tienes dificultades para concentrarte en el trabajo? En este artículo te damos algunos consejos para mejorar tu concentración y productividad en el trabajo...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vdjhyj'
        },
        
    ]

    const articulosOpinion = [
        {
            titulo: "Cómo preparar un delicioso café",
            categoria: 'categoria',
            fecha: "2023-05-03",
            contenido: "En este artículo te enseñaremos paso a paso cómo preparar un café perfecto para disfrutar en casa o en la oficina...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vtdd'
        },
        {
            titulo: "Los mejores ejercicios para mantenerse en forma",
            fecha: "2023-04-28",
            categoria: 'categoria',
            contenido: "¿Quieres estar en forma pero no sabes por dónde empezar? En este artículo te presentamos los mejores ejercicios para mantenerse saludable y en forma...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vuyg'
        },
        {
            titulo: "Consejos para viajar con poco presupuesto",
            fecha: "2023-04-20",
            categoria: 'categoria',
            contenido: "¿Quieres viajar pero tienes un presupuesto limitado? En este artículo te damos algunos consejos para ahorrar dinero durante tus viajes...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'vouys'
        },
        {
            titulo: "La importancia del cuidado de la piel",
            fecha: "2023-04-15",
            categoria: 'categoria',
            contenido: "¿Quieres tener una piel radiante y saludable? En este artículo te explicamos por qué es importante cuidar tu piel y te damos algunos consejos para lograrlo...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'verbcd'
        },
        {
            titulo: "Consejos para mejorar tu concentración en el trabajo",
            fecha: "2023-04-10",
            categoria: 'categoria',
            contenido: "¿Tienes dificultades para concentrarte en el trabajo? En este artículo te damos algunos consejos para mejorar tu concentración y productividad en el trabajo...",
            resumen: 'este es un resumen de cada capitulo para no poner todo el texto',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'veee'
        },
        
    ]


    const estyle = {
        width: '250px',
        height: '250px'
    }
 
  return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='my-4'>Blog</h1>
                </div>
                <div className="col-12 col-md-6 my-5 mi-col">


                    {
                        articulosInvestigacion.map((e) => ( 
                            e.innerHTML = 
                            <>
                            <button 
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                                border: 'none !important'
                            }} 
                            type="button" 
                            class="bg-transparent anchor text-end" 
                            data-bs-toggle="modal" 
                            data-bs-target={`#${e.myId}`}
                            >
                                <div className="text-end cir">
                                    .
                                </div>
                                <div className="entrada-left">
                                    <p className="gris fecha">{e.categoria} |</p>
                                    <p className="fecha">| {e.fecha}</p>
                                    <figure >
                                        <Image style={estyle} src={e.imagen} alt="img-entrada"></Image>
                                    </figure>
                                    <h3>{e.titulo}</h3>
                                    <p className="gris">
                                        ${e.resumen}
                                    </p>
                                </div>
                            </button>
                            
                            <div className="modal fade" id={e.myId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">{e.titulo}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${e.youtube}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <p>{e.contenido}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            </>
                        ))
                    }
                
                </div>
                <div className="col-12 col-md-6 my-5">

                    {
                        articulosOpinion.map((e) => ( 
                            e.innerHTML = 
                            <Link 
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }} 
                            className="anchor" href="#">
                                <div className="entrada-right">
                                    <p className="gris fecha">{e.categoria} |</p>
                                    <p className="fecha">| 01.20.2023</p>
                                    <figure>
                                        <Image style={estyle} src={e.imagen} alt="img-entrada"></Image>
                                    </figure>
                                    <h3>{e.titulo}</h3>
                                    <p className="gris">
                                        {e.resumen}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                    

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
