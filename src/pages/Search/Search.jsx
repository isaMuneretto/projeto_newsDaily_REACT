//quando digitar la no navegador na barra de pesquisa na pagina Home, ele va para a pag Search e roteie e fique variando entre as duas
//a unica que fica fixa é a Navbar (vai ser uma rota pai) ela vai chamar a Home e a Search

import { useParams } from "react-router-dom"

export function Search() {
    const { title } = useParams();

    return <h1>{title}</h1>
}