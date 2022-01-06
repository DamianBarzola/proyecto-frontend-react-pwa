import React from "react";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import Contact from "../components/Landing/Contact";
import AboutUs from "../components/Landing/AboutUs";

const Landing = () => {
  document.title = "Fleteros - Home";

  return (
    <div className={styles.background}>
      <section className={styles.sectionLanding}>
        <div className={styles.cardLanding}>
          <p>Bienvenido</p>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            necessitatibus quam quas, aut, exercitationem non doloribus quo
            consequuntur, ea neque ipsam debitis adipisci assumenda atque sunt
            impedit illum similique inventore. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nemo quae necessitatibus voluptate
            molestiae pariatur nulla officia impedit ipsam ab, quod et! Illum
            sunt deserunt at rerum sapiente hic praesentium itaque.
          </div>
          <div>
            <Link to="/login" className={styles.btnBegin}>
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
    </div>
  );
};

export default Landing;
