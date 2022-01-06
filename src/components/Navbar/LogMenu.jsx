import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";

const LogMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropMenuOpen, setDropMenuOpen] = useState(false);

  //para que no se rompa cuando esta isMobile en true y el max de pixeles se mas de 960px
  useEffect(() => {
    window.matchMedia("(min-width: 950px)").addEventListener("change", (e) => {
      setIsMobile(false);
      setDropMenuOpen(false);
    });
  }, []);

  return (
    <>
      <div>
        {isMobile ? (
          <FaTimes
            className={styles.menubtn}
            onClick={() => setIsMobile(!isMobile)}
          />
        ) : (
          <FaBars
            className={styles.menubtn}
            onClick={() => setIsMobile(!isMobile)}
          />
        )}
      </div>
      <ul className={isMobile ? styles.ulistActive : styles.ulist}>
        <li className={styles.list}>
          <Link
            to="/home"
            onClick={() => setIsMobile(false)}
            className={isMobile ? styles.linkActive : styles.link}
          >
            Home
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Cosa
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Contacto
          </Link>
        </li>

        <li className={styles.list}>
          <label
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setDropMenuOpen(!dropMenuOpen)}
          >
            Perfil
            <BsChevronDown className={styles.arrow} />
          </label>
          {dropMenuOpen && (
            <ul
              className={isMobile ? "" : styles.dropMenu}
              style={{ paddingLeft: "0px" }}
            >
              <Link
                to="/"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={() => setIsMobile(false)}
              >
                Ajustes
              </Link>
              <Link
                to="/"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={() => setIsMobile(false)}
              >
                Cerrar Sesion
              </Link>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default LogMenu;
