import styles from './InputStyles/Login.module.css'
import { useState } from 'react';
export default function Login(){
    const [ShowPassword,setShowPassword] = useState(false);
    //Função feita para acessar os icones e coloca-los no código.
    function Eye() {
    const link = document.createElement("link");
    link.id ="bootstrap-icons"
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";            
    document.head.appendChild(link);            
}   
    // Retorna a função e inverte os operadores
    Eye();
    const PasswordVisibility = () =>{
        setShowPassword(prevState => !prevState)
    }
    return(
        <form>  
            <div className={styles.Container}>
                <p className={styles.TextInputEmail}>E-mail</p>
                <input className={styles.GlobalInput} type="email"placeholder="exemplo@gmail.com" 
                name="email" minLength="20" autoComplete='on' required/>
            </div> 
            <div className={styles.Container}>
                <p className={styles.TextInputPassword}>Senha</p>
                <input 
                className={styles.GlobalInput} 
                type={ShowPassword ? "text" : "password"} 
                placeholder="0123456789" 
                name="password" minLength="8" maxLength="70" required/>
                <i 
                className={styles.icon}
                onClick={PasswordVisibility}>
                </i>
            </div>
        </form>
    )
}