import React from 'react'
import img from '../../public/assets/galeria.png'

const Contacto = () => {
  return (
    <div>
        <div className='form-container'>
            <form className='form'>
                <p>MESSAGE:</p>
                <input type="text" name="" id=""></input>
                <p>NAME:</p>
                <input type="text" name="" id=""></input>
                <p>E-MAIL:</p>
                <input type="text" name="" id=""></input>
                <p>SUBJECT:</p>
                <input type="text" name="" id=""></input>
                <input type="submit" id='enviar'></input>
            </form>
        </div>
         

          <style>{`
          .form-container {
            width: 100%;
            margin: 20px 0 50px 0;
            padding: 30px 0 ;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
          }
            .form {
                width: 300px;
                display: flex;
                flex-direction: column; 
                justify-content: center;
                align-items: flex-start;
            }
            .form p {
                font-size: 14px;
                color: white;
            }
            .form-container input {
                width: 300px;
                margin-bottom: 20px;
                border-top: none;
                border-left: none;
                border-right: none;
                background: transparent;
                border-bottom: 0.5px solid white;
                color: white;
            }
            textarea:focus, input:focus, input[type]:focus {
                outline: 0 none;
            }
            #enviar {
                margin-top: 20px;
                border: 0.5px solid white;
            }
            
          `}</style>
    </div>
  )
}

export {Contacto}