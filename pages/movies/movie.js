import useSWR from "swr";
import { fetcher } from "../../util/utilFunctions";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
    const apiKey = process.env.APIKEY_OMDBAPI;
    let { title } = context.query;
    const res = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    );
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

const Movie = ({ data }) => {
    //if (error) return <div>Falha na Requisição...</div>

    if (!data) return <div>Carregando...</div>;

    return (
        <div>
            <fieldset>
                <div>Title : {data.Title}</div>
                <div>Year : {data.Year}</div>
                <div>RunTime : {data.Runtime}</div>
            </fieldset>
            <fieldset>
                <Image priority src={data.Poster} width={200} height={200} />
            </fieldset>
            <Link href="/movies/movies3">
                <a>Lista de Filmes</a>
            </Link>
        </div>
    );
};

export default Movie;
