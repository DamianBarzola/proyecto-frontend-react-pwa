import React from "react";
import styles from "../../styles/Request.module.css";
import { transformDateFormat } from "../../utils/validations";
import { Link } from "react-router-dom";
const data = [
  {
    id: 34,
    payment: null,
    receipt: null,
    state: "Offer Accepted",
    locationFrom: "dddddddddddd",
    locationTo: "aaaaaaaaaaaaaaaa",
    shipDate: "2022-02-25T00:00:00.000Z",
    deliveryDate: null,
    confirmationDate: null,
    registrationDate: "2022-02-12T01:44:40.000Z",
    user: {
      id: 27,
      name: "Damian",
      lastname: "Barzola",
      email: "d@gmail.com",
      phone: "44444444444444",
      gender: null,
      birthDate: "1999-01-04T00:00:00.000Z",
      registrationDate: "2022-02-02T02:28:15.000Z",
    },
    items: [
      {
        id: 17,
        description: "adsasd",
        weight: "10.00",
        size: "aaaaaaaaa",
        quantity: 1,
        image_1: null,
        image_2: null,
      },
      {
        id: 18,
        description: "aaaaaaa",
        weight: "10.00",
        size: "aaaaaaaaa",
        quantity: 1,
        image_1: null,
        image_2: null,
      },
    ],
    offers: [
      {
        id: 3,
        registrationDate: "2022-02-05T01:18:22.000Z",
        updatedDate: "2022-02-18T18:26:52.000Z",
        price: "700.00",
        confirmed: true,
        driver: {
          id: 7,
          name: "Agustin",
          lastname: "Etcheverry",
          email: "echea@gmail.com",
          phone: "1233456",
          gender: null,
          birthDate: "1999-06-17 00:00:00.000",
          registrationDate: "2022-02-16T02:19:04.000Z",
          license: null,
          greenCard: null,
        },
      },
      {
        id: 2,
        registrationDate: "2022-02-05T01:18:22.000Z",
        updatedDate: "2022-02-18T18:26:52.000Z",
        price: "350.00",
        confirmed: false,
        driver: {
          id: 5,
          name: "jdsagj",
          lastname: "kjlashdjka",
          email: "dmasd@gasd.com",
          phone: "456456456",
          gender: "M",
          birthDate: "1999-01-03 21:00:00.000",
          registrationDate: "2022-02-05T01:18:22.000Z",
          license:
            "http://res.cloudinary.com/da7kbso2t/image/upload/v1644023897/dwmgoib720hvi35pacxo.jpg",
          greenCard:
            "http://res.cloudinary.com/da7kbso2t/image/upload/v1644023898/eadbtkwtrbizuees7cye.jpg",
        },
      },
      {
        id: 1,
        registrationDate: "2022-02-05T01:18:22.000Z",
        updatedDate: "2022-02-05T01:18:22.000Z",
        price: "500.00",
        confirmed: false,
        driver: {
          id: 6,
          name: "kdashdk",
          lastname: "djhklasdjas",
          email: "da@g.com",
          phone: "54656465",
          gender: "F",
          birthDate: "1999-02-03 21:00:00.000",
          registrationDate: "2022-02-05T01:35:50.000Z",
          license:
            "http://res.cloudinary.com/da7kbso2t/image/upload/v1644024949/bdwx5omtwy86wf5k2xxu.jpg",
          greenCard:
            "http://res.cloudinary.com/da7kbso2t/image/upload/v1644024950/obftqee8i8uzqvd88xxp.jpg",
        },
      },
    ],
  },
  {
    id: 35,
    payment: null,
    receipt: null,
    state: "Waiting Offers",
    locationFrom: "aaaaaaaa",
    locationTo: "ddddddddddd",
    shipDate: "2022-03-04T00:00:00.000Z",
    deliveryDate: null,
    confirmationDate: null,
    registrationDate: "2022-02-12T01:46:35.000Z",
    user: {
      id: 27,
      name: "Damian",
      lastname: "Barzola",
      email: "d@gmail.com",
      phone: "44444444444444",
      gender: null,
      birthDate: "1999-01-04T00:00:00.000Z",
      registrationDate: "2022-02-02T02:28:15.000Z",
    },
    items: [
      {
        id: 19,
        description: "aaaaa",
        weight: "4.00",
        size: "aaaaaaa",
        quantity: 1,
        image_1: null,
        image_2: null,
      },
    ],
    offers: [],
  },
];
const ViewInProgress = ({ shipments }) => {
  return (
    <div className={styles.cardForm}>
      <h1>Solicitudes En Curso</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          {Object.keys(data).length !== 0 ? (
            <div>
              {data.map((element) => {
                return (
                  element.state === "Offer Accepted" && (
                    <Link
                      to={"/shipment/" + element.id}
                      params={element.id}
                      style={{ textDecoration: "none" }}
                      key={element.id}
                    >
                      <div className={styles.cardElement}>
                        <div className="row">
                          <div className="col-12">
                            <h3>{"Solicitud Nro: " + element.id}</h3>
                            <hr className={styles.asd} />
                          </div>
                        </div>
                        <div className="row p-2 ">
                          <div className="col-6 ">
                            <div className="mb-2">
                              <b> Origen:</b> {element.locationFrom}
                            </div>
                            <div>
                              <b> Destino:</b> {element.locationTo}
                            </div>
                          </div>
                          <div className="col-6 align-self-center ">
                            <div>
                              <b>Fecha:</b>{" "}
                              {transformDateFormat(element.shipDate)}
                            </div>
                            <div>
                              <b>Items:</b> {element.items.length}
                            </div>
                            <div>
                              <b>Ofertas:</b> {element.offers.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                );
              })}
            </div>
          ) : (
            <div>
              <h5>Actualmente no tienes Solicitudes</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInProgress;
