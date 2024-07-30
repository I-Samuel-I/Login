import styles from './InputStyles/Google.module.css'
export default function Google(){
    return(
        <div className={styles.Container}>
            <a  className={styles.LinkGoogle} href="https://accounts.google.com/signin" target="_blank"rel="noopener noreferrer">
                    Ou Faça login com o Google
            </a>
        </div>
    )
}