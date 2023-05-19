import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavigationBar.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";

const NavigationBarDriver = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navlist}>
        <li>
          <Link
            to="/home/driver"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <AiFillHome className={styles.icons} />
              <span className={styles.linkName}>Inicio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/shipments/driver"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center ">
              <MdLocalShipping className={styles.icons} />
              <span className={styles.linkName}>Buscar Viajes</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/myshipments/driver"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <FiPackage className={styles.icons} />
              <span className={styles.linkName}>Viajes en curso</span>
            </div>{" "}
          </Link>
          <Link
            to="/offer/driver"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <FaClipboardList className={styles.icons} />
              <span className={styles.linkName}>Ofertas Enviadas</span>
            </div>{" "}
          </Link>
          <Link
            to="/offer/delivered/driver"
            className={`${styles.link} ${styles.active}`}
            style={{ paddingLeft: "30px" }}
          >
            <div className="d-flex align-items-center">
              <BsFillFolderFill className={styles.icons} />
              <span className={styles.linkName}>Viajes Realizados</span>
            </div>{" "}
          </Link>
        </li>
        <li></li>
        <div className={styles.textCopy}>
          <p>Copyright &copy; 2022. Barzola - Etcheverry - Martin</p>
        </div>
      </ul>
    </div>
  );
};

export default NavigationBarDriver;
