import styles from "../styles/Search.module.css";

export default function Search() {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const searchTerm = data.get("category");

    console.log(searchTerm);
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <input
        type="text"
        name="category"
        placeholder="cute kitten"
        className={styles.searchTerm}
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}
