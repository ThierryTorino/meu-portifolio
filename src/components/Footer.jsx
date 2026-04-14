import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full border-t border-white/10 py-10 flex flex-col items-center justify-center gap-5 bg-zinc-950 relative z-10">
            
            <div className="flex gap-6 text-zinc-400 text-3xl">
                <a href="https://github.com/ThierryTorino" target="_blank" rel="noreferrer" className="hover:text-violet-500 hover:scale-110 transition-all cursor-pointer">
                    <FaGithub />
                </a>
                
                <a href="https://linkedin.com/in/thierry-torino" target="_blank" rel="noreferrer" className="hover:text-violet-500 hover:scale-110 transition-all cursor-pointer">
                    <FaLinkedin />
                </a>
            </div>

            <p className="text-zinc-500 text-sm font-medium tracking-wide">
                Desenvolvido por Thierry Torino © 2026
            </p>
            
        </footer>
    )
}

export default Footer;