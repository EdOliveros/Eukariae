import React from 'react'

const ContactFormSection = () => {
  return (
    <div className="w-full bg-text-base dark:bg-bg-base-dark py-20 px-6 transition-colors duration-300">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-bg-base dark:text-text-base-dark mb-12 text-center uppercase tracking-widest">Contáctanos</h2>
        <form className="flex flex-col space-y-8">
          <div className="relative">
            <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase block mb-1">Tu Mensaje</label>
            <textarea
              rows="3"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white dark:focus:border-accent text-white dark:text-text-base-dark py-2 transition-colors outline-none resize-none"
              required
            ></textarea>
          </div>

          <div className="relative">
            <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase block mb-1">Nombre Completo</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white dark:focus:border-accent text-white dark:text-text-base-dark py-2 transition-colors outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase block mb-1">E-Mail</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white dark:focus:border-accent text-white dark:text-text-base-dark py-2 transition-colors outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase block mb-1">Asunto</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white dark:focus:border-accent text-white dark:text-text-base-dark py-2 transition-colors outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 border border-white dark:border-accent text-white dark:text-accent font-bold py-3 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-text-base dark:hover:bg-accent dark:hover:text-bg-base-dark transition-all duration-300 transform active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

export { ContactFormSection }
