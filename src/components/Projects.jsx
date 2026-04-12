import { useEffect, useState } from "react"

function Projects (){

    const [meusRepositorios, setMeusRepositorios] = useState([])

    useEffect(() =>{
        fetch('https://api.github.com/users/ThierryTorino/repos')
            .then(resposta => resposta.json()) // Transforma a resposta da internet em JSON
            .then(dados => {
                console.log("Olha o que veio do GitHub:", dados); // Pra gente espiar no F12
                setMeusRepositorios(dados); // Salva os dados na memória do React!
            });
    }, []);

    return(
        <>
            <section className="text-white">
                <div>
                    <h1>Meus Projetos</h1>
                    <p>Seleção automatica dos meus trabalhos mais recentes do GitHub</p>
                    <p>Carregando {meusRepositorios.length} repositórios...</p>
                </div>

            </section>
        </>
    )
}

export default Projects