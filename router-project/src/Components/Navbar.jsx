import React  from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const arr = [
    {path:"/", title:"Home"},
    {path:"/Products", title:"Products"},
    {path:"/cart", title:"Cart"},
    {path:"/about", title:"About"},
    {path:"/contact", title:"Contact"},
    {path:"/signin", title:"Sign-In"},
];

function Navbar () {

return (
        <div className={styles.Navbar}>
            {arr.map((elem) => (
                <NavLink className={({isActive})=> {
                    return isActive ? styles.active : styles.default
                }} key={elem.path} to={elem.path}>{elem.title}</NavLink>
            ))}
        </div>

)
}

export default Navbar;