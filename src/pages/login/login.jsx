import React, { useState } from "react";
import Input from "components/input";
import Button from "components/button/button";
import styles from "./login.module.css";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = () => {
    alert(userName + ": " + password);
  };
  return (
    <div className={styles.LoginContainer}>
      <div className={styles.LoginForm}>
        <h1 className={styles.LoginTitle}>Room File</h1>
        <div className={styles.inputGroup}>
          <span className={styles.inputTitle}>Username</span>
          <Input value={userName} onChange={(value) => setUserName(value)} />
          <span className={styles.inputTitle}>Password</span>
          <Input value={password} onChange={(value) => setPassword(value)} />
        </div>
        <Button text={"Sign In"} onClick={() => doLogin()} />
      </div>
    </div>
  );
}

export default Login;
