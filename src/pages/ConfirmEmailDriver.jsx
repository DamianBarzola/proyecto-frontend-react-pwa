import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { confirmEmailDriver, errorMsg } from "../actions/auth";

const PageMsg = () => {
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorMsg(""))
    dispatch(confirmEmailDriver(token));
  }, [dispatch, token]);

  const msg = useSelector((state) => state.auth.msg);

    return (
      <div>
        <section className={styles.card404}>
          <div className={styles.form}>
            <h1>Notificación</h1>
            {msg && (
              <div className="mb-3">
                <span
                  style={{
                    color: "red",
                    letterSpacing: "1px",
                    fontSize: "16px",
                  }}
                >
                  {msg}
                </span>
              </div>
            )}
            {!msg && (
              <div className="mb-3">
                  <span>Driver confirmado correctamente.</span>
              </div>
            )}
            <div className="mt-4">
              <Link to="/login" className={styles.btnLink}>
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  
};

export default PageMsg;
