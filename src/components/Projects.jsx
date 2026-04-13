import { useEffect, useState } from "react"
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";



function Projects (){

    const animacaoGrid = {
    escondido: { opacity: 0 },
    visivel: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const animacaoCard = {
    escondido: { opacity: 0, y: 30 },
    visivel: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
};

    const [meusRepositorios, setMeusRepositorios] = useState([])

    useEffect(() =>{
        fetch('https://api.github.com/users/ThierryTorino/repos')
            .then(resposta => resposta.json()) // Transforma a resposta da internet em JSON
            .then(dados => {
                console.log("Olha o que veio do GitHub:", dados); // Pra gente espiar no F12
                setMeusRepositorios(dados); // Salva os dados na memória do React!
            });
    }, []);

    return(
        <>
            <section className="bg-[#080a12] ">
                <div>

                    <div className="w-full max-w-6xl mx-auto px-5 pb-10 pt-10">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            className="text-5xl md:text-7xl text-zinc-100 font-changaOne"
                        >
                            MEUS <span className="text-violet-500 [text-shadow:0_0_20px_#8b5cf6]">PROJETOS</span>
                        </motion.h1>
                        <p className="text-white/60">Seleção automatica dos meus trabalhos mais recentes do GitHub</p>
                    </div>

                    <motion.div 
                        key={meusRepositorios.length}
                        variants={animacaoGrid}
                        initial="escondido"
                        whileInView="visivel"
                        viewport={{ once: true }} 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-5 z-10"
                    >
                        {meusRepositorios.slice(0,6).map((repo) => {
                            return (
                                <motion.div 
                                    key={repo.id} 
                                    variants={animacaoCard}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-8 rounded-3xl flex flex-col justify-between hover:border-violet-500/50 hover:-translate-y-2 transition-all"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-3 capitalize">
                                        {repo.name.replace(/-/g, ' ')}
                                    </h2>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                        {repo.description || "Projeto em desenvolvimento ativo. Repositório focado em código limpo."}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        {repo.language ? (
                                        <span className="text-violet-300 text-xs font-bold bg-violet-500/20 border border-violet-500/30 px-3 py-1 rounded-full">
                                            {repo.language}
                                        </span>
                                        ) : (
                                            <span></span> 
                                        )}

                                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-white text-sm font-bold flex items-center gap-2 hover:text-violet-400 transition-colors">
                                            Ver Projeto
                                        </a>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <div className="mt-16 flex justify-start w-full max-w-6xl mx-auto px-5 z-10 pb-10">
                        <a 
                            href="https://github.com/ThierryTorino" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-white px-8 py-4 bg-zinc-800/50 hover:bg-violet-600 border border-white/10 hover:border-violet-500 transition-all rounded-xl font-bold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center gap-3"
                        >
                            VER MAIS NO GITHUB <BiRightArrow />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects