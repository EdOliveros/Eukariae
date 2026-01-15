import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer/Footer'

const Layout = ({ children, config }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base dark:bg-[#121212] transition-colors duration-300">
      <Header config={config} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer config={config} />
    </div>
  )
}

export { Layout }