import useSWR from 'swr';
import {fetcher} from '../../util/utilFunctions';
import Image from 'next/image';
import Link from 'next/link';
export function getServerSideProps(context){
    let {title} = context.query
    console.log(title);
    return {
        props:{
            title
        }
    }
}




const Movie = ({title})=>{

    const {data,error} = useSWR(`http://www.omdbapi.com/?apikey=9edb7018&t=${title}`,fetcher);


    if (error) return <div>Falha na Requisição...</div>

    if(!data) return <div>Carregando...</div>




    return (
        <div>
            <fieldset>
                <div>Title : {data.Title}</div>
                <div>Year : {data.Year}</div>
                <div>RunTime : {data.Runtime}</div>
            </fieldset>
            <fieldset>
                <Image 
                priority
                src={data.Poster}
                width={200}
                height={200}                
                />
            </fieldset>
            <Link href="/movies/movies2">
                <a>Lista de Filmes</a>
            </Link>
        </div>
    )
}

export default Movie;