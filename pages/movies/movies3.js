import useSWR from "swr";
import { useState } from "react";
import { TheLink } from "../../components/TheLink";
import { TheMovies } from "../../components/TheMovies";

const theFetcher = async (url) => {
    if (url === null || url === "") return { Search: "" };

    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export default function Movies3() {
    const [url, setUrl] = useState("");

    const { data, error } = useSWR(url, theFetcher);

    const onClickHandler = (e) => {
        e.preventDefault();

        if (url === "")
            setUrl("http://www.omdbapi.com/?apikey=9edb7018&s=bagdad");
        else setUrl("");
    };

    const onClickHandler2 = (e) => {
        e.preventDefault();

        if (url === "") {
            setUrl("http://www.omdbapi.com/?apikey=9edb7018&s=avenger");
        } else setUrl("");
    };

    return (
        <div>
            <TheLink url={url} handler={onClickHandler} />
            <TheLink url={url} handler={onClickHandler2} />

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
