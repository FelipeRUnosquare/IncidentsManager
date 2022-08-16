import React, { useRef, useState } from "react";
import styles from "./Main.module.sass";

const LoginForm = (props) => {
  const usernameRef = useRef();
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [isInvalidPass, setIsInvalidPass] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    if (username.trim() === "" || !username.includes("@")) {
      setIsInvalidInput(true);
    } else {
      props.onLogin(username);
    }
  };

  return (
    <React.Fragment>
      <h1 className={styles.title}>Incidents Manager</h1>
      <form onSubmit={handleLogin} className={styles["login-form"]}>
        {isInvalidInput && <label>Please enter a valid email</label>}
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
          className={!isInvalidInput ? styles.input : styles["input-error"]}
          onChange={() => {
            setIsInvalidInput(false);
          }}
        />
        {isInvalidPass && <label>Please enter a password</label>}
        <input
          type="password"
          placeholder="Password"
          className={!isInvalidPass ? styles.input : styles["input-error"]}
          onChange={() => {
            setIsInvalidPass(false);
          }}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
