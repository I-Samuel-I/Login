import Extra from "./Extra/Extra";
import Button from "./Input/Button";
import Google from "./Input/Google";
import Login from "./Input/Login";
import SignIn from "./SignIn/SignIn";
import styles from './Forms.module.css';
import MediaQuery from '../Responsive/MediaForms.module.css'
export default function Forms(){
    return(
        <div className={` ${styles.Container} ${MediaQuery.MediaQuery} `}>
            <Login/>
            <Extra/>
            <Button/>
            <Google/>
            <SignIn/>
        </div>
    )
}