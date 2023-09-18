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

  function handleCategory(category: string) {
    onSearch(category);
  }

  return (
    <>
      <h1 className={styles.header}>Search Image</h1>
      <form onSubmit={handleSearch}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            name="category"
            placeholder="cat"
            className={styles.searchTerm}
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </div>

        <div className={styles.categories}>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("bird")}
            type="button"
          >
            Birds
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("cat")}
            type="button"
          >
            Cats
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("dog")}
            type="button"
          >
            Dogs
          </button>
          <button
            className={styles.categoryButton}
            onClick={() => handleCategory("red fox")}
            type="button"
          >
            Fox
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
