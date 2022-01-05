import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Footer.module.css";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.rowFooter}>
            <div className={style.footerCol}>
              <h4 className={style.title}>Sobre Nosotros</h4>
              <p className={style.about}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, cumque recusandae. Consectetur quia aliquid
                similique iure unde sint, dolores deleniti voluptas ad est
                temporibus, reiciendis nobis animi atque ipsam nostrum!
              </p>
            </div>
            <div className={style.footerCol + " ms-md-5"}>
              <h4 className={style.title}>Mapa del Sitio</h4>
              <ul>
                <li>
                  <Link className={style.link} to="/">
                    Cosa
                  </Link>
                </li>
                <li>
                  <Link className={style.link} to="/">
                    Cosa
                  </Link>
                </li>
                <li>
                  <Link className={style.link} to="/">
                    Cosa
                  </Link>
                </li>
                <li>
                  <Link className={style.link} to="/">
                    Cosa
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.footerCol + " ps-md-5"}>
              <h4 className={style.title}>Contáctanos</h4>
              <div className="social-links">
                <a
                  className={style.linkSocial}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook />
                </a>
                <a
                  className={style.linkSocial}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/?hl=es-la"
                >
                  <FaInstagram />
                </a>
                <HashLink className={style.linkSocial} to="/#contact-section">
                  <FiMail />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textCopy}>
        <p>Copyright &copy; 2021. Barzola - Etcheverry - Martin</p>
      </div>
    </>
  );
};

export default Footer;
