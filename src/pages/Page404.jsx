import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Page404 = () => {
  return (
    <div>
      <section className={styles.card404}>
        <div className={styles.form}>
          <h1>Página no encontrada</h1>
          <span>
            Lo sentimos, la página que estas buscando no pudo ser encontrada
            (Error 404).
          </span>
          <div className="mt-4">
            <Link to="/" className={styles.btnLink}>
              Volver al Sitio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
