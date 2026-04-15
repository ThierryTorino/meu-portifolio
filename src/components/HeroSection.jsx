import Minhafoto from '../assets/images/foto.png'
import { BsSearch } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { motion } from "framer-motion";

function HeroSection(){
    const textoRepeticoes = [1,2,3,4,5,6,7,8,9,10] 

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
            className="bg-[#080a12] w-full overflow-hidden min-h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 relative px-6 py-20 lg:py-0 z-0"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
            
            <motion.div variants={animacaoFilho} className="text-center lg:text-left z-20 w-full max-w-[600px] lg:max-w-none flex-1">
                <p className="text-zinc-100 font-bold text-2xl lg:text-4xl">Olá eu sou o</p>
                <p className="text-violet-400 text-5xl md:text-7xl lg:text-8xl font-changaOne [text-shadow:0_0_10px_#8b5cf6]">
                    THIERRY TORINO
                </p> 
                <p className="text-zinc-400 max-w-full lg:max-w-[600px] mt-4 mx-auto lg:mx-0">
                    Estudante de Ciência da Computação apaixonado por criar interfaces funcionais e dinâmicas. Meu foco é o desenvolvimento Front-End moderno, mas possuo base sólida em lógica de programação e estruturas de dados (C++). Não fico apenas na teoria. Gosto de aplicar o que estudo em projetos reais e desafiadores.
                </p>

                <div className='flex flex-col sm:flex-row mt-8 items-center justify-center lg:justify-start gap-4'>
                    <a href='https://www.linkedin.com/in/thierry-torino/' target='_blank' rel="noreferrer" className='text-white bg-violet-500 hover:bg-violet-400 transition-colors rounded-2xl px-5 py-3 flex items-center shadow-[0_0_15px_rgba(139,92,246,0.5)] font-bold'>
                        <BsSearch className='text-white mr-3 font-bold'/> 
                        linkedin.com/in/thierry-torino
                    </a>
                    <BiLogoLinkedinSquare className='text-violet-500 h-10 w-10 hidden sm:block'/>
                </div>
            </motion.div>
                
            <motion.div variants={animacaoFilho} className='flex-1 relative flex justify-center lg:justify-end w-full lg:max-w-[500px] z-10 mt-10 lg:mt-0'>
                <div className='relative z-10 mx-auto lg:ml-auto lg:mr-0'>
                    <img src={Minhafoto} className='w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[450px] object-cover relative z-20 rounded-full lg:rounded-3xl shadow-2xl mx-auto' alt="Foto de Thierry Torino" />
                    
                    <div className='absolute z-10 -top-[130px] -left-10 lg:-left-20 pointer-events-none select-none w-full max-w-[500px]'>
                        {textoRepeticoes.map((numero)=>{
                            return <p 
                                key={numero} 
                                className='font-changaOne text-9xl lg:text-[180px] text-transparent bg-clip-text [-webkit-text-stroke:1px_white] opacity-8 lg:opacity-5'
                                style={{
                                    position: 'absolute',
                                    top: numero * 45,
                                }}
                            >currículo</p>
                        })}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default HeroSection