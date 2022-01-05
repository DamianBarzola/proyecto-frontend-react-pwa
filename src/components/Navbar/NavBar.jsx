import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import LogMenu from "./LogMenu";
import PublicMenu from "./PublicMenu";

const NavBar = ({ log }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/home" className={styles.logo}>
        <div>FleteRos</div>
      </Link>
      {log ? <LogMenu /> : <PublicMenu />}
    </nav>
  );
};

export default NavBar;
