import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../../util/utilFunctions";
export const Description = ({ title, hidden }) => {
    const { data, error } = useSWR(
        `http://www.omdbapi.com/?apikey=9edb7018&t=${title}`,
        fetcher
    );

    if (error) return <div>Falha na requisição...</div>;
    if (!data) return <div>carregando...</div>;
    if (hidden) return <div></div>;
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
        </div>
    );
};
