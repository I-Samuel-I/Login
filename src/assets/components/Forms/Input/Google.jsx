import styles from './InputStyles/Google.module.css'
import Icon from '../../images/icon.png'
export default function Google(){
    return(
        <div className={styles.Container}>
            <button className={styles.LinkGoogle} >
                    <img src={Icon} alt="Google Icon" className={styles.LogoGoogle}></img>
                    Ou Faça login com o Google
            </button>
        </div>
        // href="https://accounts.google.com/signin"
    )
}