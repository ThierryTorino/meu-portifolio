import { BiRightArrow } from "react-icons/bi";
import Marquee from "react-fast-marquee"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";


function Resume(){
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
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-violet-400 hover:scale-105 transition-all cursor-default shadow-lg">
                            <IoLogoJavascript className="text-yellow-400 text-2xl"/>
                            <span className="text-white font-medium text-lg">JavaScript</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:scale-105 transition-all cursor-default shadow-lg">
                            <FaReact className="text-cyan-400 text-2xl"/>
                            <span className="text-white font-medium text-lg">React.js</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-blue-500 hover:scale-105 transition-all cursor-default shadow-lg">
                            <TbBrandCpp className="text-blue-500 text-2xl"/>
                            <span className="text-white font-medium text-lg">C++</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-orange-500 hover:scale-105 transition-all cursor-default shadow-lg">
                            <FaGitAlt className="text-orange-500 text-2xl"/>
                            <span className="text-white font-medium text-lg">Git</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-cyan-500 hover:scale-105 transition-all cursor-default shadow-lg">
                            <RiTailwindCssFill className="text-cyan-500 text-2xl"/>
                            <span className="text-white font-medium text-lg">Tailwind</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-orange-600 hover:scale-105 transition-all cursor-default shadow-lg">
                            <FaHtml5 className="text-orange-600 text-2xl"/>
                            <span className="text-white font-medium text-lg">HTML5</span>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-blue-600 hover:scale-105 transition-all cursor-default shadow-lg">
                            <FaCss3 className="text-blue-600 text-2xl"/>
                            <span className="text-white font-medium text-lg">CSS3</span>
                        </div>
                    </ul>
                </div>
            </div>

            

        </section>
    )
}

export default Resume