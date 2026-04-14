import Minhafoto from '../assets/images/foto.png'
import { BsSearch } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { motion } from "framer-motion";

function HeroSection(){
    const textoRepeticoes = [1,2,3,4,5,6,7,8,9,10,11]

    const animacaoPai = {
        escondido: { opacity: 0 },
        visivel: {
            opacity: 1,
            transition: { staggerChildren: 0.4 }
        }
    };

    const animacaoFilho = {
        escondido: { opacity: 0, y: 30 },
        visivel: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 100, damping: 15 } 
        }
    };

    return(
        <motion.section 
            variants={animacaoPai}
            initial="escondido"
            animate="visivel"
            className="bg-[#080a12] w-full overflow-x-hidden flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32 min-h-[80vh] px-6 py-20 lg:py-0 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
            
                <motion.div variants={animacaoFilho} className="text-center lg:text-left z-10">
                    <p className="text-zinc-100 font-bold text-2xl lg:text-4xl">Olá eu sou o</p>
                    <p className="text-violet-400 text-5xl md:text-7xl lg:text-8xl font-changaOne [text-shadow:0_0_10px_#8b5cf6]">
                        THIERRY TORINO
                    </p> 
                    <p className="text-zinc-500 max-w-full lg:max-w-600px mt-4 mx-auto lg:mx-0">
                        Estudante de Ciência da Computação apaixonado por criar interfaces funcionais e dinâmicas. Meu foco é o desenvolvimento Front-End moderno, mas possuo base sólida em lógica de programação e estruturas de dados (C++). Não fico apenas na teoria. Gosto de aplicar o que estudo em projetos reais e desafiadores.
                    </p>

                    <div className='flex flex-col sm:flex-row mt-8 items-center justify-center lg:justify-start gap-4'>
                        <a href='https://www.linkedin.com/in/thierry-torino/' target='blank' className='text-white bg-violet-500 hover:bg-violet-400 transition-colors rounded-2xl px-5 py-3 flex items-center shadow-[0_0_15px_rgba(139,92,246,0.5)]'>
                            <BsSearch className='text-white mr-3'/> 
                            <span className="truncate max-w-200px sm:max-w-none">
                                linkedin.com/in/thierry-torino
                            </span>
                        </a>
                        <BiLogoLinkedinSquare className='text-violet-500 h-10 w-10 hidden sm:block'/>
                    </div>
                </motion.div>
                
                <motion.div variants={animacaoFilho} className='relative flex justify-center z-10 mt-10 lg:mt-0'>
                    <img src={Minhafoto} className='w-64 h-64 md:w-80 md:h-80 lg:w-400px lg:h-400px object-cover relative z-20 rounded-full lg:rounded-none' alt="Foto de Thierry Torino" />
                    
                    <div className='hidden lg:block relative'>
                        {textoRepeticoes.map((numero)=>{
                            return <p 
                                key={numero} 
                                className='absolute font-changaOne text-8xl text-transparent bg-clip-text [-webkit-text-stroke:1px_white] -mt-130px -ml-30px opacity-10 pointer-events-none select-none'
                                style={{
                                    top: numero * 45
                                }}
                            >
                                currículo
                            </p>
                        })}
                    </div>
                </motion.div>
        </motion.section>
    )
}

export default HeroSection