import styles from "./SignIn.module.css"
export default function SignIn(){
    return(
        <div className={styles.Container}>
                <div className={styles.Content}>
                    <p className={styles.Paragraph}>Não tem uma conta?</p>
                </div>
                <div className={styles.Content}>
                    <a className={styles.SignIn} href="#" target="_blank">Cadastre-se</a>
                </div>
                
        </div>
    )
}