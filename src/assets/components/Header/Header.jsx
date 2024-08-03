import styles from "./Header.module.css"
import MediaQuery from "../Responsive/MediaHeader.module.css"
export default function Header(){
    return(
        <main className={` ${styles.Container} ${MediaQuery.MediaQuery}`}>
            <h2>Bem-vindo(a) de volta</h2>
            <h1>Faça login na sua conta</h1>
           
        </main>
    )
}