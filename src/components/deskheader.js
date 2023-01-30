import React from "react";
import logo from '../images/logo_transparent.png';
import bmenue from '../images/bmenu.png';
import { lazy } from "react";
import search from "../images/search.png";

class DeskHeader extends React.Component {
    render() {
        return <header className="deskheader">
            <img src={logo} alt="logo" loading={lazy} className="desk-header-logo"/>
                <div className="sidebar-child">
                <a href="#" className="side-element">Home</a>
                <a href="#" className="side-element">Phones</a>
                <a href="#" className="side-element">News</a>
                <a href="#" className="side-element">About us</a>
                <a href="#" className="side-element">Contact us</a>
                <a href="#" className="hidden">Favorites</a>
                </div>
                <div className="align-b">
                    <p>New here?</p>
                    <a href="#" onClick={drop}  className="drop"></a>
                </div>
            <div className="navbar">
                <a href="#">Sign-up</a>
                <a href="#">Log-in</a>
                <a href="#" className="hidden">Log-out</a>
            </div>
        </header>
    }
}
function drop() {
    let change = document.querySelector(".navbar");
        change.classList.toggle("nav-dropdown");

    let rotate = document.querySelector(".burger-menu");
        rotate.classList.toggle("burger-rotate");
  }

export default DeskHeader;