import styles from "./button.module.css";
const Input = (props) => {
  const { text, onClick } = props;
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  );
};

export default Input;
