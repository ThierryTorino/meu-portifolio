import { BsLightningChargeFill } from "react-icons/bs";

function NavBar(){
    return(
        <nav>
            <div className="flex justify-between p-3 font-changaOne">
                <h1 className="text-zinc-100 flex gap-3"><BsLightningChargeFill className="items-center text-violet-500 w-5 h-5"/>Thierry Torino</h1>
                <ul className="flex gap-3 text-zinc-100 ">
                    <li>Sobre Mim</li>
                    <li>Resumo</li>
                    <li className="flex bg-violet-500 rounded-2xl px-5 py-0.5 justify-center items-center">Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar