import React from 'react'
import { Header } from '@components/header'
import {Footer} from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export {Layout}