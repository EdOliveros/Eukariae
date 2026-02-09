import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base dark:bg-bg-base-dark transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
