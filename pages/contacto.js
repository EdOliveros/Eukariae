import React from 'react'
import { Contacto } from '../components/Contacto/contacto'
import { InfoContacto } from '../components/InfoContacto/info-contacto'

const contacto = () => {
  return (
    <div className="bg-bg-base dark:bg-[#121212] min-h-screen">
      <InfoContacto />
      <div className="pb-20">
        <Contacto />
      </div>
    </div>
  )
}

export default contacto