import styles from '../styles/Votes.module.css';

export const Votes = ({ votes }) => (
  <h5 className={styles.h5}>Has {votes} votes</h5>
);
