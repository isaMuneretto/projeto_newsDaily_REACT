import { CardBody, CardContainer, CardFooter } from "./CardStyled"

export function Card({ news }) {
    console.log(news)
    return (
        <CardContainer>{/*tag section */}{/*como aqui é html e os dados dentro das tags são JS, tem que interpolar com chaves */}
            <CardBody> {/*tag article */}
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.text}</p>
                </div>
                <img src={news.image} alt="Imagem" />
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{news.likes}</span>
                </div>

                <div>
                    <i className="bi bi-chat"></i>
                    <span>{news.comments}</span>
                </div>

            </CardFooter>
        </CardContainer>
    )
}