import Minhafoto from '../assets/images/foto.png'
import { BsSearch } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function HeroSection(){
    const textoRepeticoes = [1,2,3,4,5,6,7,8,9,10,11]

    return(
        <section className="bg-zinc-950  flex justify-center items-center gap-70 min-h-[80vh]">
                <div>
                    <p className="text-violet-500 font-bold text-4xl">Olá meu nome é</p>
                    <p className="text-zinc-100 text-8xl font-changaOne">THIERRY TORINO <span className='animate-piscar text-7xl relative -top-2'>|</span></p> 
                    <p className="text-zinc-500 w-150">Estudante de Ciência da Computação apaixonado por criar interfaces funcionais e dinâmicas. Meu foco é o desenvolvimento Front-End moderno, mas possuo base sólida em lógica de programação e estruturas de dados (C++).
                    Não fico apenas na teoria. Gosto de aplicar o que estudo em projetos reais e desafiadores.</p>

                    <div className='flex mt-10 items-center'>
                        
                        <a href='https://www.linkedin.com/in/thierry-torino/' target='blank' className='text-white p-0.5 bg-violet-500 w-max rounded-2xl px-5 py-8) flex hover:bg-violet-400 hover:scale-110'><BsSearch className='text-white mr-3 mt-1'/> https://www.linkedin.com/in/thierry-torino/ </a>
                        <BiLogoLinkedinSquare className='text-violet-500 ml-5 h-10 w-10'/>
                    </div>
                    
                    
                </div>
                
                <div className='relative'>
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
                    
                </div>
    </section>
    )
    
}

export default HeroSection