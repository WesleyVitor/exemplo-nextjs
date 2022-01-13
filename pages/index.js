import {useState} from 'react';

const Home = ()=>{
    return(
        <div>
            <h2>
               Contador App
            </h2>
            <Contador/>
        </div>
    );
}

const Contador = ()=>{
    const [cont, setCont] = useState(0);

    const handleCont = ()=>{
        setCont(cont+1);
    }

    return(
        <div>
            <p>{cont}</p>
            <button onClick={handleCont}>Clique</button> 
        </div>
       
    );
}





export default Home;