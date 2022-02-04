import useSWR from "swr";
import { useState } from "react";
import { TheLink } from "../../components/TheLink";
import { TheMovies } from "../../components/TheMovies";
import { Description } from "../../components/Description";
import { fetcher } from "../../util/utilFunctions";

export default function Movies3() {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [hidden, setHidden] = useState(true);
    const [filme, setFilme] = useState("");
    const { data, error } = useSWR(url, fetcher);

    const handleSubmit = () => {
        setHidden(true);
        if (url === "")
            setUrl(
                `http://www.omdbapi.com/?apikey=9edb7018&s=${
                    filme ? filme : "bagdad"
                }`
            );
        else setUrl("");
    };

    const handleClickDescription = (title) => {
        setTitle(title);
        setHidden(!hidden);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setFilme(value);
    };

    return (
        <>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <input type="text" name="filme" onChange={handleChange} />
                    <input type="submit" value="Pesquisar" />
                </form>
                <TheMovies
                    handleClickDescription={handleClickDescription}
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

            <aside>
                <Description title={title} hidden={hidden} />
            </aside>
        </>
    );
}
