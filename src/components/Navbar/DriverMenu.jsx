import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
            to="/shipments/driver"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Buscar Solicitudes
          </Link>
        </li>
        <li className={styles.listOnlyMobile}>
          <Link
            to="/offer/driver"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Mis Ofertas
          </Link>
        </li>
        <li className={styles.listOnlyMobile}>
          <Link
            to="/myshipments/driver"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Viajes en curso
          </Link>
        </li>
        <li className={styles.list}>
          <HashLink
            to="/#about-section"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Sobre Nosotros
          </HashLink>
        </li>
        <li className={styles.list}>
          <HashLink
            to="/#contact-section"
            className={isMobile ? styles.linkActive : styles.link}
            onClick={() => setIsMobile(false)}
          >
            Contacto
          </HashLink>
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
              {/* <Link
                to="/"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={() => setIsMobile(false)}
              >
                Ajustes
              </Link> */}
              <button
                type="submit"
                className={isMobile ? styles.linkActive : styles.linkDropMenu}
                onClick={handleLogout}
                style={{ border: "0", marginLeft: "4px" }}
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
