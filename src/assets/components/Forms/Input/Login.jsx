import styles from './InputStyles/Login.module.css'
export default function Login(){
    return(
        <form>
            <div className={styles.Container}>
                <p>E-mail</p>
                <input className={styles.GlobalInput} type="email"placeholder="exemplo@gmail.com" 
                name="email" minLength="20"></input>
            </div> 
            <div className={styles.Container}>
                <p>Senha</p>
                <input className={styles.GlobalInput} type="password" placeholder="0123456789" 
                name="password" minLength="8" 
                maxLength="70"></input>
            </div>
        </form>
    )
}