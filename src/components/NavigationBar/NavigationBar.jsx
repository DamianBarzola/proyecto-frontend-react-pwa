import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavigationBar.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navlist}>
        <li>
          <Link
            to="/home"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <AiFillHome className={styles.icons} />
              <span className={styles.linkName}>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/newshipment"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center ">
              <MdLocalShipping className={styles.icons} />
              <span className={styles.linkName}>Nueva Solicitud</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/myshipments"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <FaClipboardList className={styles.icons} />
              <span className={styles.linkName}>Mis Solicitudes</span>
            </div>{" "}
          </Link>
        </li>
        <div className={styles.textCopy}>
          <p>Copyright &copy; 2022. Barzola - Etcheverry - Martin</p>
        </div>
      </ul>
    </div>
  );
};

export default NavigationBar;
