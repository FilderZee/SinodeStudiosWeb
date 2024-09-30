import React from "react";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {


    return (
        <nav className={NavbarCSS.navbar}>
          <ul className={NavbarCSS.navbar__list}>
            <li className={NavbarCSS.navbar__list__item}><a href="../index.html" className={NavbarCSS.navbar__list__item__link}><b>SinodeStudios</b></a></li>
          </ul>
        </nav>
    );
    };
    export default Navbar;