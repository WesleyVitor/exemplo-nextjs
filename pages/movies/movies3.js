const theFetcher = async (url) => {
    if (url === null || url === "") return { Search: "" };

    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export const TheMovies = ({ data, show }) => {
    if (!show) return <div></div>;

    if (data.error) return <div>Falha na requisição</div>;
    if (data.Search === "") return <div>Carregando...</div>;

    return (
        <div>
            {data.Search.map((m) => (
                <div>
                    {m.Title} --- {m.Year}
                </div>
            ))}
        </div>
    );
};

export const TheLink = ({ url, handler }) => {
    return (
        <div>
            <a href="/movies/movie3" onClick={handler}>
                {url === "" ? "Mostrar" : "Ocultar"}
            </a>
        </div>
    );
};

import useSWR from "swr";

import { useState } from "react";

export default function Movies3() {
    const [url, setUrl] = useState("");

    const { data, error } = useSWR(url, theFetcher);

    const onClickHandler = (e) => {
        e.preventDefault();

        if (url === "")
            setUrl("http://www.omdbapi.com/?apikey=9edb7018&s=bagdad");
        else setUrl("");
    };

    return (
        <div>
            <TheLink url={url} handler={onClickHandler} />

            <TheMovies
                data={
                    error
                        ? { error: "Erro na pesquisa" }
                        : data
                        ? data
                        : { Search: "" }
                }
                show={url !== ""}
            />
        </div>
    );
}
