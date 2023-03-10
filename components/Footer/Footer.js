import React from 'react'
import logo from '@public/assets/logo.png'
import rayita from '@public/assets/rayita.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div className="logos-container">
            <figure>
                <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
            <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
            <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
            <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={rayita} alt="logo"></Image>
            </figure>
            <figure>
                 <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
                 <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
                 <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
                 <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure>
                 <Image style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
        </div>

        <div className="mas-info-container">
            <p>HELP & INFORMATION</p>
            <p>ABOUT US</p>
            <p>MORE FROM ASOS</p>
            <p>AHOPPING FROM:</p>
        </div>

        <style jsx>{`
        
        .logos-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            width: 100%;
            height: 30px;
            padding: 10px 0;
        }
        .logos-container figure{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 13px;
            width: 20px;
            height: 20px;
            
        }
        .mas-info-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:  rgb(228, 228, 228);
            width: 100%;
            height: 30px;
            padding: 20px 0;
        }

        .mas-info-container p {
            margin: 30px;
            align-items: center;
            font-size: 13px;
        }
        @media(max-width: 500px) {
            .logos-container figure {
                width: 15px;
                height: 15px;
            }
            .mas-info-container p {
                font-size: 9px;
            }
        }
        @media(max-width: 300px) {
            .logos-container figure {
                width: 0;
                height: 0;
            }
            .mas-info-container {
                flex-direction: column;
                height: auto;
            }
            .mas-info-container p {
                margin: 5px;
                align-items: center;
                font-size: 9px;
            }
        }
        
        `}</style>
    </footer>
  )
}

export {Footer}