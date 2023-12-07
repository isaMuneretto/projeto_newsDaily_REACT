//quando digitar la no navegador na barra de pesquisa na pagina Home, ele va para a pag Search e roteie e fique variando entre as duas
//a unica que fica fixa é a Navbar (vai ser uma rota pai) ela vai chamar a Home e a Search

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { searchNews } from "../../services/newsServices";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
    const { title } = useParams();
    const [news, setNews] = useState([]);

    async function search() {
        try {
            const newsApi = await searchNews(title);
            setNews(newsApi.data.results);
            console.log(news)
        } catch (err) {
            console.log(err);
            setNews([]);
        }
    }

    useEffect(() => { //monitora a mudança do title qnd digitar para fazer o search
        search();
    }, []);


    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {news.length
                        ? `Encontramos ${news.length} ${
                            news.length > 1 ? "resultados" : "resultado"
                        } para:`
                        : "Não encontramos resultados para:"}
                </span>
                <h2>{title}</h2>
            </TextResults>

            <SearchNews>
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
            </SearchNews>
        </ContainerResults>
    )
}