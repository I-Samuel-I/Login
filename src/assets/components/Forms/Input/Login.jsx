import styles from './InputStyles/Login.module.css'
import { useState } from 'react';
export default function Login(){
    const [ShowPassword,setShowPassword] = useState(false);

    function Eye() {
    const link = document.createElement("link");
    link.id ="bootstrap-icons"
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";            
    document.head.appendChild(link);            
}   
    Eye();
    const PasswordVisibility = () =>{
        setShowPassword(prevState => !prevState)
    }
    
    return(
        
        
        <form>  
              
            <div className={styles.Container}>
                <p>E-mail</p>
                <input className={styles.GlobalInput} type="email"placeholder="exemplo@gmail.com" 
                name="email" minLength="20" autoComplete='on' required/>
            </div> 
            <div className={styles.Container}>
                <p>Senha</p>
                <input 
                className={styles.GlobalInput} 
                type={ShowPassword ? "text" : "password"} 
                placeholder="0123456789" 
                name="password" minLength="8" maxLength="70" required/>
                <i 
                className={` ${ShowPassword ? "bi-eye-slash" : "bi-eye"} 
                ${styles.EyeIcon}`}
                onClick={PasswordVisibility}>
                </i>
                
            </div>
        </form>
    )
}