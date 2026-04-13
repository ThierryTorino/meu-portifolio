import { BsLightningChargeFill } from "react-icons/bs";

function NavBar(){
    return(
        <nav className="sticky top-0 z-50 bg-zinc-950/50">
            <div className="flex justify-between p-3 font-changaOne">
                <h1 className="text-zinc-100 flex gap-3"><BsLightningChargeFill className="items-center text-violet-500 w-5 h-5"/>Thierry Torino</h1>
                    <a href="https://wa.me/16992569075" className="flex bg-violet-500 rounded-2xl px-5 py-0.5 justify-center items-center text-zinc-100 cursor-pointer hover:bg-violet-400">Contato</a>
            </div>
        </nav>
    )
}

export default NavBar