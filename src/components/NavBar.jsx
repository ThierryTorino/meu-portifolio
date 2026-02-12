function NavBar(){
    return(
        <nav>
            <div className="flex justify-between ml-10 mr-10 mt-5">
                <h1>Thierry Torino</h1>
                <ul className="flex gap-3">
                    <p>Sobre Mim</p>
                    <p>Resumo</p>
                    <p>Contato</p>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar