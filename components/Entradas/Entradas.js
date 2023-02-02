import React from 'react'
import Image from 'next/image'
import por from '@public/assets/capturas.png'

const Entradas = () => {
  return (
    <div className="entradas-container">
        <h3 className="entradas">Entradas</h3>
        <div className="cards-container">
            <div className="card">
                <figure>
                    <Image 
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={por} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">De como un pobre entierra a la mama</h4>
                    <p className="fecha">Publicado por JuanDiego el 23 de febrero de 2023</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi omnis ullam ipsam illum officia? Sint magni perspiciatis illo vero atque. In veniam suscipit quasi! Illum voluptatibus deleniti rerum earum.</p>
                </div>
            </div>
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={por} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">De como un pobre entierra a la mama</h4>
                    <p className="fecha">Publicado por JuanDiego el 23 de febrero de 2023</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi omnis ullam ipsam illum officia? Sint magni perspiciatis illo vero atque. In veniam suscipit quasi! Illum voluptatibus deleniti rerum earum.</p>
                </div>
            </div>
            <div className="card">
                <figure>
                    <Image 
                     style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    src={por} alt=""></Image>
                </figure>
                <div className="info-container">
                    <h4 className="titulo">De como un pobre entierra a la mama</h4>
                    <p className="fecha">Publicado por JuanDiego el 23 de febrero de 2023</p>
                    <p className="resumen">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi omnis ullam ipsam illum officia? Sint magni perspiciatis illo vero atque. In veniam suscipit quasi! Illum voluptatibus deleniti rerum earum.</p>
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
                background-color: #121212; 
                width: 100%;
                height: 100vh;
                padding: 350px 0;
            }
            .cards-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 0 30px;
            }
            .cards-container .card {
                background-color: black;
                width: 250px;
                height: 500px;
                margin: 10px;
            }
            .cards-container .card figure{
                width: 100%;
                height: auto;
            }
            .cards-container .card figure Image{
                width: 100%;
            }
            .info-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10px;
            }
            .titulo {
                font-size: 18px;
                margin-bottom: 3px;
            }
            .fecha {
                font-size: 9px;
                margin-bottom: 8px;
            }
            .resumen {
                font-size: 11px;
            }
            @media(max-width: 600px ) {
                .cards-container {
                    flex-direction: column;
                }
                .entradas-container {
                    height: auto;
                    padding: 30px;
                }
            }

        `}</style>
    </div>
    
  )
}

export{ Entradas }