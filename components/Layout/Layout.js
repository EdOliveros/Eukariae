import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base dark:bg-[#121212] transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }