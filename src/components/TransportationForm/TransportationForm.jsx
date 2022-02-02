import React, { Component } from "react";
import PackageInfo from "./PackageInfo";
import Stepper from "./Stepper";
import Success from "./Success";
import TravelInfo from "./TravelInfo";
import styles from "../../styles/Transportation.module.css";

export class TransportationForm extends Component {
  state = {
    step: 1,
    packDetails: "",
    packComment: "",
    other: "",
    destination: "",
    origin: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step, packDetails, packComment, other, destination, origin } =
      this.state;
    const values = { packDetails, packComment, other, destination, origin };

    switch (step) {
      case 1:
        return (
          <div className={styles.cardForm}>
            <div>
              <Stepper step={step} />
            </div>
            <PackageInfo
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div className={styles.cardForm}>
            <div>
              <Stepper step={step} />
            </div>
            <TravelInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div className={styles.cardForm}>
            <div>
              <Stepper step={step} />
            </div>
            <Success prevStep={this.prevStep} values={values} />
          </div>
        );
      default:
    }
  }
}

export default TransportationForm;
