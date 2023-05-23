import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "../../styles/Home.module.css";
import { resendEmailUser, errorMsg } from "../../actions/auth";

const Home = () => {
  document.title = "Fleteros - Home";
  const user = useSelector((state) => state.auth.user);
  const driver = useSelector((state) => state.auth.driver);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(errorMsg(""))
    dispatch(resendEmailUser(user.user.email));
  };
  const msg = useSelector((state) => state.auth.msg);

  if (driver) {
    return <Navigate to="../home/driver" />;
  }
  if (!user && !driver) {
    return <Navigate to="../login" />;
  }

  return (
    <>
      <div className={styles.backHome + " row d-flex justify-content-evenly "}>
        <NavigationBar />
        <div className="col-lg-12 d-flex justify-content-center ps-0">
          <div className={styles.cardHome}>
            <div className="m-2">
              <h1>Bienvenido a FleteRos</h1>
            </div>
            <div className="m-2">
              <span style={{ fontSize: "20px" }}>
                En nuestra pagina podras pedir y ver tus solicitudes de
                transporte. Para empezar, podras ver las funciones disponibles
                en el menu.
              </span>
            </div>
            {console.log(user)}
            {console.log(user.user)}
            {!user.user.isVerified && (
            <div className="m-2">
              <h3>Usuario requiere verifiacion de correo</h3>
                <p >Revisa tu correo electronico para poder confirmar tu Email. </p>
                <p> En caso de que el link no funcione haz click en el boton</p>
                <button className="btn btn-primary " onClick={handleSubmit}>
                  Reenviar Email
                </button>
                <div className="my-3">
                {msg && (
                    <span
                      style={{
                        color: "red",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      {msg}
                    </span>
                  )}
                  {!msg && (
                    <span>Email reenviado correctamente.</span>
                  )}
                </div>

            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
