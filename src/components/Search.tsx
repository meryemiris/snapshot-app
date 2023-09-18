import React from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: (category: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const searchTerm = data.get("category") as string;

    if (searchTerm.trim().length === 0) return;

    onSearch(searchTerm);
  }

  const handleCategory = (category: string) => {
    onSearch(category);
  };

  return (
    <>
      <h1 className={styles.header}>Search Image</h1>
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
        <div className={styles.categories}>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("bird")}
            type="button"
            name="birds"
          >
            Birds
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("cat")}
            type="button"
            name="cats"
          >
            Cats
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("dog")}
            type="button"
            name="dogs"
          >
            Dogs
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
