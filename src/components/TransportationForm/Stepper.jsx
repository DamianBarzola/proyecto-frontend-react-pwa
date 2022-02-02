import React from "react";
import styles from "../../styles/Transportation.module.css";
import { FaMapMarkedAlt, FaBox, FaTruck, FaCheck } from "react-icons/fa";

const Stepper = ({ step }) => {
  const styleDef = (nro) => {
    if (step > nro) {
      return `${styles.stepperitem} ${styles.completed}`;
    }
    if (step === nro) {
      return `${styles.stepperitem} ${styles.active}`;
    } else {
      return `${styles.stepperitem}`;
    }
  };
  return (
    <div className={styles.stepperwrapper}>
      <div className={styleDef(1)}>
        <div className={styles.stepcounter}>
          {step > 1 ? <FaCheck /> : <FaBox />}
        </div>
      </div>
      <div className={styleDef(2)}>
        <div className={styles.stepcounter}>
          {step > 2 ? <FaCheck /> : <FaMapMarkedAlt />}
        </div>
      </div>

      <div className={styleDef(3)}>
        <div className={styles.stepcounter}>
          {step > 3 ? <FaCheck /> : <FaTruck />}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
