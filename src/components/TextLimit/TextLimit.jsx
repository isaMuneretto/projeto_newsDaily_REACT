//é uma boa pratica isolar um componente que faz apenas uma função mas que é generica para todo o projeto

export function TextLimit({text, limit}) {
    const textLimited = text?.length > limit ? `${text.substring(0, limit)}...` : text;

    return <p>{textLimited}</p>;
}