import React from "react";
import logo from '../styles/imgs/logo.png'

export default function NavBar() {
  return (
    <nav className="nav-bar container">
      <div  className="main-logo"><a href="/mysoundcloud">SoundGround</a></div>
      <img src={logo} alt=""/>

    </nav>
  );
}
