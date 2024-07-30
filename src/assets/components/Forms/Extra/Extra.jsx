import styles from './Extra.module.css'
export default function Extra(){
    return(
    <form className={styles.Container}> 
        <div className={styles.Content}>
            <input className={styles.PositionRadio} type="radio" name="remember" id="remember" ></input>
            <label className={styles.PositionRadio} for="remember" >Lembre de mim</label>
        </div>
        <ul className={styles.Content}>
            <a className={styles.ContainerLink} href="#" target="_blank">Esqueceu sua senha?</a>
        </ul>
    </form>
    )
}