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
    const { data, error } = useSWR(url, fetcher);

    const onClickHandler = (e) => {
        e.preventDefault();

        if (url === "")
            setUrl("http://www.omdbapi.com/?apikey=9edb7018&s=bagdad");
        else setUrl("");
    };

    const handleClickDescription = (title) => {
        setTitle(title);
        setHidden(false);
    };

    return (
        <>
            <div>
                <TheLink url={url} handler={onClickHandler} />

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
