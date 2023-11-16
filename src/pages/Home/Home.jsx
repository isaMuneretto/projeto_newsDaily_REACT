//componentes são funções que dão return em algum HTML, aqui o react já entende que Home é um componente(de pagina no caso)
//Caminho: index chama a main, a main chama o App.jsx e o App.jsx chama o Home.jsx
//aqui vai chamar os componentes (card, footer e navbar)

import { Card } from "../../components/Card/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from '../../Datas.js' //buscar o conteudo mocado (ficticio) no Datas
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {
    return ( //o return so pode retornar uma tag entao tem que envolver em uma section ou qlqr outra tag, div, etc no caso usei uma Fragment (tag sem nome) 
        <> {/*Fragment é uma tag vazia não precisa ter nome*/}
            <Navbar />
            <HomeBody>
                {news.map((item, index) => {
                    return <Card key={index} news={item} />
                })}
            </HomeBody>

        </>
    );
}
