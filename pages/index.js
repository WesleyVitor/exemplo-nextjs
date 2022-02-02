import { useState } from "react";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <section>
                <h2>Contador App</h2>
                <Contador />
            </section>
        </>
    );
};

const Contador = () => {
    const [cont, setCont] = useState(0);

    const handleCont = () => {
        setCont(cont + 1);
    };

    return (
        <div>
            <p>{cont}</p>
            <button onClick={handleCont}>Clique</button>
        </div>
    );
};

export default Home;
