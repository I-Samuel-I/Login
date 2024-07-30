import styles from './InputStyles/Button.module.css'
export default function Button(){
    return(
        <div className={styles.Container}>
        <button type="submit">Entrar na conta</button>
        </div>
    )
}