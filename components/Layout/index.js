import { Menu } from "../Menu";
export const Layout = ({children})=>{
    return (
        <div>
            <header>
                <Menu/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}