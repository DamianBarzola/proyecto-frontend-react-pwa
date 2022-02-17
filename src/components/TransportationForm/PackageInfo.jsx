import React, { useState } from "react";
import styles from "../../styles/Transportation.module.css";
import inputTxt from "../../styles/Input.module.css";
import { BsFillTrashFill } from "react-icons/bs";

const PackageInfo = ({ nextStep, values }) => {
  const { items } = values;
  const [item, setitem] = useState({
    description: "",
    weight: 0,
    size: "",
    quantity: 1,
  });

  const Continue = (e) => {
    values.items = items;
    e.preventDefault();
    nextStep();
  };
  const handleChangeItem = (e) => {
    setitem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = () => {
    items.push(item);
    setitem({ description: "", weight: 0, size: "", quantity: 1 });
  };
  return (
    <>
      <h1>Detalles de la Carga</h1>
      <hr />
      <div className=" row">
        <div className="col-lg-6">
          {" "}
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.description}
              name="description"
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Descripcion
            </label>
          </div>{" "}
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.quantity}
              name="quantity"
              type="number"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Cantidad
            </label>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.weight}
              name="weight"
              type="number"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Peso del Item (En Kgs)
            </label>
          </div>

          <div className={inputTxt.form__div}>
            <input
              onChange={handleChangeItem}
              value={item.size}
              name="size"
              type="text"
              className={inputTxt.form__input}
              placeholder=" "
              style={{ color: "black", border: "1px solid black" }}
            />
            <label className={inputTxt.form__label} style={{ color: "black" }}>
              Tamaño del Item
            </label>
          </div>
          <div className="text-end">
            <button className={inputTxt.add} onClick={handleAdd}>
              Agregar
            </button>
          </div>
        </div>
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
                      <b>Tamaño: </b> {item.size}
                    </div>
                    <div className="col-lg-2">
                      <b>Peso: </b> {item.weight}
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger">
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
      <div className="mt-3">
        <button className={styles.btnDefault} onClick={Continue}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default PackageInfo;
