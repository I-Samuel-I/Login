import styles from "./Header.module.css"
export default function Header(){
    return(
        <main className={styles.Container}>
            <h2>Bem-vindo(a) de volta</h2>
            <h1>Faça login na sua conta</h1>
        </main>
    )
}