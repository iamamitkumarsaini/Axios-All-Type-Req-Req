import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import {Navigate} from "react-router-dom";
import styles from "../Components/Navbar.module.css"

function SignIn () {

    const {isAuth, toggleAuth} = useContext(AuthContext);

    if (isAuth){
        return <Navigate to= "/products" />
    }

    return(
        <div className="pageHeading">
            <h2>Sign-In</h2>
            <button onClick={toggleAuth} className= {styles.loginBtn}>Sign-in</button>
        </div>
    )
}

export default SignIn