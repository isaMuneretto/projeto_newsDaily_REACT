//componentes são funções que dão return em algum HTML, aqui o react já entende que Home é um componente(de pagina no caso)
//Caminho: index chama a main, a main chama o App.jsx e o App.jsx chama o Home.jsx
//aqui vai chamar os componentes (card, footer e navbar)

import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar";
/* import { news } from '../../Datas.js'  *///buscar o conteudo mocado (ficticio) no Datas
import { getAllNews, getTopNews } from "../../services/newsServices.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";

export default function Home() {
    const [news, setNews] = useState([]); //array desestruturado, variavel news inicializa con array vazio. setNews altera o estado de array vazio para array com alguma coisa
    const [topNews, setTopNews] = useState({});

    async function findAllNews() { //essa função utiliza o Service para trazer os posts
        const newsResponse = await getAllNews();
        setNews(newsResponse.data.results); //atualiza um estado e renderiza na tela

        const topNewsResponse = await getTopNews();
        setTopNews(topNewsResponse.data.news);
    }

    //findAllNews(); qnd renderizar,essa função vai chamar o axios e vai trazer os posts aqui só que está na raiz e vai criar um loop
    //abaixo função de callback (o que vai acontecer qnd useEffect for acionado) e array de dependencias 
    //é quem ele precisa monitorar para que o efeito seja dado na tela
    useEffect(() => {
        findAllNews();
    }, []); // Remova news das dependências    

    return ( //o return so pode retornar uma tag entao tem que envolver em uma section ou qlqr outra tag, div, etc no caso usei uma Fragment (tag sem nome) 
        <> {/*Fragment é uma tag vazia não precisa ter nome*/}
            <Navbar />
            <HomeHeader>
                <Card
                    top={true} //para estilizar apenas a noticia topnews
                    title={topNews.title}
                    text={topNews.text}
                    banner={topNews.banner}
                    likes={topNews.likes}
                    comments={topNews.comments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    );
                })}
            </HomeBody>

        </>
    );
}
