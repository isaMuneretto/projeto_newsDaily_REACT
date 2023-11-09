export function Card({news}){
console.log(news)
    return (
        <section>{/*como aqui é html e os dados dentro das tags são JS, tem que interpolar com chaves */}
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <img src={news.image} alt="Imagem" />
            <i className="bi bi-hand-thumbs-up"></i>
            <span>{news.likes}</span>
            <i className="bi bi-chat"></i>
            <span>{news.comments}</span>
        </section>
    )
}