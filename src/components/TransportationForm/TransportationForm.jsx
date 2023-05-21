import React, { Component } from "react";
import PackageInfo from "./PackageInfo";
import Stepper from "./Stepper";
import Success from "./Success";
import TravelInfo from "./TravelInfo";
import styles from "../../styles/Transportation.module.css";

export class TransportationForm extends Component {
  state = {
    step: 1,
    shipment: {
      shipDate: "",
      locationFrom: "",
      locationTo: "",
      distance: "",
      duration: "",
      delivery_shift: "M",
    },
    items: [],
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
    this.setState({
      shipment: { ...this.state.shipment, [input]: e.target.value },
    });
  };
  handleChangeLocation = (from, to, duration, distance, delivery_shift) => {
    this.setState({
      shipment: {
        ...this.state.shipment,
        locationFrom: from,
        locationTo: to,
        duration: duration,
        distance: distance,
        delivery_shift: delivery_shift,
      },
    });
  };

  render() {
    const { step, shipment, items } = this.state;
    const values = { shipment, items };

    switch (step) {
      case 1:
        return (
          <div className={styles.cardForm}>
            <div>
              <Stepper step={step} />
            </div>
            <PackageInfo nextStep={this.nextStep} values={values} />
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
              handleChangeLocation={this.handleChangeLocation}
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
