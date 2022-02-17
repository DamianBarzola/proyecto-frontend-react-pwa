import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import { HashLink } from "react-router-hash-link";
const PublicMenu = () => {
  const [isMobile, setIsMobile] = useState(false);

  //para que no se rompa cuando esta isMobile en true y el max de pixeles se mas de 960px
  useEffect(() => {
    window.matchMedia("(min-width: 950px)").addEventListener("change", (e) => {
      setIsMobile(false);
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
          <HashLink
            onClick={() => setIsMobile(false)}
            to="/#about-section"
            className={isMobile ? styles.linkActive : styles.link}
          >
            Sobre Nosotros
          </HashLink>
        </li>
        <li className={styles.list}>
          <HashLink
            onClick={() => setIsMobile(false)}
            to="/#contact-section"
            className={isMobile ? styles.linkActive : styles.link}
          >
            Contacto
          </HashLink>
        </li>
        <li className={styles.list}>
          <Link
            onClick={() => setIsMobile(false)}
            to="/login"
            className={isMobile ? styles.linkActive : styles.btnLogin}
          >
            Soy Usuario
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            onClick={() => setIsMobile(false)}
            to="/login/driver"
            className={isMobile ? styles.linkActive : styles.btnRegister}
          >
            Soy Conductor
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PublicMenu;
