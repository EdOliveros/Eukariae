import React from 'react';
import logo from '../../public/assets/logo.png'
import Image from 'next/image';
import menu from '../../public/assets/GRAD0.svg'
import Link from 'next/link';

function toggleMenu() {
 const menu = document.querySelector('.menu-flotante-container')
 if(menu.classList.contains('inactive')) {
  menu.classList.remove('inactive')
 } else {
  menu.classList.add('inactive')
 }
 console.log("escuchando")
};


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
                <Link style={{
                   fontSize: '17px',
                   margin: '0 20px',
                   textDecoration: 'none',
                   color: 'black',
                   fontWeight: '500',
                }} href="/">HOME</Link>
            </li>
            <li>
                <Link style={{
                   fontSize: '17px',
                   margin: '0 6p',
                   textDecoration: 'none',
                   color: 'black',
                   fontWeight: '500',
                }}href="/blog">BLOG</Link>
            </li>
            <li>
                <Link style={{
                   fontSize: '17px',
                   margin: '0 20px',
                   textDecoration: 'none',
                   color: 'black',
                   fontWeight: '500',
                }}href="/productos">PRODUCTS</Link>
            </li>
            <li>
                <Link style={{
                   fontSize: '17px',
                   margin: '0 20px',
                   textDecoration: 'none',
                   color: 'black',
                   fontWeight: '500',
                }}href="/quienes-somos">QUIENES SOMOS?</Link>
            </li>
            <li>
                <Link style={{
                   fontSize: '17px',
                   margin: '0 20px',
                   textDecoration: 'none',
                   color: 'black',
                   fontWeight: '500',
                }}href="/contacto">CONTACTO</Link>
            </li>
        </ul>

        <div className="div-vacio">
          <div className='container'>
            <Image
            
            onClick={() => toggleMenu()}
            
            style={{
                  width: '40px',
                  height: 'auto',
                }} src={menu} alt="Logo">
            </Image>
          </div> 
        </div>
        

        <div className="menu-flotante-container inactive">
        <ul>
            <li>
                <Link style={{
                  textDecoration: 'none',
                  color: 'black',
                }}href="/">Home</Link>
            </li>
            <li>
                <Link style={{
                  textDecoration: 'none',
                  color: 'black',
                }}href="/blog">Blog</Link>
            </li>
            <li>
                <Link style={{
                  textDecoration: 'none',
                  color: 'black',
                }}href="/productos">Products</Link>
            </li>
            <li>
                <Link style={{
                  textDecoration: 'none',
                  color: 'black',
                }}href="/quienes-somos">Quienes Somos?</Link>
            </li>
            <li>
                <Link style={{
                  textDecoration: 'none',
                  color: 'black',
                }}href="/contacto">Contacto</Link>
            </li>
        </ul>
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
        .container:hover {
          cursor: pointer;
        }

        @media (max-width: 900px) {
          
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
        @media (min-width: 901px) {
          .div-vacio .container {
            display: none;
            }
        }



        .menu-flotante-container {
          display: flex;
          flex-direction: column;
          width: 100px;
          height: auto;
          border: 1px solid black;
          border-radius: 10px;
          padding: 10px;
          justify-content: end;
          align-items: center;
          background-color: #CAC2B5;
          position: absolute;
          top: 107px;
          right: 10px;
        }
        .inactive {
          display: none;
        }
        .menu-flotante-container ul li {
            text-align: end;
            list-style: none;
        }

      `}</style>
     </header>
  
  )
}

export {Header}