import React from 'react';
import logo from '../../public/assets/logo.png'
import Image from 'next/image';
import menu from '../../public/assets/GRAD0.svg'

const Header = () => {
  return (
  
  

    
      <header className="header">
        <div className="img-container">
            <figure>
                <Image style={{
                  width: '60px',
                  height: 'auto',
                }} src={logo} alt="Logo"></Image>
            </figure>
        </div>
        
        <ul className="menu-container">
            <li>
                <a href="">HOME</a>
            </li>
            <li>
                <a href="">BLOG</a>
            </li>
            <li>
                <a href="">PRODUCTS</a>
            </li>
            <li>
                <a href="">QUIENES SOMOS?</a>
            </li>
            <li>
                <a href="">CONTACTO</a>
            </li>
        </ul>

        <div className="div-vacio">
          <div className='container'>
            <Image style={{
                  width: '40px',
                  height: 'auto',
                }} src={menu} alt="Logo">
            </Image>
          </div>
          
          
        </div>
                

      <style jsx >{`
      
       .header {
        width: 100%;
        height: 300px;
        display: flex;
        height: 70px;
        padding: 50px 20px;
        background-color:  #CAC2B5;
        color: rgb(0, 0, 0);
        }
        .img-container {
            width: 15vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .menu-container {
            width: 70vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .menu-container li {
            list-style: none;
        }
        .menu-container li a {
            font-size: 18px;
            margin: 0 6px;
            text-decoration: none;
            color: black;
            font-weight: 500;
        }
        .div-vacio {
            width: 15vw;
            display: flex;
            justify-content: end;
            align-items: center;
        }
        .container {
          display: flex;
          justify-content: end;
          align-items: center;
        }

        @media (max-width: 700px) {
          
          .menu-container li {
            display: none;
            }
          .img-container {
            width: 30vw;
            justify-content: start;
          }
          .menu-container {
            width: 40vw;
          }
          .div-vacio {
            width: 30vw;
        }
        
        }
        @media (min-width: 701px) {
          .div-vacio .container {
            display: none;
            }
        }

      `}</style>
     </header>
  
  )
}

export {Header}