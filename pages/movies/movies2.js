import useSWR from "swr";
import Link from 'next/link'
import Head from 'next/head'

async function fetcher(url){
    const res = await fetch(url);
    const json = await res.json();

    return json;
}


const Movie2 = ()=>{
    const {data,error} = useSWR("http://www.omdbapi.com/?apikey=9edb7018&s=bagdad",fetcher);


    <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    </Head>
    if(error) return <div>Falha na Requisição...</div>

    if(!data) return <div>Carregando...</div>

    return (
        <div>
            {
                data.Search.map(movie=>{
                   return (
                       <div>
                           <Link href={`/movies/movie/?title=${movie.Title}`}>
                           <a>{movie.Title} --- {movie.Year}</a>
                           
                           </Link>
                       </div>
                   );
                
                })
            }
            
        </div>
    );
}

export default Movie2;