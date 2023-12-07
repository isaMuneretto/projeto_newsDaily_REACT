// A navbar vai chamar a Home e a Search
//no onsubmit que vai para o formulario, chama o handlesubmit que passa o parametro de onsearch que chama os dados(data)
//esses dados precisam ser registrados (register)
//no input ele vai pegar todos os dados (...) e mais o title


import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoND.png";
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";


const searchSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    title: z
        .string()
        .nonempty({ message: "A pesquisa não pode ser vazia" })
        .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ter apenas espaços" }), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
});
//

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({ //parametros desestruturados do HookForm(usado para formularios)
        resolver: zodResolver(searchSchema), //zodResolver pode ser qualquer nome
    });
    //se usa o useNavigate pq não vou criar um link no html do return, eu vou mudar de rota pelo javascript
    const navigate = useNavigate(); //reacte-router-dom

    function onSearch(data) {//o que eu quero que aconteça qnd eu fizer o onSubmit é entrar no onSearch e receber os dados(data)
        const { title } = (data);
        //navega na pagina search e vai pegar o title do parametro e vai mostrar
        navigate(`/search/${title}`);
        reset();
    };

    function goAuth() {
        navigate("/auth"); //o navigate faz ir para a rota /auth (main)
    };

    return (
        <>
            <Nav> {/* essas tags são componentes que chamam o arquivo NavbarStyled*/}
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace className="input-search-space">
                        <button type="submit">
                            <i className="bi bi-search"> {/*tag de icone*/}</i>
                        </button>

                        <input {...register("title")}
                            type="text"
                            placeholder="Pesquise por um título "
                        />{/*as tags i e input não viraram componente CSS pq lá no styled foi feito herança */}
                    </InputSpace>
                </form>

                <Link to="/"> {/*esse link é recurso do router-dom e substitui o href para navegação interna */}
                    <ImageLogo src={logo} alt="Logo " />
                </Link>

                <Link to="/auth">
                    <Button type="button" text="Entrar">Entrar</Button> {/*goAuth é uma função inventada*/}
                </Link>

            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>} {/*se isso não for nulo, vai rodar e mostrar na tela title e message*/}
            <Outlet /> {/*a outlet é uma rota que fica embaixo da navbar portanto ela não pode ser colocada em outro lugar*/}
        </>
    )
}

//o codigo em styled components poderia ser em outro arquivo ou também fora da função navbar acima
//tem que ser sempre com letra maiuscula porque senao confunde com a tag html

