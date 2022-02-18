import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutDriver } from "../../actions/auth";
import styles from "../../styles/Navbar.module.css";

const DriverMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropMenuOpen, setDropMenuOpen] = useState(false);

  const dispatch = useDispatch();
  //para que no se rompa cuando esta isMobile en true y el max de pixeles se mas de 960px
  useEffect(() => {
    window.matchMedia("(min-width: 950px)").addEventListener("change", (e) => {
      setIsMobile(false);
      setDropMenuOpen(false);
    });
  }, []);
  const handleLogout = (e) => {
    let token = JSON.parse(localStorage.getItem("jwt"));
    dispatch(signOutDriver(token));
    setIsMobile(false);
  };

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
        <li className={styles.listOnlyMobile}>
          <Link
            to="/"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Nueva Solicitud
          </Link>
        </li>
        <li className={styles.listOnlyMobile}>
          <Link
            to="/"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Mis Solicitudes
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            to="/"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Sobre Nosotros
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
              style={{ paddingLeft: 0 }}
            >
              <Link
                to="/"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={() => setIsMobile(false)}
              >
                Ajustes
              </Link>
              <button
                type="submit"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={handleLogout}
                style={{ backgroundColor: "transparent", border: "0" }}
              >
                Cerrar Sesion
              </button>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default DriverMenu;
