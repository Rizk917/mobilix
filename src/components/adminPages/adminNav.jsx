import React from "react";
import { Link } from "react-router-dom";
import './adminNav.css'
import Dashborad from "./Dashboard";
import AdminContactUs from "./contactUsadmin";

function AdminNav(){

    return (
        <div className="adnav">
        <ul className="ul-adminNav">
            <h1>Dashborad</h1>
            <li className="nav-item"><a href="/AdminContactUs">contact us</a></li>
            <li className="nav-item"><a href="Adminarticle">article</a></li>
            <li className="nav-item"><a  href="/AdminPhonedata">phones</a></li>
        </ul>
    </div>

    )



}

export default AdminNav