import { Menu } from "../Menu";
import styles from './styles.module.css';
export const Layout = ({children})=>{
    return (
        <div>
            <header className={styles.cabecalho}>
                <Menu/>
            </header>
            <main className={styles.main}>
                <aside className={styles.barra_lateral}/>
                <div>
                {children}
                </div>
                
            </main>
        </div>
    );
}