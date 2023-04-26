import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import UserMenu from "./UserMenu";
import PublicMenu from "./PublicMenu";
import DriverMenu from "./DriverMenu";
import logoWhite from '../../images/logoWhite.png'

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  return (
    <nav className={styles.nav}>
      <Link to="/" >
        <img src={logoWhite} className={styles.logo} alt=""></img>
        {/* <div>FleteRos</div> */}
      </Link>
      {user && <UserMenu />}
      {driver && <DriverMenu />}
      {!user && !driver && <PublicMenu />}
    </nav>
  );
};

export default NavBar;
