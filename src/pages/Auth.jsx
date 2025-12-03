import React, { useState } from "react";
import styles from "../Auth.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className={styles.authPage}>
      <div className={styles.overlayWrapper}>
        <h1 className={styles.overlayHeading}>BOOK STORE</h1>
        <div className={styles.boxOverlay}>
          <div className={styles.iconWrapper}>
            <FaRegUserCircle className={styles.icon} />
          </div>
          {showLogin ? (
            <>
              <div className={styles.loginTitle}>Login</div>
              <div className={styles.loginForm}>
                <input
                  type="text"
                  placeholder="EmailId"
                  className={styles.inputField}
                />
                <input
                  type="text"
                  placeholder="password"
                  className={styles.inputField}
                />
                <div className={styles.sub}>
                  <span className={styles.span1}>
                    Never share your password with others
                  </span>
                  <span className={styles.span2}>
                    <a href="">forgot password</a>
                  </span>
                </div>
                <div>
                  <button className={styles.btn1}>Login</button>
                </div>
              </div>
              <span>------------------------or--------------------------</span>
              <button className={styles.btn2}>
                <div className={styles.sign}>
                  <FcGoogle className={styles.google} />
                  sign in with google
                </div>
              </button>
              <div className={styles.register}>
                <span>Are you a new user ?</span>
                <button onClick={() => setShowLogin(false)}>
                  <Link to="/Register">Register</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.loginTitle}>Register</div>
              <div className={styles.loginForm}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="username"
                />
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Email Id"
                />
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="password"
                />
                <span className={styles.span1}>
                  Never share your password with others
                </span>
                <div>
                  <button className={styles.btn1}>Register</button>
                </div>
                <div className={styles.register}>
                  <span>Are you already a user ?</span>
                  <button onClick={() => setShowLogin(true)}>
                    <Link to="/Login">Login</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;