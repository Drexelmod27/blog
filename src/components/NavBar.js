import React from "react";
import { Link } from "react-router-dom"; //client side routing

function NavBar () {
    return (
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/pages/dashboard">Dashboard</Link></li>
        </ul>
    )
}

export default NavBar;