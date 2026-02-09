import { IconX } from '@tabler/icons-react'

const PostModal = ({ selectedPost, setSelectedPost }) => {
    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity">
            <div className="bg-bg-base dark:bg-card-bg-dark w-full max-w-5xl h-[90vh] rounded-base shadow-2xl overflow-hidden flex flex-col">
                <div className="flex justify-between items-center p-6 border-b dark:border-secondary-dark">
                    <h2 className="text-2xl font-bold dark:text-text-base-dark">{selectedPost.title}</h2>
                    <button onClick={() => setSelectedPost(null)} className="text-gray-500 hover:text-text-base dark:hover:text-text-base-dark">
                        <IconX className="w-8 h-8" stroke={1.5} />
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
                <div className="p-6 border-t dark:border-secondary-dark text-right">
                    <button onClick={() => setSelectedPost(null)} className="bg-accent text-white px-8 py-2 rounded-base font-bold hover:opacity-90 transition-opacity">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostModal;
