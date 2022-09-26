import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const arr = [
    { links: "/", title:"Home" },
    { links: "/AllProducts", title:"All Products" },
    // { links: "/AllProducts/:product_id", title:"Products Details" },
];

function Navbar () {


    return (
        <div className= {styles.navbar}>
            {arr.map((elem) => (
                <NavLink 
                className={({isActive}) => {
                    return isActive ? styles.active : styles.default
                }}
                key = {elem.links} to = {elem.links}>
                    {elem.title}
                </NavLink>
            ))}
            
        </div>
    )
}

export default Navbar