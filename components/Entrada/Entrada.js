const Entrada = ({ selectedPost, setSelectedPost }) => {
    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity">
            <div className="bg-bg-base dark:bg-[#1e1e1e] w-full max-w-5xl h-[90vh] rounded-base shadow-2xl overflow-hidden flex flex-col">
                <div className="flex justify-between items-center p-6 border-b dark:border-[#3a3a3a]">
                    <h2 className="text-2xl font-bold dark:text-[#e0e0e0]">{selectedPost.title}</h2>
                    <button onClick={() => setSelectedPost(null)} className="text-gray-500 hover:text-text-base dark:hover:text-[#e0e0e0]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto">

                        <div className="flex items-center gap-4 text-sm font-bold text-accent uppercase tracking-widest mb-8">
                            <span>{selectedPost.category || 'Blog'}</span>
                            <span className="text-gray-300">|</span>
                            <span>{new Date(selectedPost.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">{selectedPost.content}</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t dark:border-[#3a3a3a] text-right">
                    <button onClick={() => setSelectedPost(null)} className="bg-accent text-white px-8 py-2 rounded-base font-bold hover:opacity-90 transition-opacity">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Entrada;