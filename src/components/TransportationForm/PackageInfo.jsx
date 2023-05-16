import React, { useState } from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

const PackageInfo = ({ nextStep, values }) => {
  const { items } = values;
  const [item, setitem] = useState({
    description: "",
    //     weight: 0,
    weight: " ",
    hegith: "",
    width: "",
    depth: "",
    quantity: 1,
  });
  const [msgError, setmsgError] = useState("");
  const [msgErroritem, setmsgErroritem] = useState("");
  const [carga, setcarga] = useState(true);

  const Continue = (e) => {
    e.preventDefault();
    values.items = items;
    if (values.items.length === 0) {
      setmsgError("No hay ningun articulo cargado");
    } else {
      setmsgError("");
      setmsgErroritem("");
      nextStep();
    }
  };
  const handleChangeItem = (e) => {
    setitem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = () => {
    if (
      item.description === "" ||
      item.weight === 0 ||
      item.height === "" ||
      item.width === "" ||
      item.depth === "" ||
      item.quantity === 0
    ) {
      setmsgErroritem("Complete Todos los campos");
    } else {
      items.push(item);
      setitem({
        description: "",
        weight: 0,
        height: "",
        width: "",
        depth: "",
        quantity: 1,
      });
      setmsgErroritem("");
    }
  };
  return (
    <>
      <h1>Detalles de la Carga</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.description}
              name="description"
              type="text"
              autocomplete="off"
              maxLength={150}
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Descripcion
            </label>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="col-12 col-lg-6">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.quantity}
              name="quantity"
              type="number"
              autocomplete="off"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Cantidad
            </label>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.weight}
              name="weight"
              type="number"
              autocomplete="off"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Peso del Item (En Kg)
            </label>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="col-lg-4">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.size}
              name="height"
              type="number"
              autocomplete="off"
              maxLength={100}
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Alto (En Cm)
            </label>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.size}
              name="width"
              type="number"
              autocomplete="off"
              maxLength={100}
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Ancho (En Cm)
            </label>
          </div>
        </div>
        <div className="col-lg-4">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.size}
              name="depth"
              type="number"
              autocomplete="off"
              maxLength={100}
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Profundidad (En Cm)
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end mt-3">
          <button className={inputTxt.add} onClick={handleAdd}>
            <BiPlus size="20px" />
            Agregar
          </button>
        </div>
        {msgErroritem && (
          <div>
            <span className="text-danger">
              <b> {msgErroritem}</b>
            </span>
          </div>
        )}
      </div>

      <hr />

      <div className="row">
        <h3>Items cargados</h3>
        {items.length ? (
          <div>
            {items.map((item, index) => {
              return (
                <div className={styles.cardItem} key={index}>
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-2 ">
                      <b>Item:</b> {item.description}
                    </div>
                    <div className="col-lg-2">
                      <b>Cantidad: </b>
                      {item.quantity}
                    </div>
                    <div className="col-lg-2">
                      <b>Tamaño: </b> {item.height}x{item.width}x{item.depth} cm
                    </div>
                    <div className="col-lg-2">
                      <b>Peso: </b> {item.weight}
                    </div>
                    <div className="col-lg-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          items.splice(index, 1);
                          setcarga(!carga);
                        }}
                      >
                        <BsFillTrashFill />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h5>Actualmente no hay items cargados</h5>
          </div>
        )}
      </div>
      <hr />
      {msgError && (
        <div>
          <span className="text-danger">
            <b> {msgError}</b>
          </span>
        </div>
      )}
      <div className="mt-3">
        <button className={styles.btnDefault} onClick={Continue}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default PackageInfo;
