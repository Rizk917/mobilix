import React from "react";
import { Link } from "react-router-dom";
import './adminNav.css'
import AdminContactUs from "./contactUsadmin";


function AdminNav(){

    return (
        <div className="adnav">
        <ul className="ul-adminNav">
            <h1>Dashborad</h1>
            <li className="nav-item"><a href="/AdminContactUs">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a className="contact" href="#">Contact</a></li>
        </ul>
    </div>

    )



}

export default AdminNav