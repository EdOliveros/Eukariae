import React from 'react';
import Image from 'next/image';
import portada from '@public/assets/ranita.png'

const Productos = () => {
  return (
    <div className="entradas-container">
        <div className="cards-container">
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={portada} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">Bolso</h4>
                    <p className="fecha">$35.876</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={portada} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">Bolso</h4>
                    <p className="fecha">$35.876</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={portada} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">Bolso</h4>
                    <p className="fecha">$35.876</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={portada} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">Bolso</h4>
                    <p className="fecha">$35.876</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>

        <style jsx>{`
            .entradas-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: rgb(145, 145, 145);
                background-color:  #CAC2B5;
                width: 100%;
                height: auto;
                padding: 30px 0 30px 0;

            }
            .cards-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 0 30px;
            }
            .card {
                background-color: black;
                width: 150px;
                height: 300px;
                margin: 10px;
            }
            .cards-container .card figure{
                width: 100%;
                height: auto;
            }
            .info-container {
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: end;
                align-items: center;
                padding: 10px;
            }
            .titulo {
                font-size: 20px;
                margin-bottom: 3px;
                width: 100%;
            }
            .fecha {
                font-size: 10px;
                margin-bottom: 8px;
                width: 100%;
        
            }
            .resumen {
                font-size: 14px;
                width: 100%;
        
            }
            @media(max-width: 700px) {
                .card {
                    width: 90px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .info-container {
                    display: none;
                }
                .entradas-container {
                    padding: 50px 0;
                }
            }
            
        `}</style>
    </div>
        
  )
}

export { Productos }