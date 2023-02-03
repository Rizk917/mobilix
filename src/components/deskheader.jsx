import React, { useState, lazy } from "react";
import logo from "../images/logo_transparent.png";
import bmenue from "../images/bmenu.png";



function DeskHeader({ open, setOpen }) {
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="deskheader" open={open} setOpen={setOpen}>
      <img
        src={logo}
        alt="logo"
        loading={lazy}
        className="desk-header-logo"
        onClick={() => setOpen(true)}
      />
      <div className="sidebar-child" onClick={() => setOpen(true)}>
        <a href="/" className="side-element">
          Home
        </a>
        <a href="#" className="side-element">
          Phones
        </a>
        <a href="#" className="side-element">
          News
        </a>
        <a href="/aboutus" className="side-element">
          About us
        </a>
        <a href="/contactus" className="side-element">
          Contact us
        </a>
        <a href="#" className="hidden">
          Favorites
        </a>
      </div>
      <div className="grow">
        <div className={open ? 'align-b' : 'align-b-down'}>
          <a href="#" className="drop" onClick={handleOpen}>
            New here?
          </a>
          {/* className={`align-b ${props.className}`} */}
          <div className="navbar">
            <a href="#">Sign-up</a>
            <a href="#">Log-in</a>
            <a href="#" className="hidden">
              Log-out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// function drop() {
//   let change = document.querySelector(".align-b");
//   change.classList.toggle("align-b-down");

//   let rotate = document.querySelector(".burger-menu");
//   rotate.classList.toggle("burger-rotate");
// }

// function close() {
//   let change = document.querySelector(".align-b");
//       change.classList.toggle("align-b-down");
//   console.log("AKAL")
// }


export default DeskHeader;