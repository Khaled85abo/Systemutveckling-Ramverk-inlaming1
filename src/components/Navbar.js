import React from "react";
import {Link} from "react-router-dom";

import "../style/_navbar.scss";

const Navbar = () =>{

    return(
        <nav className={"nav"}>
            <Link className={"nav-element"} to="/Home">Home</Link>
            <Link className={"nav-element"} to="/Book">Book time</Link>
            <Link className={"nav-element"} to="/Booking">My bookings</Link>
            <Link className={"nav-element"} to="/Account">My Account</Link>
        </nav>
    )
}

export default Navbar;