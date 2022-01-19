import {useState} from 'react';
import Link from 'next/link';
import { Layout } from '../components/Layout';
const Home = ()=>{
    return(
        <Layout>
            <h2>
               Contador App
            </h2>
            <Contador/>
            <br/>
            <h2>Acesse a página de lista de  Produtos</h2>
            <Link href="/produtos">
                <a>
                    Listar Produtos
                </a>
            </Link>
        </Layout>
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