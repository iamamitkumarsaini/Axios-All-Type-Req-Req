import React from "react";
import  {NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const obj = {path:"/about", title:"About Us"};

function Footer () {

    return (

        <div className={styles.Footer}>
            <div>
                <h4>Get to Know Us</h4>
                <NavLink to = {"/about"}>{obj.title}</NavLink>
                <p>Carrier</p>
                <p>Press Release</p>
            </div>

            <div>
                <h4>Connect With us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>

            <div>
                <h4>Make Money With Us</h4>
                <p>Sell on Our Platform</p>
                <p>Sell Globally</p>
                <p>Become An Affiliate</p>
                <p>Advertise Your Products</p>
                <p>Become a Seller</p>
            </div>

            <div>
                <h4>Let Us Help You</h4>
                <p>product Return Centre</p>
                <p>Your Account</p>
                <p>100% Purchase protection</p>
                <p>Seller Assistance</p>
                <p>Help</p>
            </div>
        </div>
    )
}

export default Footer;