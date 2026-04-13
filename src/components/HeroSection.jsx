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
            className="bg-[#080a12] flex justify-center items-center gap-70 min-h-[80vh]"
        >

            <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"></div>
                <motion.div variants={animacaoFilho}>
                    <p className="text-zinc-100 font-bold text-4xl">Olá eu sou o</p>
                    <p className="text-violet-400 text-8xl font-changaOne [text-shadow:0_0_10px_#8b5cf6]">THIERRY TORINO</p> 
                    <p className="text-zinc-500 w-150">Estudante de Ciência da Computação apaixonado por criar interfaces funcionais e dinâmicas. Meu foco é o desenvolvimento Front-End moderno, mas possuo base sólida em lógica de programação e estruturas de dados (C++).
                    Não fico apenas na teoria. Gosto de aplicar o que estudo em projetos reais e desafiadores.</p>

                    <div className='flex mt-10 items-center'>
                        
                        <a href='https://www.linkedin.com/in/thierry-torino/' target='blank' className='text-white p-0.5 bg-violet-500 w-max rounded-2xl  px-5 py-8) flex hover:bg-violet-400  '><BsSearch className='text-white mr-3 mt-1'/> https://www.linkedin.com/in/thierry-torino/ </a>
                        <BiLogoLinkedinSquare className='text-violet-500 ml-5 h-10 w-10'/>
                    </div>
                    
                    
                </motion.div>
                
                <motion.div variants={animacaoFilho} className='relative'>
                    <img src={Minhafoto} className='w-100 h-100 object-cover relative z-20' alt="" />
                    <div className='relative'>
                        {textoRepeticoes.map((numero)=>{
                        return <p 
                        key={numero} 
                        className='absolute font-changaOne text-8xl text-transparent bg-clip-text [-webkit-text-stroke:1px_white] -mt-130 -ml-30'
                        style={{
                            top: numero*45
                        }}
                        >currículo</p>
                    })}
                    </div>
                    
                </motion.div>
    </motion.section>
    )
    
}

export default HeroSection