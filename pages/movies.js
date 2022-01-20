import Image from "next/image";
export async function getServerSideProps(context){
    
    const res = await fetch("http://www.omdbapi.com/?apikey=9edb7018&s=bagdad&y=2011");
    const data = await res.json();
    console.log(data);
    return {
        props:{
            data
        }
    }
}

const Movies = ({data})=>{
    return(
        <div>
            <div>
                <ul>
                    {
                        data.Search.map((movie,index)=> {
                            
                            return (
                                <li key={index}>
                                    {movie.Title} --- {movie.Year} <br/>
                                    <Image 
                                    width={200}
                                    height={200}
                                    src={movie.Poster }/>
                                </li>
                            )
                        
                        })
                    }
                </ul>
                
            </div>
        </div>
    );

}   

export default Movies;