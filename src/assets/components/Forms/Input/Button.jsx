import styles from './InputStyles/Button.module.css'
export default function Button(){
    return(
        <div className={styles.Container}>
        <button className={styles.ButtonSubmit} type="submit">Entrar na conta</button>
        </div>
    )
}