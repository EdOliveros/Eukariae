import React from 'react'
import logo from '@public/assets/logo.png'
import rayita from '@public/assets/rayita.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div className="container">
    <div className="container-fluid d-flex flex-wrap justify-content-center my-5 align-items-center">
    <figure className="icons ">
                <Image 
                className="img-fluid rounded-circle"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
            <Image 
            className="img-fluid rounded-circle"
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
            <Image 
            className="img-fluid rounded-circle"
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
            <Image 
            className="img-fluid rounded-circle"
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={rayita} alt="logo"></Image>
            </figure>
            <figure className="icons ">
                 <Image s
                 className="img-fluid rounded-circle"
                 tyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
                 <Image 
                 className="img-fluid rounded-circle"
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
                 <Image 
                 className="img-fluid rounded-circle"
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
                 <Image 
                 className="img-fluid rounded-circle"
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }} src={logo} alt="logo"></Image>
            </figure>
            <figure className="icons ">
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

  </div>
       

        <div className="row justify-content-center my-4 mas-info-container">
            <div className="col-12 col-md-3">
                <p className="text-center">HELP & INFORMATION</p>
            </div>
            <div className="col-12 col-md-3">
                <p className="text-center">ABOUT US</p>
            </div>
            <div className="col-12 col-md-3">
                <p className="text-center">MORE FROM ASOS</p>
            </div>
            <div className="col-12 col-md-3">
                <p className="text-center">SHOPPING FROM:</p>
            </div>
        </div>

        <style jsx>{`
        
        .icons {
            width: 50px;
            margin: 10px;
        }            
        .mas-info-container {
            background-color:  rgb(228, 228, 228);
            padding: 20px 0;
            margin: 0;
        }
        .mas-info-container p {
            margin: 0;
        }
        
        `}</style>
    </footer>
  )
}

export {Footer}