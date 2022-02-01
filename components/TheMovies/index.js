export const TheMovies = ({ data, show }) => {
    if (!show) return <div></div>;

    if (data.error) return <div>Falha na requisição</div>;
    if (data.Search === "") return <div>Carregando...</div>;

    return (
        <div>
            {data.Search.map((m) => (
                <div>
                    {m.Title} --- {m.Year}
                    <a href={`/movies/movie/?&title=${m.Title}`}>
                        Descrição em outra página
                    </a>
                </div>
            ))}
        </div>
    );
};
