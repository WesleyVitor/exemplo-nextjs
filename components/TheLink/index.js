export const TheLink = ({ url, handler }) => {
    return (
        <div>
            <a href="/movies/movie3" onClick={handler}>
                {url === "" ? "Mostrar" : "Ocultar"}
            </a>
        </div>
    );
};
