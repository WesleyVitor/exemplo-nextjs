import Image from "next/image";
import utilStyles from '../../styles/util.module.css';



export async function getServerSideProps(context){
    
    const res = await fetch(`
    http://www.omdbapi.com/?apikey=9edb7018&s=${context.params.title}`);
    const data = await res.json();
    
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
                <ul className={utilStyles.list}>
                    {
                        data.Search.map((movie,index)=> {
                            
                            return (
                                <li className={utilStyles.listItem} key={index}>
                                    <h3>{movie.Title}</h3> 
                                    <p>Year: {movie.Year}</p>
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