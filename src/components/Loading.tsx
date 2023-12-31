import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <span>Loading...</span>
    </div>
  );
}
