import styles from '../styles/Button.module.css';

export const Button = ({ onClick, text }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);
