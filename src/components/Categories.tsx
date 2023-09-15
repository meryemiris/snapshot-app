import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <form className={styles.categories}>
      <button className={styles.categoryButton} type="submit">
        Birds
      </button>
      <button className={styles.categoryButton} type="submit">
        Cats
      </button>
      <button className={styles.categoryButton} type="submit">
        Dogs
      </button>
    </form>
  );
}
