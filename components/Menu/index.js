import Link from "next/link";
import styles from "./style.module.css";
const categories = [
    {
        label:"Home",
        link:"/"        
    },
    {
        label:"Produtos",
        link:"/produtos"
    },
    {
        label:"Primeiro Post",
        link:"/posts/first-post"
    }
]


export const Menu = ()=>{
    return(
        <div>
            <ul className={styles.listMenu}>
                {
                    categories.map((category,index)=>{
                        return(
                            <li key={index}>
                                <Link href={category.link}>
                                    <a className={styles.categoryItem}>{category.label}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

