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

function Resume(){
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
        <section className="bg-gradient-to-br from-zinc-950 via-zinc-950 to-violet-950 min-h-screen flex flex-col justify-center gap-10 relative overflow-hidden py-20">
                <div className="w-full max-w-6xl mx-auto px-5 z-10 flex justify-start">
                    <h1 className="text-6xl md:text-6xl text-zinc-100 font-changaOne">
                    SOBRE <span className="text-violet-500 [text-shadow:0_0_20px_#8b5cf6]">MIM</span>
                    </h1>
                </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-5 z-10">
                
                <div className="md:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">O Desenvolvedor por trás do código</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Estudante de Ciências da Computação e desenvolvedor focado no ecossistema <span className="text-yellow-500 font-bold">JavaScript</span> / <span className="text-cyan-500 font-bold">Typescript</span>. Buscando me aprofundar em tecnologias modernas como <span className="text-cyan-400 font-bold">React.js</span>. Busco minha primeira experiência na área, para me desenvolver profissionalmente, aplicar minhas habilidades e me aprimorar cada vez mais.
                        </p>
                    </div>
                    
                    <button className="text-white px-8 py-4 bg-violet-600 hover:bg-violet-500 transition-colors w-fit rounded-xl font-bold mt-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        ENTRE EM CONTATO
                    </button>
                </div>

                {/* CAIXA 2: As Tecnologias (Ocupa 1 coluna) */}
                <div className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-8 flex flex-col items-center">
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
                </div>

                <div className="md:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-3xl p-8 overflow-hidden flex flex-col items-center justify-center">
                    <p className="text-zinc-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">Tech Stack</p>
                    
                    <Marquee autoFill={true} speed={100} gradient={false} className="overflow-hidden py-4">
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-yellow-500 transition-all cursor-default">JAVASCRIPT</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-cyan-400 transition-all cursor-default">REACT</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-sky-400 transition-all cursor-default">TAILWIND</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">C++</h2>
                        <h2 className="text-zinc-600 text-6xl font-black mx-10 opacity-30 hover:opacity-100 hover:text-orange-500 transition-all cursor-default">HTML</h2>
                    </Marquee>
                </div>

            </div>
        </section>
    )
}

export default Resume