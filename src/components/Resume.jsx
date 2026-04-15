import { BiRightArrow } from "react-icons/bi";
import Marquee from "react-fast-marquee"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Resume(){
    
    // 1. As Regras da Animação
    const animacaoGrid = {
        escondido: { opacity: 0 },
        visivel: {
            opacity: 1,
            transition: { staggerChildren: 0.35 } // Atraso entre o card 1, 2 e 3
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

    const tecnologias = [
        {nome: "JavaScript", cor: "text-yellow-500 hover:border-yellow-500", icone: <IoLogoJavascript/>},
        {nome: "React", cor: "text-cyan-400 hover:border-cyan-400", icone: <FaReact/>},
        {nome: "Cpp", cor: "text-blue-500 hover:border-blue-500", icone: <TbBrandCpp/>},
        {nome: "Git", cor: "text-orange-500 hover:border-orange-500", icone: <FaGitAlt/>},
        {nome: "Tailwind", cor: "text-cyan-500 hover:border-cyan-500", icone: <RiTailwindCssFill/>},
        {nome: "Html", cor: "text-orange-500 hover:border-orange-500", icone: <FaHtml5/>},
        {nome: "Css", cor: "text-blue-500 hover:border-blue-500", icone: <FaCss3/>},
        {nome: "GitHub", cor: "text-zinc-100 hover:border-zinc-100", icone: <FaGithub/>}
    ]

    return(
        <section className="bg-linear-to-br from-zinc-950 via-zinc-950 to-violet-950 min-h-screen flex flex-col justify-center gap-10 relative overflow-hidden py-20">
                

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    viewport={{ once: true }}
                    className="w-full max-w-6xl mx-auto px-5 z-10 flex justify-start"
                >
                    <h1 className="text-6xl md:text-6xl text-zinc-100 font-changaOne">
                    SOBRE <span className="text-violet-500 [text-shadow:0_0_20px_#8b5cf6]">MIM</span>
                    </h1>
                </motion.div>

            <motion.div 
                variants={animacaoGrid}
                initial="escondido"
                whileInView="visivel"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-5 z-10"
            >
                
                <motion.div variants={animacaoCard} className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Quem sou eu?</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Sou estudante de <span className="text-violet-400 font-bold">Ciência da Computação</span> e um desenvolvedor movido pelo desafio constante de aprender. Minha estratégia atual é dominar profundamente o <span className="text-cyan-400 font-bold">React</span> com <span className="text-yellow-500 font-bold">JavaScript</span> puro, construindo uma base sólida de fundamentos antes de dar o próximo passo para o <span className="text-blue-500 font-bold">TypeScript</span> e <span className="text-zinc-100 font-bold">Next.js</span>.
                            <br/><br/>
                            Atualmente, busco minha primeira oportunidade como <span className="text-violet-400 font-bold">Estágio</span> ou <span className="text-violet-400 font-bold">Dev Júnior</span>, pronto para integrar uma equipe, entregar código de qualidade e evoluir na prática.
                        </p>
                    </div>
                    
                    <a href="https://wa.me/16992569075" className="text-white px-8 py-4 bg-violet-600 hover:bg-violet-500 transition-colors w-fit rounded-xl font-bold mt-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        ENTRE EM CONTATO
                    </a>
                </motion.div>

                <motion.div variants={animacaoCard} className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-8 flex flex-col items-center">
                    <h2 className="text-white font-changaOne text-4xl mb-8">Tecnologias</h2>
                    
                    <ul className="text-white grid grid-cols-2 gap-4 w-full">
                        {tecnologias.map((tech) => {
                            return (
                                <li className={`flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-3 rounded-xl hover:bg-white/10 hover:scale-105 transition-all cursor-default shadow-sm ${tech.cor}`} key={tech.nome}>
                                    <span className="text-xl">{tech.icone}</span>
                                    <span className="text-sm font-medium">{tech.nome}</span>
                                </li>
                            )
                        })}
                    </ul>
                </motion.div>

                <motion.div variants={animacaoCard} className="md:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-8 overflow-hidden flex flex-col items-center justify-center">
                    <p className="text-zinc-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">Tech Stack</p>
                    
                    <Marquee autoFill={true} speed={100} gradient={false} className="overflow-hidden py-4">
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-yellow-500 transition-all cursor-default">JAVASCRIPT</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default">REACT</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-sky-400 transition-all cursor-default">TAILWIND</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">C++</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-orange-500 transition-all cursor-default">HTML</h2>
                    </Marquee>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Resume