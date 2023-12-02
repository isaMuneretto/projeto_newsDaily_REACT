import { TextLimit } from "../TextLimit/TextLimit"
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled"

export function Card(props) {
    console.log(props)
    return (
        <CardContainer>{/*tag section */}{/*como aqui é html e os dados dentro das tags são JS, tem que interpolar com chaves */}
            <CardBody> {/*tag article */}
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.title}</h2>
                        <TextLimit text={props.text} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>{props.likes?.length}</span>
                        </section>

                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{props.comments?.length}</span>
                        </section>
                    </CardFooter>

                </div>
                <img src={props.banner} alt="Imagem" />

            </CardBody>
        </CardContainer>
    )
}