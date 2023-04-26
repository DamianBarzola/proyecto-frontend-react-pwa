import React from "react";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import Contact from "../components/Landing/Contact";
import AboutUs from "../components/Landing/AboutUs";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  document.title = "Fleteros - Home";

  return (
    <div className={styles.background}>
      <section className={styles.sectionLanding}>
        <div className={styles.cardLanding}>
          <p>Bienvenido a FleteRos</p>
          <div  className={styles.text}>
            Disfruta de los mejores servicios de transporte de bienes de la
            ciudad de Rosario. En nuestra Web podras encontrar lo necesario para
            poder realizar los viajes mas rapidos y seguros para tus articulos u
            bienes.
          </div>
          <div>
            <Link to="/register" className={styles.btnBegin}>
              Comenzar
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.sectionLanding2} id="about-section">
        <AboutUs />
      </section>
      <section className={styles.sectionLanding2} id="contact-section">
        <Contact />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
