import { Menu } from "../Menu";
import styles from "./styles.module.css";
export const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.cabecalho}>
                <Menu />
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};
