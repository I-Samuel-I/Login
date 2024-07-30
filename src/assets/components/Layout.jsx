
import Forms from './Forms/Forms'
import Header from './Header/Header'
import styles from './Layout.module.css'

export default function Layout(){
    return (
        <div className={styles.Container}>
            <Header/>
            <Forms/>
        </div>
            
    )
}