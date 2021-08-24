import React, { useState } from "react";
import styles from "./input.module.css";
const Input = (props) => {
  const { defaultValue, placeholder, onChange } = props;
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    console.log(e);
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return <input className={styles.input} type="text" value={value} onChange={handleChange} placeholder={placeholder}/>;
};

export default Input;
