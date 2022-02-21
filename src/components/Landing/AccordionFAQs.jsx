import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import styles from "../../styles/Landing.module.css";

const AccordionFAQs = () => {
  const [activetab, setTab] = useState(0);
  const toggleTab = (tab) => {
    if (activetab !== tab) {
      setTab(tab);
    } else {
      setTab(0);
    }
  };
  return (
    <div>
      <ul style={{ paddingLeft: "0px" }}>
        <li
          className={
            activetab === 1 ? styles.accordionliActive : styles.accordionli
          }
          onClick={() => {
            toggleTab(1);
          }}
        >
          <div className={styles.questionArrow}>
            <span className={styles.question}>¿Que es Fleteros?</span>
            <BsChevronDown
              className={activetab === 1 ? styles.arrowActive : styles.arrow}
            />
          </div>
          <p>
            Fleteros es una aplicacion en la cual podras encontrar servicios de
            transporte para tus bienes u objetos que quieras trasladar de un
            lugar especifico a otro. En nuestra Web tambien puede registrarte
            como conducto, en caso de querer realizar servicios de transporte.
          </p>
          <span className={styles.line}></span>
        </li>
        <li
          className={
            activetab === 2 ? styles.accordionliActive : styles.accordionli
          }
          onClick={() => {
            toggleTab(2);
          }}
        >
          <div className={styles.questionArrow}>
            <span className={styles.question}>
              ¿Desde donde puedo pedir un Servicio?
            </span>
            <BsChevronDown
              className={activetab === 2 ? styles.arrowActive : styles.arrow}
            />
          </div>
          <p>
            Actualmente solo trabajamos en la ciudad de Rosario, Santa Fe. Pero
            en un futuro tenemos planeado expandir nuestras fronteras para poder
            resolver las necesidades de mas gente.
          </p>
          <span className={styles.line}></span>
        </li>
        {/* <li
          className={
            activetab === 3 ? styles.accordionliActive : styles.accordionli
          }
          onClick={() => {
            toggleTab(3);
          }}
        >
          <div className={styles.questionArrow}>
            <span className={styles.question}>Why Preguntita?</span>
            <BsChevronDown
              className={activetab === 3 ? styles.arrowActive : styles.arrow}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque ab nesciunt fugit officiis vel sit eligendi. Quasi est,
            cumque eos totam ipsa aliquid esse, odio neque quod ad a nulla!
          </p>
          <span className={styles.line}></span>
        </li> */}
      </ul>
    </div>
  );
};

export default AccordionFAQs;
