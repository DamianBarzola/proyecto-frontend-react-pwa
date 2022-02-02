import React, { useState } from "react";
import styles from "../../styles/Landing.module.css";

import { RiTeamFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
import AccordionFAQs from "./AccordionFAQs";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <div className={styles.cardAbout}>
        <h1>
          <b>Sobre Nosotros</b>
        </h1>
        <div className="tabs row pt-lg-5 pb-lg-5 text-dark justify-content-between ">
          <div className="col-lg-2  ">
            <ul className={styles.btns}>
              <li>
                <button
                  className={
                    activeTab === "1"
                      ? styles.tabsTriggerSelected
                      : styles.tabsTrigger
                  }
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <FaBuilding
                    style={{
                      fontSize: "21px",
                      transform: "translate(0px, -2px)",
                    }}
                  />{" "}
                  Empresa
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "2"
                      ? styles.tabsTriggerSelected
                      : styles.tabsTrigger
                  }
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <RiTeamFill
                    style={{
                      fontSize: "21px",
                      transform: "translate(0px, -2px)",
                    }}
                  />{" "}
                  Equipo
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "3"
                      ? styles.tabsTriggerSelected
                      : styles.tabsTrigger
                  }
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <BiHelpCircle
                    style={{
                      fontSize: "22px",
                      transform: "translate(0px, -1.5px)",
                    }}
                  />{" "}
                  FAQs
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 " style={{ textAlign: "justify" }}>
            <section
              className={
                activeTab === "1" ? styles.tabsPanel : styles.tabsPanelHidden
              }
            >
              <div className="">
                <p style={{ fontSize: "22px", textAlign: "center" }}>
                  <b>Empresa</b>
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  cumque vel quam eligendi maxime dolor placeat id iusto, autem
                  assumenda deleniti nemo ullam ut ea corporis commodi corrupti
                  a fugit! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Molestiae hic quas soluta quidem eius assumenda, neque
                  quos, dignissimos harum provident doloribus voluptatibus at
                  maxime nesciunt, perspiciatis repellat iure? Aperiam, iste.
                </p>
              </div>
            </section>
            <section
              className={
                activeTab === "2" ? styles.tabsPanel : styles.tabsPanelHidden
              }
            >
              <div className="">
                <p style={{ fontSize: "22px", textAlign: "center" }}>
                  <b>Equipo</b>
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  cumque vel quam eligendi maxime dolor placeat id iusto, autem
                  assumenda deleniti nemo ullam ut ea corporis commodi corrupti
                  a fugit! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Molestiae hic quas soluta quidem eius assumenda, neque
                  quos, dignissimos harum provident doloribus voluptatibus at
                  maxime nesciunt, perspiciatis repellat iure? Aperiam, iste.
                </p>
              </div>
            </section>
            <section
              className={
                activeTab === "3" ? styles.tabsPanel : styles.tabsPanelHidden
              }
            >
              <div className="">
                <p style={{ fontSize: "22px", textAlign: "center" }}>
                  <b>Preguntas Frecuentes</b>
                </p>
                <div>
                  <AccordionFAQs />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
