import React from "react";
import styles from "../styles/Search.module.css";

interface SearchProps {
  onSearch: (category: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const searchTerm = data.get("category") as string;

    if (searchTerm.toString().trim().length === 0) return;

    event.currentTarget.reset();
    event.currentTarget.focus();

    onSearch(searchTerm);
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <input
        type="text"
        name="category"
        placeholder="cat"
        className={styles.searchTerm}
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
