import Link from "next/link";
import styles from "./style.module.css";
const categories = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Produtos",
        link: "/produtos",
    },
    {
        label: "Primeiro Post",
        link: "/posts/first-post",
    },
    {
        label: "Filmes2",
        link: "/movies/movies2",
    },
    {
        label: "Filmes3",
        link: "/movies/movies3",
    },
];

export const Menu = () => {
    return (
        <div>
            <ul className={styles.listMenu}>
                {categories.map((category, index) => {
                    return (
                        <li key={index} className={styles.categoryItem}>
                            <Link href={category.link}>
                                <a>{category.label}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
