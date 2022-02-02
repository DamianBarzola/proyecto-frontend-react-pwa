import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import LogMenu from "./LogMenu";
import PublicMenu from "./PublicMenu";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <div>FleteRos</div>
      </Link>
      {user ? <LogMenu /> : <PublicMenu />}
    </nav>
  );
};

export default NavBar;
