//componentes são funções que dão return em algum HTML, aqui o react já entende que Home é um componente(de pagina no caso)
//Caminho: index chama a main, a main chama o App.jsx e o App.jsx chama o Home.jsx
//aqui vai chamar os componentes (card, footer e navbar)

import { Navbar } from "../../components/Navbar/Navbar";

export default function Home (){
    return ( //o return so pode retornar uma tag entao tem que envolver em uma section ou qlqr outra tag, div, etc no caso usei uma Fragment (tag sem nome) 
        <> {/*Fragment é uma tag vazia não precisa ter nome*/}
            <Navbar/>
            <h1>Olá, Home!</h1>  
        </>
    );
}