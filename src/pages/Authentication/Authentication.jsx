import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signupSchema } from "../../schemas/signupSchema";

export function Authentication() {
    const { 
        register: registerSignup, //apelido para register 
        handleSubmit: handleSubmitSignup, 
        formState: { errors: errorsSignup }, 
    } = useForm({ resolver: zodResolver(signupSchema)});

    //aqui temos duas estruturas de hook form pq temos dois forms nesse mesmo componente (signin e signup)

    const {
        register: registerSignin, 
        handleSubmit: handleSubmitSignin, 
        formState: { errors: errorsSignin }, 
    } = useForm({resolver: zodResolver(signinSchema)});

    function inHandleSubmit(data) {
        console.log(data)
    };

    function upHandleSubmit(data) {
        console.log(data)
    };

    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input type="email" placeholder="E-mail" name="email" register={registerSignin}/>
                    {errorsSignin.email && (<ErrorSpan>{errorsSignin.email.message}</ErrorSpan>)}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignin}/>
                    {errorsSignin.password && (<ErrorSpan>{errorsSignin.password.message}</ErrorSpan>)}
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="name" register={registerSignup}/>
                    {errorsSignup.name && (<ErrorSpan>{errorsSignup.name.message}</ErrorSpan>)}
                    <Input type="email" placeholder="E-mail" name="email" register={registerSignup}/>
                    {errorsSignup.email && (<ErrorSpan>{errorsSignup.email.message}</ErrorSpan>)}
                    <Input type="password" placeholder="Senha" name="password" register={registerSignup}/>
                    {errorsSignup.password && (<ErrorSpan>{errorsSignup.password.message}</ErrorSpan>)}
                    <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup}/>
                    {errorsSignup.confirmPassword && (<ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>)}
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    );
}