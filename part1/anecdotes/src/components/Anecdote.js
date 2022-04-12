import styles from '../styles/Anecdote.module.css';

export const Anecdote = ({ anecdote }) => (
  <p className={styles.p}>{anecdote}</p>
);
