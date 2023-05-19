import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavigationBar.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillFolderFill } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navlist}>
        <li>
          <Link
            to="/home"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "15px" }}
          >
            <div className="d-flex align-items-center">
              <AiFillHome className={styles.icons} />
              <span className={styles.linkName}>Inicio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/newshipment"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "15px" }}
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
            style={{ paddingLeft: "15px" }}
          >
            <div className="d-flex align-items-center">
              <FaClipboardList className={styles.icons} />
              <span className={styles.linkName}>Solicitudes Activas</span>
            </div>{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/inprogress"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "15px" }}
          >
            <div className="d-flex align-items-center ">
              <BsFillClockFill className={styles.icons} />
              <span className={styles.linkName}>Solicitudes en Curso</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/finish"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "15px" }}
          >
            <div className="d-flex align-items-center ">
              <BsFillFolderFill className={styles.icons} />
              <span className={styles.linkName}>Solicitudes Finalizadas</span>
            </div>
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
