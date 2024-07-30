import Extra from "./Extra/Extra";
import Button from "./Input/Button";
import Google from "./Input/Google";
import Login from "./Input/Login";
import SignIn from "./SignIn/SignIn";
import styles from './Forms.module.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Forms(){
    return(
        <div className={styles.Container}>
            <Login/>
             <Extra/>
             <Button/>
            <Google/>
            <SignIn/>
        </div>
    )
}