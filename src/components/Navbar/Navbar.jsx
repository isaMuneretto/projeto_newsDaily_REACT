import logo from "../../images/LogoND.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
//import "./Navbar.css";

export function Navbar() {

    return (
        <>
            <Nav> {/* essas tags são componentes que chamam o arquivo NavbarStyled*/}
                <InputSpace className="input-search-space">
                    <i className="bi bi-search"> {/*tag de icone*/}</i>
                    <input type="text" placeholder="Pesquise por um título " />{/*as tags i e input não viraram componente CSS pq lá no styled foi feito herança */}

                </InputSpace>

                <ImageLogo src={logo} alt="Logo News Daily" />

                <Button>Entrar</Button> {/*ao inves de ser um componente HTML, agora é componente CSS*/}
            </Nav>
        </>
    )
}

//o codigo em styled components poderia ser em outro arquivo ou também fora da função navbar acima
//tem que ser sempre com letra maiuscula porque senao confunde com a tag html

