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
        {nome: "JavaScript", cor: "bg-yellow-500", icone: <IoLogoJavascript/>},
        {nome: "React", cor: "bg-cyan-400", icone: <FaReact/>},
        {nome: "Cpp", cor: "bg-blue-500", icone: <TbBrandCpp/>},
        {nome: "Git", cor: "bg-orange-500", icone: <FaGitAlt/>},
        {nome: "Tailwind", cor: "bg-cyan-500", icone: <RiTailwindCssFill/>},
        {nome: "Html", cor: "bg-orange-500", icone: <FaHtml5/>},
        {nome: "Css", cor: "bg-blue-500", icone: <FaCss3/>},
        {nome: "GitHub", cor: "bg-zinc-700", icone: <FaGithub/>}
    ]

    return(
        <section className="bg-zinc-950 min-h-screen flex flex-col justify-center gap-36">
            <div className="flex justify-center">
                <h1 className="text-9xl text-white font-changaOne">SOBRE MIM</h1>
            </div>

            <div className="flex flex-row justify-between">
                <div className="max-w-2xl">
                    <p className="text-zinc-200 text-xl leading-relaxed text-left p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl ml-20 ">Estudante de Ciências da Computação e desenvolvedor focado no ecossistema JavaScript. Buscando me aprofundar em tecnologias modernas como React.js e Next.js. Busco minha primeira experiência na área, para me desenvolver profissionalmente, aplicar minhas habilidades e me aprimorar cada vez mais.</p>

                    <button className="text-white p-8 md:p-10 ml-20 bg-violet-500 w-148 rounded-2xl gap-10 mt-5">VER PROJETOS</button>
                </div>

                <div className="flex flex-col mr-20 justify-center items-center gap-5">
                    <h2 className="text-white font-changaOne text-5xl">Tecnologias</h2>
                    <ul className="text-white grid grid-cols-2 gap-4">
                        {tecnologias.map((tech) =>{
                            return(
                                <li className={`${tech.cor}`} key={tecnologias.nome}>{tech.icone}{tech.nome}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume