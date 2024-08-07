import styles from './Extra.module.css'
import { useState } from 'react'
export default function Extra(){
    //Váriavel para o state do radio.
    const [RememberSelect, setRememberSelect] = useState(false);
    
    //Ambos fazem o mesmo objetivo, mas não recomendado o abaixo.
    // const RadioClick = () =>{
    //     setRememberSelect (!RememberSelect);

    // }
    //Guarda o resultado anterior, e depois reverte
    // True para False | False para True
    // Retorna o valor atual para o radio/label.
    const RadioClick = () =>{
        setRememberSelect(prevState => !prevState);
        // Função de atualização, forma indireta.
    }
    return(
    <form className={styles.Container}> 
        <div className={styles.Content}>
            <input className={styles.PositionRadio} 
            type="radio" name="remember" id="remember" 
            checked={RememberSelect}
            onClick={RadioClick}></input>
            <label className={styles.PositionRadio} htmlfor="remember" onClick={RadioClick}>
                Lembre de mim
            </label>
        </div>
        <div className={styles.Content}>
            <a className={styles.ContainerLink} href="#" target="_blank">Esqueceu sua senha?</a>
        </div>
    </form>
    )
}