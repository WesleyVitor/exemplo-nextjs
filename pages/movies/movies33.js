import useSWR from "swr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    titleSearchString: yup.string().required("Campo Obrigatório"),
});

export function TheForm({ onClickHandler }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onClickHandler)}>
                <label htmlFor="titleSearchString">Filtro de Título</label>
                <input
                    {...register("titleSearchString")}
                    id="titleSearchString"
                />
                <p>{errors.titleSearchString?.message}</p>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export function TheMovies({ data, show }) {
    if (!show) return <div></div>;

    if (!data) return <div></div>;

    if (data.error) return <div>falha na pesquisa</div>;

    if (data.Search === []) return <div>carregando...</div>;

    return (
        <div>
            {data.Search.map((m) => (
                <div key={m.imdbID}>
                    {m.Title} --- {m.Year}
                </div>
            ))}
        </div>
    );
}

export function TheLink({ url, handleShow, show }) {
    return (
        <div>
            <a href="/movies/movies33" onClick={handleShow}>
                {" "}
                {!show ? "Mostrar" : "Ocultar"}{" "}
            </a>
        </div>
    );
}

export default function Movies33() {
    const [state, setState] = useState({ url: "", titleSearchString: "" });
    const [show, setShow] = useState(false);
    const { data, error } = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return { Search: [] };

        if (state.url === "" || state.titleSearchString === "")
            return { Search: [] };

        const res = await fetch(
            `${state.url}/?apiKey=9edb7018&s=${state.titleSearchString}`
        );

        const json = await res.json();

        return json;
    });

    const onClickHandler = ({ titleSearchString: title }) => {
        //let s = document.getElementById("titleSearchString").value;
        //console.log(s);
        setShow(!show);
        if (state.url === "") {
            setState({
                url: "http://www.omdbapi.com",
                titleSearchString: title,
            });
        } else
            setState({ url: "", titleSearchString: state.titleSearchString });
    };

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <div>
            <TheForm onClickHandler={onClickHandler} />

            <TheLink url={state.url} handleShow={handleShow} show={show} />

            <TheMovies data={data ? data : { Search: [] }} show={show} />
        </div>
    );
}
