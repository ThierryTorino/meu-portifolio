function NavBar(){
    return(
        <nav>
            <div className="flex justify-between p-3 ">
                <h1 className="text-zinc-100">Thierry Torino</h1>
                <ul className="flex gap-3 text-zinc-100 ">
                    <p>Sobre Mim</p>
                    <p>Resumo</p>
                    <p>Contato</p>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar