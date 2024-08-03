import Forms from './Forms/Forms'
import Header from './Header/Header'
import styles from './Layout.module.css'
import responsive from './Responsive/MediaGlobal.module.css'

export default function Layout(){
    return (
        <div className={`${styles.Container} ${responsive.MediaQuery}`}>
            <Header/>
            <Forms/>
        </div>   
    )
}